import { useState, useEffect, React } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    // const initialValues = {} or set {} in formValues
    const initialValues = {username: "", email: "", password: ""}
    const [formValues, setFormValues] = useState(initialValues)
    const [formErrors, setFormErrors] = useState({})
    const [isSubmit, setIsSubmit] = useState(false)
    const [confirm, setConfirm] = useState("")


    const handleChange = (e) => {
        // console.log(e.target);
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
        console.log(formValues)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(formValues))
        setIsSubmit(true)
        // setConfirm("All forms input submitted")
    } 

    useEffect(() => {
        console.log(formErrors)
        if (Object.keys(formErrors).length === 0 && isSubmit) {
            console.log(formValues)
            setConfirm("All forms input submitted")
        }
    }, [formErrors]);

    const validate = (values) => {
        const errors = {}
        // /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        // /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/
        // ^[^\s@]+@([^\s@.,]+\.)+[^\s@.,]{2,}$
        if (!values.username) {
            errors.username = "Username is required!"
        }
        if (!values.email) {
            errors.email = "Email is required!"
        } else if (!regex.test(values.email)) {
            errors.email = "This is not a valid email format!";
        }
        if (!values.password) {
            errors.password = "Password is required!"
        } else if (values.password.length < 4) {
            errors.password = "Password must be more than 4 characters.";
        } else if (values.password.length > 10) {
            errors.password = "Password must be not be more than 10 characters.";
        }
        return errors;
    }
    
    return (
    <>
      <div className='w-full pt-24 mx-auto px-6 text-center'>
            <h1 className='text-primary mt-8 md:mt-0 font-bold text-3xl'>
                Welcome to TBUF
            </h1>
            {/* {Object.keys(formErrors).length === 0 && isSubmit ? (
            <div>Signed in successfully</div>) : (
                <pre>{JSON.stringify(formValues, undefined, 2)}</pre>
            )} */}
            <p className='text-inactive mt-3'>Enter your details to sign in</p>
            <form method='POST' action="" onSubmit={handleSubmit} className='text-left flex flex-col max-w-[600px] w-full mx-auto my-5'>
                <label className="my-2">Full Name</label>
                <input 
                    className='bg-[#ccd6f6] p-2' 
                    type="text"
                    id="fullname" 
                    placeholder='Full Name' 
                    name='username' 
                    value={ formValues.username }
                    onChange={handleChange} />
                <p>{ formErrors.username }</p>
                <label className="my-2">E-mail</label>
                <input 
                    className='mb-2 p-2 bg-[#ccd6f6]'
                    type="email"
                    placeholder='Email'
                    name='email'
                    value={ formValues.email }
                    onChange={handleChange} />
                <p>{ formErrors.email }</p>
                <label className="my-2">Password</label>
                <input 
                    className='mb-2 p-2 bg-[#ccd6f6]' 
                    type="password" 
                    placeholder='password' 
                    name='password'
                    value={ formValues.password }
                    onChange={handleChange} />
                <p>{ formErrors.password }</p>
                {/* <p>{ confirm }</p> */}
                
                {Object.keys(formErrors).length === 0 && isSubmit ? (
                <div>Signed in successfully</div>) : "" }

                <button className='border-2 w-20 border-black bg-indigo-300 hover:bg-gray-700 hover:text-white hover:border-gray-600 py-2 px-4 rounded-lg mt-5 mx-auto flex items-center'>Login</button>
            </form>
            <div className='mb-10'>
                <Link to='/' className='text-indigo-600 text-md'>
                Forgot Password?
            </Link>
            </div>
            
        </div>
    </>
  );
};

export default Login;