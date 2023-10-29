import React from 'react'
import { useDispatch } from 'react-redux';
import { addTodo } from '../../store/reducers/todoSlice';
import './AddTodo.css';

const AddTodo = ({id}) => {
    const dispatch = useDispatch();

    const [inputValue, setInputValue] = React.useState('')
    const onChangeInputValue = (e) => {
      setInputValue(e.target.value)
    }
  
    const onAddTodo = () => {
      if(inputValue === '') {
        alert('Oops your input value is empty')
      }else {
        dispatch(addTodo({id, task: inputValue, done: false}))
        setInputValue('')  
      }
    }
    return (
        <div className='add-block'>
            <input type='text' onChange={onChangeInputValue} value={inputValue} className='input-tab'/>
            <button type='submit' onClick={onAddTodo} className='btn-submit'>Submit</button>
        </div>
    )
}

export default AddTodo;