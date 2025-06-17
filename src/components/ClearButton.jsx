import React from 'react';
import { useDispatch } from 'react-redux';
import { clearData } from '../store/listSlice';


function ClearButton() {

    const dispatch = useDispatch();


    const handleClick = () => {
        dispatch(clearData())
    }

    return (
        <>
            <button onClick={handleClick}>Clear</button>
        </>
    );
}

export default ClearButton;