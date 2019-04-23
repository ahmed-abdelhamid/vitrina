import React, { useEffect } from 'react';
import { Field, reduxForm, submit, initialize } from 'redux-form';
import { Modal, Form, Button } from 'semantic-ui-react';
import InputField from './InputField';
import { editFormValidation } from '../../../../helperFunctions/formValidations';
import { editUserData } from '../../../../actions';

const formFields = [
  {
    name: 'firstname',
    type: 'text',
    placeholder: 'الاسم الأول',
    required: true
  },
  {
    name: 'lastname',
    type: 'text',
    placeholder: 'الاسم الأخير',
    required: true
  },
  {
    name: 'email',
    type: 'email',
    placeholder: 'البريد الإلكترونى',
    required: true
  },
  { name: 'mobile', type: 'text', placeholder: 'رقم الجوال', required: true },
  {
    name: 'password',
    type: 'password',
    placeholder: 'كلمة المرور',
    required: false
  },
  {
    name: 'repassword',
    type: 'password',
    placeholder: 'اعادة كلمة المرور',
    required: false
  }
];

let EditProfileForm = ({
  open,
  onClose,
  handleSubmit,
  dispatch,
  adminData
}) => {
  const { firstName, lastName, email, mobile } = adminData;

  useEffect(() => {
    dispatch(
      initialize('editProfileForm', {
        firstname: firstName,
        lastname: lastName,
        mobile,
        email
      })
    );
  }, []);

  const renderFields = () =>
    formFields.map(({ name, type, placeholder, required }, index) => (
      <Field
        key={index}
        component={InputField}
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
      />
    ));

  return (
    <Modal open={open} size="small" onClose={onClose} closeIcon={true}>
      <Modal.Header
        content="تعديل بيانات المستخدم"
        style={{ textAlign: 'center' }}
      />
      <Modal.Content>
        <Form onSubmit={handleSubmit} error>
          {renderFields()}
        </Form>
      </Modal.Content>
      <Modal.Actions>
        <Button
          primary
          type="button"
          content="تعديل"
          icon="edit"
          labelPosition="left"
          onClick={() => {
            dispatch(submit('editProfileForm'));
          }}
        />
        <Button
          negative
          content="إلغاء"
          icon="close"
          labelPosition="left"
          onClick={onClose}
        />
      </Modal.Actions>
    </Modal>
  );
};

export default reduxForm({
  form: 'editProfileForm',
  onSubmit(values, dispatch, props) {
    const id = localStorage.getItem('adminId');
    dispatch(editUserData(values, id));
    props.onClose();
  },
  validate: editFormValidation
})(EditProfileForm);
