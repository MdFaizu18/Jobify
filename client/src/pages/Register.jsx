import React from 'react';
import { Form, redirect, useNavigation, Link } from 'react-router-dom';
import Wrapper from '../assets/wrappers/RegisterAndLoginPage';
import { FormRow, Logo } from '../components';
import customFetch from '../utils/customFetch';
import { toast } from 'react-toastify';

//for action (submit page)
export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  console.log(data);
  try {
    await customFetch.post('/auth/register', data);
    toast.success("Registration Successful")
    return redirect('/login');
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return error;
  }
};

function Register() {
  const navigation = useNavigation();
  console.log(navigation);
  const isSubmitting = navigation.state === 'submitting'
  return (
    <Wrapper>
      <Form method='POST' className='form'>
        <Logo/>
        <h4>Register</h4>
        <div className='form-row'>
         <FormRow title="name" type="text" id="name" name="name"/>
         <FormRow title="last name" type="text" id="lastname" name="lastName"/>
         <FormRow title="location" type="text" id="location" name="location"/>
         <FormRow title="email" type="email" id="email" name="email"/>
         <FormRow title="password" type="password" id="password" name="password"/>
        </div>

        <button type='submit'  className='btn btn-block' disabled={isSubmitting}>
         {isSubmitting ?'submitting...':'submit'}
        </button>
        <p>
          Already a member?
          <Link to='/login' className='member-btn'>
            Login
          </Link>
        </p>
      </Form>
    </Wrapper>
  )
}

export default Register
