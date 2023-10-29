import React from 'react'
import './Checkbox.css';
import { useDispatch, useSelector } from 'react-redux';
import { changeTaskDone } from '../../store/reducers/todoSlice';
import { RiCheckboxCircleLine, RiCheckboxBlankCircleLine } from 'react-icons/ri'

const Checkbox = ({id}) => {
    const dispatch = useDispatch()
    //const isDone = useSelector(state => state.todo.done)
    // const isDone = useSelector((state) =>
    //     state.todo.find((todo) => todo.id === id)?.done
    // );
    const isDone = useSelector((state) => {
        const todoItem = state.todo.find((todo) => todo.id === id);
        return todoItem ? todoItem.done : false; // Use false as the default value
      });
    const [checked, setChecked] = React.useState(isDone)


    const onChangeComplete = () => {
        const newChecked = !checked;
        setChecked(newChecked);
        dispatch(changeTaskDone({id, done: newChecked}))
        console.log(isDone)
    };
    

    return (
        <div>
            {isDone 
            ? <RiCheckboxCircleLine onClick={onChangeComplete} className={isDone ? 'checkbox' : ''} /> 
            : <RiCheckboxBlankCircleLine onClick={onChangeComplete} className={isDone ? 'active-btn' : 'checkbox'}/>}
        </div>
        
    )
}

export default Checkbox;