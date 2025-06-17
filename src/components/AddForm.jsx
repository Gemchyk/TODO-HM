import React, { useRef } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useDispatch } from 'react-redux';
import { addItem } from '../store/listSlice';
import * as Yup from 'yup';

function AddForm({ value = "", addForm, setNewValue }) {
  const dispatch = useDispatch();

  const validation = Yup.object({
    task: Yup.string().min(5, "At least 5 symbols").required("This field is required")
  });

  const handleSubmit = (values, { resetForm }) => {
   if(addForm){
    const newObj = {
        id: Date.now(),
        name: values.task,
        isDone: false
      };
      dispatch(addItem(newObj));
      resetForm(); 
   }else if(setNewValue){
        setNewValue(values.task);
   }
  };

  return (
    <Formik
      initialValues={{ task: value }}
      validationSchema={validation}
      onSubmit={handleSubmit}
      enableReinitialize
    >
      {form => (
        <Form className="form">
          <Field
            className="form__input"
            name="task"
            placeholder="Write task"
            onChange={(e) => {
              form.setFieldValue('task', e.target.value);
              if (!addForm && setNewValue) {
                setNewValue(e.target.value);
              }
            }}
          />
          <ErrorMessage name="task" component="span" />
          {addForm && <button className="form__btn" type="submit">Add</button>}
        </Form>
      )}
    </Formik>
  );
};

export default AddForm;
