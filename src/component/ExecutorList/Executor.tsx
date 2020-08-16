import React, {Component} from 'react';
import {observer} from 'mobx-react';
import ExecutorText from './ExecutorText';
import ExecutorButton from './ExecutorButton';

interface IExecutor {
    name: string,
    id: any,
    delete: ()=> void,
}

@observer export default class Executor extends Component<IExecutor> {
    render() {
        return (
            <div style={{display:'flex', alignItems: 'center', width: '400px', justifyContent: 'space-between'}}>
                <ExecutorText

                             text={this.props.name}

                />
             <ExecutorButton deleteExecutor={this.props.delete} id={this.props.id} />
            </div>
        );
    }

}
