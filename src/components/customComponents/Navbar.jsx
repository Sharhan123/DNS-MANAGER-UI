import React, { useEffect, useState } from 'react'
// import './style.css'
import image from '/logo.jpg'
import { useDispatch, useSelector } from 'react-redux'
import { Logout } from '../../redux/slices/authSlice'
import { useNavigate } from 'react-router-dom'
import { jwtDecode } from 'jwt-decode'
function Navbar() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [user,setUser]=useState('')
    const auth = useSelector((state)=>state.token.token)

    useEffect(()=>{
        const data = jwtDecode(auth)
        setUser(`${data.fname} ${data.lname}`)
    },[])

    const handleLogout = ()=>{
        localStorage.removeItem('token')
        dispatch(Logout())
        navigate('/')
    }
    return (
        <div className="flex flex-wrap  sticky top-0 bg-custom-gradient clr-1">
            <div className="px-3  mx-auto container  clr-1" >
                <div className="sm:flex items-stretch justify-between grow lg:mb-0 py-5 px-5 ">
                    <div className="flex items-center justify-center mb-5 mr-3 lg:mb-0 ">
                        <img
                            src={image} 
                            alt="Logo" 
                            className="max-w-16 mr-5 h-auto drop-shadow-xl rounded-md" 
                        />  c
                        <span className="my-0 flex text-white font-black kanit-semibold text-4xl flex-col justify-center">
                            DNS-MANAGER
                        </span>
                    </div>
                    <div className="relativ w-6/6 md:w-1/6 mb-10 lg:mb-0  lg:w-1/6 justify-evenly md:justify-between lg:justify-between flex items-center ml-2 lg:ml-4">
                        <a href="/" className="text-white kanit-medium font-bold text-2xl hover:text-red-500">
                            Dashboard
                        </a>
                        <a href="/domain" className="text-white kanit-medium font-bold text-2xl hover:text-red-500">
                            Domains
                        </a>
                        
                    </div>
                    <div className="flex items-center justify-end lg:shrink-0 lg:flex-nowrap">
                        <div className="relative flex items-center lg:ml-4 sm:mr-0 mr-2">
                            
                            {auth ?(

                                <span
                                onClick={() => {
                                    
                                }}
                                className="text-white text-2xl kanit-medium mr-5"
                            >
                                {user}
                                </span>
                            ):(
                                <></>
                            )
                            }
                                
                                
                        </div>
                        <div className="relative flex items-center ml-2 lg:ml-4">
                           {
                            auth?
                            (
                                <button onClick={handleLogout} class="px-3 md:px-4 py-1 md:py-2 bg-red-800 border border-red-800 text-white rounded-lg hover:bg-custom"><i class="fa-solid fa-arrow-right-to-bracket"></i> Logout</button>
                                ):(
                                <a href='/signIn'><button class="px-3 md:px-4 py-1 md:py-2 bg-blue-800 border border-blue-800 text-white rounded-lg hover:bg-custom"><i class="fa-solid fa-arrow-right-to-bracket"></i> Login</button></a>

                            )   
                        }


                        </div>
                        <div className="relative lg:hidden flex items-center sm:ml-2 ml-auto">
                            <a
                                href="javascript:void(0)"
                                className="flex items-center justify-center w-12 h-12 text-base font-medium leading-normal text-center align-middle transition-colors duration-150 ease-in-out bg-transparent border border-solid shadow-none cursor-pointer rounded-2xl text-stone-500 border-stone-200 hover:text-primary active:text-primary focus:text-primary"
                                onClick={() => {
                                    // Toggle sidebar
                                    document.querySelector('.group\\/sidebar').classList.toggle('-translate-x-full');
                                }}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="w-6 h-6"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                                    ></path>
                                </svg>
                            </a>
                        </div>
                       
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar



