import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm, SubmissionError } from 'redux-form';
import { Button, Form, Grid, Image, Message } from 'semantic-ui-react';
import FormField from './FormField';
import { login } from '../../../actions';
import logo from '../../../assets/vitrinaLogo.png';

let LoginPage = props => (
  <div className="login-form">
    <Grid textAlign="center" style={{ height: '100%' }} verticalAlign="middle">
      <Grid.Column style={{ maxWidth: 450 }}>
        <Image src={logo} centered style={{ padding: '30px 0' }} />
        <Form error size="large" onSubmit={props.handleSubmit}>
          <Field
            name="mobile"
            component={FormField}
            type="text"
            fluid
            icon="user"
            iconPosition="left"
            placeholder="رقم الجوال"
          />
          <Field
            name="password"
            component={FormField}
            type="password"
            fluid
            icon="lock"
            iconPosition="left"
            placeholder="كلمة المرور"
          />
          <Message error content={props.error} />
          <Button className="custom-button" fluid size="large">
            تسجيل الدخول
          </Button>
        </Form>
      </Grid.Column>
    </Grid>
  </div>
);

LoginPage = reduxForm({
  form: 'login',
  async onSubmit({ mobile, password }, dispatch, props) {
    try {
      await dispatch(login(mobile, password));
      props.history.push('/dashboard');
    } catch (e) {
      throw new SubmissionError({
        _error: 'خطأ فى اسم المستخدم او كلمة المرور'
      });
    }
  }
})(LoginPage);

const mapStateToProps = ({ auth }) => ({ auth });

export default connect(mapStateToProps)(LoginPage);
