import React, { useState } from 'react'
import { userRegister } from '../../services/userService';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { LoginSuccess } from '../../redux/slices/authSlice';
function SignUpContent() {
    const [ferr,SetFerr] = useState('')
    const [lerr,SetLerr] = useState('')
    const [emailErr,SetEmailErr] = useState('')
    const [passErr,SetPassErr] = useState('')
    const [cpassErr,SetCpassErr] = useState('')
    const [gErr,setGerr] = useState('')
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = {}
        formData.forEach((value, key) => {
            data[key] = value.trim() 
        });
        console.log(data.email+'....');
        if(!data.fName){
            SetFerr('Please provide a First Name')
            return 
        }
        if(!data.lName){
            SetLerr('Please provide a Last Name')
            return 
        }
        if(!data.pass){
            SetPassErr('Please enter a password')
            return 
        }
        if(!data.cpass){
            SetCpassErr('Please confirm your password')
            return 
        }
        
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(data.email)) {
            SetEmailErr('Please enter a valid email address')
            return; 
        }

        if(data.pass !==data.cpass){
            SetCpassErr('Confirm password incorrect')
            return
        }
        try{

            const res = await userRegister(data)
            
            if(res.status === 200){
                console.log(res.data);
                localStorage.setItem('token',res.data.token)
                dispatch(LoginSuccess(res.data.token))
                navigate('/')
                
            }
        }catch(err){
            setGerr(err.response.data.message)
        }

    };
    
    return (
        <div className='w-full h-screen  flex justify-center '>
            <div className="isolate bg-white rounded-md self-center  w-3/6 px-6 py-24 sm:py-32 lg:px-8 ">
            <p className="mb-2 text-lg leading-8 kanit-medium text-center text-red-700 cursor-pointer">{gErr}</p>
                <div className="mx-auto max-w-2xl text-center mb-10">
                    <h2 className="text-3xl kanit-semibold tracking-tight text-custom sm:text-4xl">Register Here !</h2>
                    <a href='/signin'><p className="mt-2 text-lg leading-8 kanit-medium underline cursor-pointer">Already shared your time with us ? SignIn</p></a>
                </div>
                <form method="POST" onSubmit={handleSubmit}>
    <div className="-mx-3 flex flex-wrap">
        <div className="w-full px-3 sm:w-1/2">
            <div className="mb-5">
                <label htmlFor="Fname" className="mb-3 block text-base font-medium text-[#07074D]">
                    First Name
                </label>
                <input
                    type="text"
                    name="fName"
                    id="fName"
                    onChange={()=>SetFerr('')}
                    placeholder="First Name"
                    className={`w-full rounded-md border ${ferr ? 'border-red-700' : 'border-[#e0e0e0]'} bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md`}
                />
                <p className='ml-2 kanit-regular text-red-600'>{ferr} </p>
            </div>
        </div>
        <div className="w-full px-3 sm:w-1/2">
            <div className="mb-5">
                <label htmlFor="Lname" className="mb-3 block text-base font-medium text-[#07074D]">
                    Last Name
                </label>
                <input
                    type="text"
                    name="lName"
                    id="lName"
                    onChange={()=>SetLerr('')}
                    placeholder="Last Name"
                    className={`w-full rounded-md border ${lerr?'border-red-700':'border-[#e0e0e0]'} bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md`}
                />
                <p className='ml-2 kanit-regular text-red-600'>{lerr} </p>
            </div>
        </div>
    </div>
    <div className="mb-5">
        <label htmlFor="guest" className="mb-3 block text-base font-medium text-[#07074D]">
           Email Address
        </label>
        <input
            type="text"
            name="email"
            id="guest"
            onChange={()=>SetEmailErr('')}
            placeholder="Enter your email address  "
            min="0"
            className={`w-full rounded-md border ${emailErr?'border-red-700':'border-[#e0e0e0]'} bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md`}
        />
        <p className='ml-2 kanit-regular text-red-600'>{emailErr} </p>
    </div>

    <div className="-mx-3 flex flex-wrap">
        <div className="w-full px-3 sm:w-1/2">
            <div className="mb-5">
                <label htmlFor="date" className="mb-3 block text-base font-medium text-[#07074D]">
                    Password
                </label>
                <input
                    type="password"
                    name="pass"
                    id="date"
                    onChange={()=>SetPassErr('')}
                    className={`w-full rounded-md border ${passErr?'border-red-700':'border-[#e0e0e0]'} bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md`}
                />
                <p className='ml-2 kanit-regular text-red-600'>{passErr} </p>
            </div>
        </div>
        <div className="w-full px-3 sm:w-1/2">
            <div className="mb-5">
                <label htmlFor="time" className="mb-3 block text-base font-medium text-[#07074D]">
                    Confirm password
                </label>
                <input
                    type="password"
                    name="cpass"
                    id="time"
                    onChange={()=>SetCpassErr('')}
                    className={`w-full rounded-md border ${cpassErr?'border-red-700':'border-[#e0e0e0]'} bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md`}
                />
                <p className='ml-2 kanit-regular text-red-600'>{cpassErr} </p>
            </div>
        </div>
    </div>

    <div className="mb-5">
        <label className="mb-3 block text-base font-medium text-[#07074D] underline">
            Forgot Password ? 
        </label>
        
    </div>

    <div className="mt-20 flex justify-center" >
        <button  type='submit' className="block w-4/6  rounded-md bg-custom px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Submit</button>
    </div>
</form>


            </div>
        </div>
    )
}

export default SignUpContent

