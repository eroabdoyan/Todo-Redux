import React from 'react'
import './RemoveTodo.css';
import { useDispatch, useSelector } from 'react-redux'
import { removeTodo } from '../../store/reducers/todoSlice'

const RemoveTodo = ({index}) => {

    const dispatch = useDispatch()
    const todoId = useSelector(state => state.todo[index].id)

    const onRemoveTodo = () => {
        dispatch(removeTodo({id: todoId}))
    }


    return (
        <button onClick={() => onRemoveTodo(index)} className='btn-remove'>Remove</button>
    )
}

export default RemoveTodo;