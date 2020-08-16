import React, {Component} from 'react';
import {Typography} from '@material-ui/core';
import {observer} from 'mobx-react';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

interface ITextWrapper {
    text: string,
    time: string,
    id?: number,
    isFinish: boolean,
    people: string,
}

@observer export default class TextWrapper extends Component<ITextWrapper> {
    render() {
        return (
            <div style={{width: '500px'}}>
                <Typography variant='subtitle1' align='left' color={!this.props.isFinish ? 'textPrimary' : 'error'}>
                    <FiberManualRecordIcon style={{verticalAlign: 'middle'}} fontSize='small'/> {this.props.text}
                </Typography>
                <Typography variant='subtitle2' align='left' color={!this.props.isFinish ? 'textSecondary' : 'error'}>
                    Дата создания: {this.props.time}
                </Typography>
                <Typography variant='subtitle2' align='left' color={!this.props.isFinish ? 'textSecondary' : 'error'}>
                    Ответственный: {this.props.people === "Выберите исполнителя" ? 'Общая задача' : this.props.people}
                </Typography>
            </div>

        );
    }

}
