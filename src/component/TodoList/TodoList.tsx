import React, {Component} from 'react';
import TodoItem from '../TodoItem/TodoItem';
import {observer} from 'mobx-react';

interface IList {
    list: any[],
    store: any,
}


@observer
class TodoList extends Component<IList> {
    render() {
        let list = this.props.list.map(t => <TodoItem time={t.time}
                                                      key={t.id}
                                                      deleteTodo={this.props.store.deleteTodo}
                                                      isFinish={t.isComplete}
                                                      text={t.task}
                                                      toggleStatus={this.props.store.toggleStatus}
                                                      id={t.id}
                                                      people={t.people}
        />)

        return (
            <div style={{width:"500px"}}>
                {list}
            </div>
        );
    }

}

export default TodoList
