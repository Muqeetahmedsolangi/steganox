/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from 'react';
import LogoDark from '../../../assets/images/logo/logo-dark.png';
import { Link } from 'react-router-dom';

function register() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({ email, password });
    };


    return (
        <div>
            <div className="register-page-bg ">
                <div className="container mx-auto flex flex-col items-center pt-6">
                    <img src={LogoDark} alt="logo" className='!w-80 mb-6' />
                    <div className="w-full max-w-[350px] backdrop-blur-md bg-white/30 rounded-lg shadow-lg py-12 px-3">
                        <h2 className="text-2xl font-semibold text-center mb-4 text-black">
                            Register
                        </h2>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label
                                    htmlFor="email"
                                    className="block !text-black-500 font-medium mb-1"
                                >
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2  focus:outline-none"
                                    placeholder="Enter your name"
                                   
                                    
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="email"
                                    className="block !text-black-500 font-medium mb-1"
                                >
                                    Email
                                </label>
                                <input
                                    type="text"
                                    id="email"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2  focus:outline-none"
                                    placeholder="Enter your email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="password"
                                    className="block text-black-500 font-medium mb-1"
                                >
                                    Password
                                </label>
                                <input
                                    type="password"
                                    id="password"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2  focus:outline-none"
                                    placeholder="Enter your password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                           
                            <button
                                type="submit"
                                className="w-full  bg-black-500 text-white py-2 rounded-md  transition-colors"
                            >
                                Register
                            </button>
                        </form>
                        <p className="text-center text-sm text-black-500 mt-4">
                            Also a member?{" "}
                            <Link to={"/user/login"}>Login Now</Link>
                            
                        </p>
                    </div>



                </div>
            </div>

        </div>
    )
}

export default register
