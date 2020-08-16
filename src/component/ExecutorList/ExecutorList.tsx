import React, {Component} from 'react';
import {observer} from 'mobx-react';
import Executor from './Executor';
import {Typography} from '@material-ui/core';
import NewExecutorForm from '../NewExecutorForm/NewExecutorForm';

interface IExecutorList {
    store: any
    list: any[]
}

@observer export default class ExecutorList extends Component<IExecutorList> {
    render() {
        let list = this.props.list.map(e => <Executor key={e.id}
                                                      name={e.name}
                                                      id={e.id}
                                                      delete={this.props.store.deleteExecutor}
        />)
        return (
            <div style={{margin: '30px 0'}}>
                <Typography variant='h5'> Исполнители </Typography>
                {list}
                <NewExecutorForm addNewExecutor={this.props.store.addNewExecutor}
                                 executorName={this.props.store.newExecutor}
                                 changeExecutorName={this.props.store.changeExecutorName}
                />
            </div>
        );
    }

}
