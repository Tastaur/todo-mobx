import React, {Component} from 'react';
import {Button, TextField} from '@material-ui/core';
import {observer} from 'mobx-react';

interface INewExecutorForm {
    executorName: string,
    addNewExecutor: () => void,
    changeExecutorName: (t:any) => void,
}

class NewExecutorForm extends Component<INewExecutorForm> {
    render() {
        return (<div style={{display:'flex', flexDirection:'column', margin: '30px 0'}}>
                <TextField placeholder="Введите имя нового исполнителя"
                           onChange={this.props.changeExecutorName}
                           value={this.props.executorName}
                />
                <Button style={{margin:'30px 0'}} onClick={this.props.addNewExecutor}> Добавить исполнителя </Button>
            </div>
        );
    }

}

export default observer(NewExecutorForm)
