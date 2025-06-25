import React from 'react';
import { useDispatch } from 'react-redux';
import {clearDataThunk } from '../store/listSlice';


function ClearButton() {

    const dispatch = useDispatch();


    const handleClick = () => {
        dispatch(clearDataThunk())
    }

    return (
        <>
            <button onClick={handleClick}>Clear</button>
        </>
    );
}

export default ClearButton;