import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { categories, filterdBy } from '../../store/reducers/categorySlice';
import './FilterButtons.css';

const FilterButtons = () => {
    const dispatch = useDispatch();
    const selectedCategory = useSelector(state => state.filter);

    const handleCategoryFilter = (category) => {
        dispatch(filterdBy(category));
    };

    return (
        <div className='categories'>
            <button
                onClick={() => handleCategoryFilter(categories.All)}
                className={selectedCategory === categories.All ? 'active' : ''}
            >
                All
            </button>
            <button
                onClick={() => handleCategoryFilter(categories.Active)}
                className={selectedCategory === categories.Active ? 'active' : ''}
            >
                Active
            </button>
            <button
                onClick={() => handleCategoryFilter(categories.Completed)}
                className={selectedCategory === categories.Completed ? 'active' : ''}
            >
                Completed
            </button>
        </div>
    );
};

export default FilterButtons;
