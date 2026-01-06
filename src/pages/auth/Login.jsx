import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';

const LoginInd = () => {
    const [activeTab, setActiveTab] = useState('individual');
    const [showPassword, setShowPassword] = useState(false);
    const [agreedToTerms, setAgreedToTerms] = useState(false);
    
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const validate = () => {

        if (!formData.email.trim()) {
            toast.error("Email is Required");
            return false;
        }

        if (!formData.password.trim()) {
            toast.error("Password is required");
            return false;
        }
        return true;
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validate()) return;
        try {
            
            console.log('Navigate to /inddashboard');
        } catch (error) {
            alert("Something went wrong");
        }
    }

    return (
        <div className="flex h-screen">
            <div
                className="w-1/2 bg-teal-800 bg-center bg-cover flex items-center justify-center"
            >
                <div className="text-white text-2xl">Bird Background Image</div>
            </div>
            <div className="w-1/2 flex items-center justify-center bg-white">
                <div className="w-full max-w-md px-8">
                    <h1 className="text-3xl font-bold text-center mb-4">
                        Sign In to Verdura
                    </h1>
                    <p className="text-center text-gray-500 mb-8">
                        Track impact, grow greener, and inspire real change
                    </p>
                    
                    {/* Tab Selection */}
                    <div className="flex gap-2 mb-8 bg-gray-100 p-1 rounded-lg">
                        <button
                            onClick={() => setActiveTab('individual')}
                            className={`flex-1 py-2.5 px-4 rounded-md font-medium transition-all ${
                                activeTab === 'individual'
                                    ? 'bg-white text-teal-700 shadow-sm'
                                    : 'text-gray-600 hover:text-gray-900'
                            }`}
                        >
                            Individual
                        </button>
                        <button
                            onClick={() => setActiveTab('organization')}
                            className={`flex-1 py-2.5 px-4 rounded-md font-medium transition-all ${
                                activeTab === 'organization'
                                    ? 'bg-white text-teal-700 shadow-sm'
                                    : 'text-gray-600 hover:text-gray-900'
                            }`}
                        >
                            Organization
                        </button>
                    </div>

                    <div className="space-y-5">

                        {/* Email */}
                        <div>
                            <label className="block text-xs font-medium text-gray-700 mb-2 uppercase tracking-wide">
                                Email Address
                            </label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="bibek@myowndomain@gmail.com"
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-transparent"
                            />
                        </div>

                        {/* Password */}
                        <div>
                            <label className="block text-xs font-medium text-gray-700 mb-2 uppercase tracking-wide">
                                Password
                            </label>
                            <div className="relative">
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    name="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    placeholder="••••••••••"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-transparent pr-12"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                                >
                                    {showPassword ? (
                                        <EyeOff className="w-5 h-5" />
                                    ) : (
                                        <Eye className="w-5 h-5" />
                                    )}
                                </button>
                            </div>
                        </div>

                        {/* Terms Checkbox */}
                        <div className="flex justify-between gap-3 pt-2">
                            
                            <div className='flex gap-3'>
                            <input
                            type="checkbox"
                            id="terms"
                            checked={agreedToTerms}
                            onChange={(e) => setAgreedToTerms(e.target.checked)}
                            className=" cursor-pointer mt-1 w-4 h-4 text-teal-600 border-gray-300 rounded focus:ring-teal-500"
                            />
                            <label htmlFor="terms" className="text-sm text-gray-600">
                                Remember Me
                            </label>
                            </div>

                            <Link to='/reset-password' className="text-teal-700 hover:underline text-sm">
                            Forgot Password ?
                            </Link>
                        </div>

                        {/* Submit Button */}
                        <button
                            onClick={handleSubmit}
                            className="w-full bg-teal-800 hover:bg-teal-900 text-white font-semibold py-4 px-6 rounded-lg transition-colors duration-200 uppercase tracking-wide"
                        >
                            Create an Account
                        </button>

                        {/* Sign In Link */}
                        <div className="text-center pt-4">
                            <span className="text-gray-600">New to Verdura?  </span>
                            <Link to='/signup' className="text-teal-700 hover:underline font-medium">
                                Sign Up
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginInd;