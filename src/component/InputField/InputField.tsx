import React, {Component} from 'react';
import {Button, MenuItem, Select, TextField, Typography} from '@material-ui/core';
import {observer} from 'mobx-react';

interface IInputField {
    value: any,
    onChange: (e: any) => void,
    addNewTodo: () => void,
    people: string,
    changePeople: (e: any) => void,
    executors: any[],
    err: string,
}

class InputField extends Component<IInputField> {
    render() {
        let executors = this.props.executors.map(e => <MenuItem key={e.name} value={e.name}>{e.name}</MenuItem>)
        return (<div style={{display: 'flex', width: '400px', flexDirection: 'column', margin: '0 auto'}}>
                <TextField placeholder='Что нужно сделать?'
                           onChange={this.props.onChange}
                           value={this.props.value}
                />
                <Select disableUnderline style={{margin: '30px 0'}} placeholder={'Выберите исполнителя'}
                        value={this.props.people}
                        onChange={this.props.changePeople}
                >
                    {executors}
                    <MenuItem value='Выберите исполнителя'
                              style={{display: 'none'}}
                              disabled={true}
                    >Выберите
                        исполнителя</MenuItem>
                </Select>
                <Button onClick={this.props.addNewTodo}> Добавить задачу </Button>
                {this.props.err && <Typography variant='subtitle1' color='error'>
                    {this.props.err}
                </Typography>}
            </div>
        );
    }

}

export default observer(InputField)
