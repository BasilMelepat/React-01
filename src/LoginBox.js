import React from 'react';
import './LoginBox.css';
import CustomButton from './Common/CustomButton';
import CustomInput from './Common/CustomInput';

function LoginBox() {

    return (
        <div className="login-box">
            <h2 className="text-center">Login</h2>
            <CustomInput name={"userName"} label={"User Name"} type={"text"}/>
            <CustomInput name={"password"} label={"Password"} type={"password"}/>
            <CustomButton label={'Login'} />
        </div>
  );
};

export default LoginBox;