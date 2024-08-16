import React from 'react';
import './SignupBox.css';
import CustomButton from './Common/CustomButton';
import CustomInput from './Common/CustomInput';

function SignupBox() {

  return (
    <div className="signup-box">
      <h2 className="text-center">Sign Up</h2>
      <CustomInput name={"fullName"} label={"Full Name"} type={'text'}/>
      <CustomInput name={"userName"} label={"Username"} type={'text'}/>
      <CustomInput name={"email"} label={"Email"} type={'email'}/>
      <CustomInput name={"phone"} label={"Phone Number"} type={'number'}/>
      <CustomInput name={"password"} label={"Password"} type={'password'}/>
      <CustomInput name={"password"} label={"Confirm Password"} type={'password'}/>
      <CustomButton label={'Sign Up'}/>
    </div>
  );
};

export default SignupBox;