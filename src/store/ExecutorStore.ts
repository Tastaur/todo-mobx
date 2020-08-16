import {action, observable} from 'mobx'


class ExecutorStore {
    @observable execturors: any[] = [
        {
            name: 'Вася',
            id: Math.random()
        },
        {
            name: 'Петя',
            id: Math.random()

        },
        {
            name: 'Гурген',
            id: Math.random()

        },
    ]
    @observable newExecutor = ''


    @action changeExecutorName = (e: any) => {
        this.newExecutor = e.currentTarget.value
    }
    @action addNewExecutor = () => {
        if(this.newExecutor){
            let executor = {
                name: this.newExecutor,
                id: Math.random(),
            }
            this.execturors.push(executor)
            this.newExecutor = ''
        }
    }

    @action deleteExecutor = (num: number) => {
        this.execturors = this.execturors.filter(e => e.id !== num)
        debugger
    }
}

export const executorStore = new ExecutorStore()
