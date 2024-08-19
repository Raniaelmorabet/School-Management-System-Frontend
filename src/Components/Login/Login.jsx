import React, { useState } from 'react';
import Login from "../../assets/login.png";
import { Input } from "../Atoms/input.jsx";
import { FaUser, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login } from '../Slices/AuthSlice';

function LoginPage() {
    const [showPassword, setShowPassword] = useState(false);
    const { register, handleSubmit } = useForm();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const onSubmit = async (data) => {
        console.log('Form submitted with data:', data);
        try {
            const formData = {
                email: data.email,
                password: data.password
            };
            await dispatch(login(formData));
            console.log('Login successful');
            navigate('/');
            console.log("after navigate");
        } catch (error) {
            console.error("Login failed:", error);
        }
    };

    const togglePasswordVisibility = () => {
        setShowPassword(prevState => !prevState);
    };

    return (
        <div className="flex h-screen">
            <div className="hidden md:flex md:w-1/2 bg-white justify-center items-center">
                <div className="flex flex-col items-center">
                    <div className="bg-gray-100 p-10 w-[1500px] ml-[800px] shadow-xl">
                        <img src={Login} className='w-[750px]' alt="Login" />
                    </div>
                </div>
            </div>

            <div className="mr-32 flex flex-col justify-center items-center w-full md:w-1/2 bg-gray-50 p-8">
                <div className="w-full max-w-md">
                    <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
                        Login
                    </h2>
                    <form onSubmit={handleSubmit(onSubmit)} className="pt-6 pb-8 mb-4">
                        <div className="mb-4">
                            <label
                                className="block text-gray-700 text-sm font-semibold mb-2"
                                htmlFor="username">Email
                                <span className="text-meta-1">*</span>
                            </label>
                            <div className="relative">
                                <Input
                                    type="email"
                                    placeholder="Enter your Email"
                                    name={'email'}
                                    {...register("email", { required: true })}
                                />
                                <FaUser className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                            </div>
                        </div>
                        <div className="mb-6">
                            <label className="block text-gray-700 text-sm font-semibold mb-2"
                                   htmlFor="password">Password <span className="text-meta-1">*</span></label>
                            <div className="relative">
                                <Input
                                    type={showPassword ? "text" : "password"}
                                    name={'password'}
                                    placeholder="Enter your password"
                                    {...register("password", { required: true })}
                                />
                                <span onClick={togglePasswordVisibility} className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-400">
                                    {showPassword ? <FaEyeSlash size={18}/> : <FaEye size={18}/>}
                                </span>
                            </div>
                        </div>
                        <div className="flex items-center justify-between">
                            <button
                                type="submit"
                                className="bg-[#004b9c] text-white rounded-3xl font-bold py-3 px-50 focus:outline-none focus:shadow-outline"
                            >
                                Login
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;
