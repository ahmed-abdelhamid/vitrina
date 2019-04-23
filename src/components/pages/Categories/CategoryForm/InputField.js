import React from 'react';
import { Form, Message } from 'semantic-ui-react';

const FormField = ({
  input,
  required,
  name,
  placeholder,
  type,
  disabled,
  meta: { touched, error }
}) => {
  return (
    <Form.Field required={required}>
      <label>{placeholder}</label>
      <Form.Input
        {...input}
        name={name}
        type={type}
        placeholder={placeholder}
        disabled={disabled}
      />
      {touched && (error && <Message error content={error} />)}
    </Form.Field>
  );
};

export default FormField;
