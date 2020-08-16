import React, {Component} from 'react';
import {Button} from '@material-ui/core';
import {observer} from 'mobx-react';
import DeleteIcon from '@material-ui/icons/Delete';

interface IExecutorButton {
    deleteExecutor: (i: number) => void,
    id: number,
}

@observer export default class ExecutorButton extends Component<IExecutorButton> {
    render() {
        return (
            <div>
                <Button onClick={() => this.props.deleteExecutor(this.props.id)}><DeleteIcon color='error'/></Button>
            </div>

        );
    }

}
