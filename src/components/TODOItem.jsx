import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeItemThunk, changeIsDoneThunk, saveEditThunk } from '../store/listSlice';
import { Button, Modal } from 'antd';
import AddForm from './AddForm';
import ModalWindow from './ModalWindow';


function TODOItem({item}) {


    const dispatch = useDispatch();

    const handleChange = (e) => {
        dispatch(changeIsDoneThunk(e.target.id));  
    }

    const handleRemove = (e) => {
        dispatch(removeItemThunk(e.target.id));
    }
    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };


    const [newValue, setNewValue] = useState(item.name);

    const handleEdit = (e) => {
        console.log(newValue);
        const prop = {
            id: item.id,
            name: newValue
        }
        dispatch(saveEditThunk(prop)); 
        setIsModalOpen(false);
    }

    return (
        <div>
            <span>{item.name}</span>
            <input id={item.id} onChange={handleChange} type="checkbox"  checked={item.isDone}/>
            <button id={item.id} onClick={handleRemove} type="button" className="btn btn-dark">Remove</button>
            <button id={item.id} onClick={showModal} type="button" className="btn btn-dark">Edit</button>
            <Modal
                title="Basic Modal"
                closable={{ 'aria-label': 'Custom Close Button' }}
                open={isModalOpen}
                onOk={handleEdit}
                onCancel={handleCancel}
                footer={[
                    <Button key="submit" type="primary" onClick={handleEdit}>
                    OK
                    </Button>,
                ]}
            >
            <AddForm setNewValue={val => setNewValue(val)} value={item.name} addForm={false} />
            </Modal>
        </div>
    );
}

export default TODOItem;