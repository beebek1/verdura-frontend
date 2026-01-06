import React from 'react'
import { useNavigate } from 'react-router-dom'
import { toast, Toaster } from 'react-hot-toast'
import bird from '../assets/birds.png'

const ForgetPassword = () => {
    const navigate = useNavigate()
    // const [email, setEmail] = useState('')

    // const handdlechange = 

    return (
        <div className="flex h-screen">
            <Toaster/>

            {/* Left Side - Form */}
            <div className="w-1/2 flex items-center justify-center bg-white">
                <div className="w-full max-w-md px-8">

                    <h1 className="text-3xl font-bold text-center mb-4">
                        Forgot Password?
                    </h1>
                    <p className="text-center text-gray-500 mb-8">
                        No worries! Enter your email and we'll send you reset instructions
                    </p>

                    <div className="mb-6">
                        <label className="block text-gray-700 font-medium mb-2">
                            Email Address
                        </label>
                        <input
                            type="email"
                            name="email"
                            placeholder="Enter your email"
                            className="w-full border border-gray-300 p-3 rounded-md outline-none focus:border-[#174928] focus:ring-2 focus:ring-[#174928] focus:ring-opacity-20 transition-all"
                        />
                    </div>

                    <button
                        onClick={() => toast.success('Reset link sent!')}
                        className="w-full p-3 bg-[#174928] text-white font-semibold rounded-md hover:bg-[#1a5c32] transition-colors"
                    >
                        Send Reset Link
                    </button>

                    <div className="mt-6 text-center">
                        <p className="text-gray-600">
                            Remember your password?{' '}
                            <span
                                onClick={() => navigate('/')}
                                className="text-blue-600 font-semibold cursor-pointer hover:underline"
                            >
                                Sign In
                            </span>
                        </p>
                    </div>
                </div>
            </div>

            {/* Right Side - Background Image */}
            <div 
                className="w-1/2 bg-[#1E3A2A] bg-center bg-cover flex items-center justify-center"
                style={{ backgroundImage: `url(${bird})` }}
            >
                <div className="text-center text-white px-8  bg-opacity-40 p-8 rounded-lg">
                    <h1 className="text-5xl font-bold mb-4">Verdura</h1>
                    <p className="text-xl">
                        Reset your password and get back to making an impact
                    </p>
                </div>
            </div>
        </div>
    )
}

export default ForgetPassword