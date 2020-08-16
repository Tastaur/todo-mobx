import React, {Component} from 'react';
import './App.css';
import NavBar from './component/NavBar/NavBar';
import {observer} from 'mobx-react';
import TodoList from './component/TodoList/TodoList';
import InputField from './component/InputField/InputField';
import {todoStore} from './store/TodoStore';
import Indicator from './component/Indicator/Indicator';

let tdStore = todoStore

@observer
class App extends Component {

    render() {
        let store = tdStore
        return (
            <div className="App">
                <NavBar/>
                <div className='wrapper'>
                    <div>
                        <InputField people={store.people}
                                    executors={store.execturors}
                                    changePeople={store.changePeople}
                                    value={store.text}
                                    addNewTodo={store.newTodo}
                                    onChange={store.changeText}
                                    err={store.err}
                        />
                    </div>
                    <div>
                        <TodoList store={store} list={store.todoList}/>
                        {store.todoList.length ? <Indicator allTask={store.allTask} finishTask={store.finishTask}/> : ''}
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
