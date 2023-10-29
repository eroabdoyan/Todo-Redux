import React from 'react'
import AddTodo from '../AddTodo/AddTodo'
import { useSelector } from 'react-redux'
import RemoveTodo from '../RemoveTodo/RemoveTodo'
import './TodoList.css'
import Checkbox from '../CheckBox/Checkbox'
import FilterButtons from '../FilterCategories/FilterButtons'

const TodoList = () => {
    const todo = useSelector(state => state.todo)
    const filter = useSelector(state => state.filter)
    const ida = todo.length + 1

    const filteredTodo = todo.filter((item) => {
        if (filter === 'ACTIVE') {
            return !item.done;
        } else if (filter === 'COMPLETED') {
            return item.done
        }
            return true;
        })    
    
    return (
        <div className='wrapper'>
            <header>TODO</header>
            <AddTodo todo={todo} id={ida}/>
            <FilterButtons />
            <ul className='task-list-ul'>
                {filteredTodo.map((item, i) => {
                    const id = item.id
                    return (    
                        <div key={i} className='wr'>
                            <div className='list'>
                                <Checkbox todo={todo} id={id} />
                                <li className='tasks'>{item.task}</li>  
                            </div>
                            <RemoveTodo index={i} />  
                        </div>  
                    )}
                )}
            </ul>
        </div>
    )
}

export default TodoList;