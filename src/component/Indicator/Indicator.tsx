import React, {Component} from 'react';
import {observer} from 'mobx-react';
import {Typography} from '@material-ui/core';

interface IIndicator {
    allTask: number,
    finishTask: number,

}

@observer export default class Indicator extends Component<IIndicator> {
    render() {
        return (
            <div>
                <Typography variant='subtitle2'>
                    Всего задач: {this.props.allTask}, выполено: {this.props.finishTask}
                </Typography>
            </div>
        );
    }

}
