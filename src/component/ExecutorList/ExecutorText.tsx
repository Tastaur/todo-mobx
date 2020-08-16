import React, {Component} from 'react';
import {Typography} from '@material-ui/core';
import {observer} from 'mobx-react';

interface IExecutorText {
    text: string,
}

@observer export default class ExecutorText extends Component<IExecutorText> {
    render() {
        return (
            <div >
                <Typography variant='subtitle1' align='left' color='textPrimary'>
                    {this.props.text}
                </Typography>
            </div>

        );
    }

}
