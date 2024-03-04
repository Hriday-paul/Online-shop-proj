import { useContext, useState } from "react";
import { authContext } from "../../ContextHandler/Authonicate/Authonicate";
import { Link, useLocation, useNavigate } from "react-router-dom";
import UseAxiosPublic from '../../Hooks/UseAxiosPublic'
import toast, { Toaster } from 'react-hot-toast';
import { UserOutlined, MailOutlined, MobileOutlined } from '@ant-design/icons';
import { Input, Space, Spin } from 'antd';
import { updateProfile } from "firebase/auth";

const Register = () => {
    const { creatUser } = useContext(authContext);
    const [passError, setPassError] = useState("");
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [loader, setLoader] = useState(false);
    const navig = useNavigate();
    const {state} = useLocation();
    const axiosPublic = UseAxiosPublic();

    const handleRegister = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const phone = form.phone.value;

        if (password.length < 6) {
            setPassError("pasword must use 6 character")
        }
        else if (!/[A-Z]/.test(password)) {
            setPassError("pasword must use an Uppercase character")
        }
        else if (!/[#?!@$%^&*-]/.test(password)) {
            setPassError("pasword must use an special character")
        }

        else {
            setLoader(true);
            creatUser(email, password)
                .then(({ user }) => {
                    updateProfile(user, {
                        displayName: name,
                    })
                    axiosPublic.put("/user", {
                        email: user.email,
                        name,
                        password,
                        phone: user.phoneNumber || phone,
                        createdAt: Date.now(),
                    })
                        .then(() => {
                            form.reset();
                            setLoader(false);
                            toast.success('Registration successfully');
                            navig(state?.from || '/');
                        })
                        .catch(() => {
                            toast.error('Something wents wrong, try again.')
                            setLoader(false);
                            setPassError('')
                        })

                })
                .catch(() => {
                    toast.error("Email already exist")
                    form.reset();
                    setPassError('');
                    setLoader(false)
                })
        }
    }



    return (
        <>
            <Spin tip="Loading..." spinning={loader} size="large">
                {/* <Helmet>
                    <title>chef | register</title>
                </Helmet> */}
                <section className="bg-gray-50 py-5">
                    <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto min-h-screen lg:py-0">

                        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0">
                            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                                <h1 className="text-xl text-center font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                                    Create an account
                                </h1>

                                <form onSubmit={handleRegister} className="space-y-4 md:space-y-6" action="#">
                                    <div>
                                        <label htmlFor="userName" className="block mb-2 text-sm font-medium text-gray-900 ">User name *</label>
                                        <Input size="large" type="text" name="name" id="userName" placeholder="user name..." prefix={<UserOutlined />} required />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Your email *</label>
                                        <Input size="large" type="email" name="email" id="email" placeholder="name@gmail.com" required prefix={<MailOutlined />} />
                                    </div>
                                    <div>
                                        <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900">Phone *</label>
                                        <Input size="large" type="number" name="phone" id="phone" placeholder="+880..." required prefix={<MobileOutlined />} />
                                    </div>
                                    <div>
                                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">Password *</label>
                                        <Space direction="horizontal" className="w-full mx-auto">
                                            <Input.Password status={passError ? 'error' : ''} size="large" type="password" name="password" id="password" required
                                                placeholder="password..."
                                                visibilityToggle={{
                                                    visible: passwordVisible,
                                                    onVisibleChange: setPasswordVisible,
                                                }}
                                            />
                                        </Space>
                                        <p className="text-sm text-red-500 mt-2">{passError}</p>
                                    </div>


                                    <div className="flex items-start">
                                        <div className="flex items-center h-5">
                                            <input id="terms" aria-describedby="terms" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300" required />
                                        </div>
                                        <div className="ml-3 text-sm">
                                            <label htmlFor="terms" className="font-light text-gray-500">I accept the <a className="font-medium text-primary-600 hover:underline" href="#">Terms and Conditions</a></label>
                                        </div>
                                    </div>
                                    <button type="submit" className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Create an account</button>
                                    <p className="text-sm font-light text-gray-700">
                                        Already have an account? <Link to="/login" className="font-medium text-gray-800 hover:underline">Login here</Link>
                                    </p>
                                </form>
                            </div>
                        </div>
                        <Toaster></Toaster>
                    </div>
                </section>
            </Spin>
        </>
    );
};

export default Register;