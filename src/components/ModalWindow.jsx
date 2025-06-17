import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import AddForm from './AddForm';




const ModalWindow = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <Button color="default" variant="solid" onClick={showModal}>
        Add Task
      </Button>
      <Modal
        title="Basic Modal"
        closable={{ 'aria-label': 'Custom Close Button' }}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
            <Button key="submit" type="primary" onClick={handleOk}>
              OK
            </Button>,
          ]}
      >
      <AddForm addForm={true} />
      </Modal>
    </>
  );
};
export default ModalWindow;