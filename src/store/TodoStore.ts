import {action, computed, observable} from 'mobx'


class TodoStore {
    @observable todoList: any[] = []
    @observable text = ''
    @observable people = 'Выберите исполнителя'
    @observable execturors: any[] = [
        {
            name: 'Вася'
        },
        {
            name: "Петя"
        },
        {
            name: 'Сережа'
        },
    ]

    @observable err = ''

    @computed get time() {
        let date = new Date()
        return `${date.getDate()}.${date.getMonth()}.${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
    }

    @computed get allTask() {
        return this.todoList.length
    }

    @computed get finishTask() {
        return this.todoList.filter(t => t.isComplete).length
    }

    @action changePeople = (e: any) => {
        this.people = e.currentTarget.textContent
    }
    @action changeText = (e: any) => {
        this.text = e.currentTarget.value
    }
    @action newTodo = () => {
        if (this.text) {
            let todo = {
                task: this.text,
                id: Math.random(),
                isComplete: false,
                time: this.time,
                people: this.people
            }
            this.todoList.unshift(todo)
            this.text = ''
            this.people = 'Выберите исполнителя'
            this.err = ''
        } else {
            this.err = 'Необходимо написать задачу'
        }
    }
    @action toggleStatus = (id: number) => {
        this.todoList.map(t => {
            if (t.id === id) {
                t.isComplete = !t.isComplete
            }
            return t
        })
    }
    @action deleteTodo = (num: number) => {
        this.todoList = this.todoList.filter(t => t.id !== num)
    }
}

export const todoStore = new TodoStore()
