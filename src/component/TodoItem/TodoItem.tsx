import React, {Component} from 'react';
import {observer} from 'mobx-react';
import TextWrapper from './TextWrapper';
import ButtonCont from './ButtonCont';

interface IItem {
    text: string,
    time: string,
    id: number,
    isFinish: boolean,
    deleteTodo: (i: number) => void,
    people: string,
    toggleStatus: (i: number) => void,
}

@observer export default class TodoItem extends Component<IItem> {
    render() {
        return (
            <div style={{display: 'flex', margin: '0 auto', justifyContent: 'center', alignItems: 'center'}}>
                <TextWrapper
                             isFinish={this.props.isFinish}
                             text={this.props.text}
                             time={this.props.time}
                             id={this.props.id}
                             people={this.props.people}
                />
             <ButtonCont isFinish={this.props.isFinish} toggleStatus={this.props.toggleStatus} id={this.props.id} deleteTodo={this.props.deleteTodo}/>
            </div>
        );
    }

}
