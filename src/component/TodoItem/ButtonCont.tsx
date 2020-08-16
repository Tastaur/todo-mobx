import React, {Component} from 'react';
import {Button} from '@material-ui/core';
import {observer} from 'mobx-react';
import CheckIcon from '@material-ui/icons/Check';
import CloseIcon from '@material-ui/icons/Close';
import DeleteIcon from '@material-ui/icons/Delete';

interface IButtonCont {
    id: number,
    isFinish: boolean,
    deleteTodo: (i: number) => void,
    toggleStatus: (i: number) => void,
}

@observer export default class ButtonCont extends Component<IButtonCont> {
    render() {
        return (
            <div style={{display:'flex'}}>
                <Button onClick={() => this.props.toggleStatus(this.props.id)}>{!this.props.isFinish ?
                    <CheckIcon color='primary'/> : <CloseIcon color='primary'/>}</Button>
                <Button onClick={() => this.props.deleteTodo(this.props.id)}><DeleteIcon color='error'/></Button>
            </div>

        );
    }

}
