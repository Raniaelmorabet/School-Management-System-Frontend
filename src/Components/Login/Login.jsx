import React, { useEffect, useState } from 'react';
import Style from './login.module.scss';
import { FaUser, FaLock } from 'react-icons/fa';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login } from '../Slices/AuthSlice';

function Login() {
  const {register,handleSubmit} = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const error = useSelector(state=>state.authentication.error);
  const [displayPass,setDisplayPass]= useState(false); 
  const onSubmit = async (data)=>{
    const formData = {
      email : data.email,
      password : data.password
    }
    await dispatch(login(formData));
    console.log('navigate');
    
    navigate("/");
    }
  return (
      <>
          <div className={Style.Container}>
            <div className={Style.FormWrapper}>
              <form onSubmit={handleSubmit(onSubmit)}>
                <h1 className="font-bold">Login</h1>
                {error && <div className={Style.ErrorMsg}>{error}</div>}
                <div className={Style.InputBox}>
                  <input
                      type="email"
                      placeholder="Email"
                      name='email'
                      {...register("email",{required : true})}
                  />
                  <FaUser className={Style.Icon}/>
                </div>
                <div className={Style.InputBox}>
                  <input
                      type={displayPass ? 'text' : 'password'}
                      placeholder="Password"
                      name='password'
                      {...register("password",{required : true})}
                  />
                  <FaLock className={Style.Icon}/>
                </div>
                <div className={Style.showPassword}>
                    <input type="checkbox" onChange={()=>setDisplayPass(!displayPass)}/>
                    <p>{displayPass? 'hide' : 'show'} password</p>
                </div>
                <button className={Style.Btn} type="submit">Login</button>
              </form>
            </div>
          </div>
      </>
  );
}

export default Login;
