import React from 'react';
import {useSelector } from 'react-redux';
import TODOItem from './TODOItem';

function TODOList() {
    const store = useSelector(state => state.list.data);


    return (
        <>
            {store.map(i => <TODOItem key={i.id} item={i}/>)}
        </>
    );
}

export default TODOList;