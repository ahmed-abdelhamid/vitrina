import React from 'react';
import { Field, reduxForm, submit } from 'redux-form';
import { Modal, Form, Button } from 'semantic-ui-react';
import InputField from './InputField';
import FileField from '../../../layouts/FileField';

import { addNewAdvertisement } from '../../../../actions';

let AdvertisementForm = ({ open, onClose, handleSubmit, dispatch }) => {
  return (
    <Modal
      open={open}
      closeOnDocumentClick={true}
      size="small"
      onClose={() => onClose()}
      closeIcon={true}
    >
      <Modal.Header
        content="إضافة إعلان جديد"
        style={{ textAlign: 'center' }}
      />
      <Modal.Content>
        <Form onSubmit={handleSubmit} error>
          <Field
            required={true}
            name="name"
            component={InputField}
            type="text"
            placeholder="اسم الإعلان"
            disabled={false}
          />
          <Field component={FileField} required={true} name="image" />
        </Form>
      </Modal.Content>
      <Modal.Actions>
        <Button
          positive
          type="button"
          content="إضافة"
          icon="check"
          labelPosition="left"
          onClick={() => {
            dispatch(submit('advertisement'));
          }}
        />
        <Button
          icon="close"
          negative
          content="إلغاء"
          labelPosition="left"
          onClick={() => onClose()}
        />
      </Modal.Actions>
    </Modal>
  );
};

export default reduxForm({
  form: 'advertisement',
  onSubmit(values, dispatch, props) {
    dispatch(addNewAdvertisement(values));
    props.onClose();
  },
  validate(values) {
    const errors = {};
    if (!values.name) {
      errors.name = 'حقل إلزامى';
    }

    if (!values.image) {
      errors.image = 'برجاء رفع صورة للإعلان';
    }

    return errors;
  }
})(AdvertisementForm);
