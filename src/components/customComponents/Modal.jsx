import React, { useState } from 'react';
import { addDomain } from '../../services/userService';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {jwtDecode} from 'jwt-decode';

function Modal() {
  const token = useSelector((state)=>state.token.token)
  const [domain,setDomain] = useState('')
  const [access,setAccess] = useState('')
  const [secret,setSecret] = useState('')
  const [domainErr,setDomainErr] = useState('')
  const [accesErr,setAccessErr] = useState('')
  const [secretErr,setSecretErr] = useState('')
  const [showModal, setShowModal] = useState(false);
  const [gErr,setGerr] = useState('')

  const navigate = useNavigate()

  const handleSubmit = async ()=>{
    const decoded = jwtDecode(token);
    console.log(decoded);
    const data = {
      domain : domain,
      access : access,
      secret:secret,
      id:decoded.id
    }

    if(!domain){
      setDomainErr('You must have to provide a domain name')
      return
    }
    const domainRegex = /^[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

    if (!domainRegex.test(domain)) {
        setDomainErr('Provide a valid domain name') 
        return
    }

    const parts = domain.split('.');
    const tld = parts[parts.length - 1];

    if (domain.length > 253 || parts.length<2 || tld.length < 2 || tld.length > 63 ) {
      setDomainErr('Provide a valid domain name')  
      return 
    }
    if(!access){
      setAccessErr('You must provide your access key')
      return 
    }
    if(!secret){
      setSecretErr('You must provide your secret key')
      return
    }

    try{

      const res = await addDomain(data)

      if(res.status === 200){
        navigate('/')
      }

    }catch(err){
      setGerr(err.response.data.message)
    }
    

    



  }

  const closeModal = () => {
    setShowModal(false);
    document.body.style.overflow = '';
    document.body.classList.remove('astroui-modal-open');
  };

  const openModal = () => {
    setShowModal(true);
    document.body.style.overflow = 'hidden';
    document.body.classList.add('astroui-modal-open');
  };

  return (
    <>
      <button
        onClick={openModal}
        type="button"
        className="flex items-center justify-center px-4 font-medium bg-custom text-white h-9 rounded-md rounded md  transition-all duration-300"
      >
        <span className="flex items-center justify-center space-x-2">Add Domain</span>
      </button>

      {showModal && (
        <div
          role="dialog"
          id="modal-example"
          aria-hidden="false"
          className="modal fixed top-0 left-0 z-50 w-screen h-screen bg-black/30 flex items-center flex-col justify-center p-6 fade"
          tabIndex="-1"
        >
          <div className="absolute top-0 left-0 z-[0] w-full h-full" tabIndex="-1"></div>

          <article
            className="modal-content flex flex-col relative m-0 rounded-md bg-white sm:my-16 w-2/6 "
            aria-labelledby="modal-title"
            aria-describedby="modal-body"
          >
            <header className="flex p-4 items-center justify-between">
              <h2 className="m-0 text-xl  text-black font-medium max-w-[calc(100%_-_3rem)]">Add Domain</h2>
              <button
                onClick={closeModal}
                type="button"
                className="flex items-center justify-center w-8 h-8 rounded-full bg-transparent transition-colors duration-300 hover:bg-black/10"
                aria-label="Close"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#000000"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{ '--size': '32rem' }}
                >
                  <line x1="18" y1="6" x2="6" y2="18" style={{ '--size': '32rem' }}></line>
                  <line x1="6" y1="6" x2="18" y2="18" style={{ '--size': '32rem' }}></line>
                </svg>
              </button>
            </header>
            <main className="relative flex-[1_1_auto] p-4" style={{ '--size': '32rem' }}>
              <div className="mb-5">
                <label htmlFor="guest" className="mb-3 block text-start font-medium text-[#07074D]">
                  Domain Name
                </label>
                <input
                  type="text"
                  name="domain"
                  id="guest"
                  value={domain}
                  onChange={(e) =>{setDomain(e.target.value) ,setDomainErr('')} }
                  placeholder="Enter your domain name  "
                  min="0"
                  className={`w-full rounded-md border ${domainErr?'border-red-700':'border-white'}  bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md`}
                />
                <p className='text-start kanit-regular text-red-600'>{domainErr}</p>
              </div>           
              <div className="mb-5">
                <label htmlFor="guest" className="mb-3 block text-start font-medium text-[#07074D]">
                  Access Key
                </label>
                <input
                  type="password"
                  name="access"
                  id="guest"
                  value={access}
                  onChange={(e) => {setAccess(e.target.value),setAccessErr('')}}
                  placeholder="Enter your access key code  "
                  min="0"
                  className={`w-full rounded-md border ${accesErr?'border-red-700':'border-white'} bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md`}
                />
                <p className='text-start ml-2 kanit-regular text-red-600'>{accesErr} </p>
              </div>           
              <div className="mb-5">
                <label htmlFor="guest" className="mb-3 block text-start font-medium text-[#07074D]">
                  Secret Key
                </label>
                <input
                  type="password"
                  name="secret"
                  id="guest"
                  value={secret}
                  onChange={(e) => {setSecret(e.target.value),setSecretErr('')}}
                  placeholder="Enter your secret key code "
                  min="0"
                  className={`w-full rounded-md border ${secretErr?'border-red-700':'border-white'}  bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md`}
                />
                <p className='text-start kanit-regular  text-red-600'>{secretErr}</p>
              </div>           
               </main>
               <p className='text-red-500 kanit-lighter'>{gErr}</p>
            <footer className="flex items-center justify-end flex-row p-4 gap-1" style={{ '--size': '32rem' }}>
              
              <button
                type="button"
                onClick={handleSubmit}
                className="flex w-full items-center justify-center px-4 font-medium bg-violet-700 text-white h-9 rounded-md rounded md hover:bg-violet-800 transition-all duration-300"
              >
                <span className="flex items-center justify-center space-x-2">Add</span>
              </button>
            </footer>
          </article>
        </div>
      )}
    </>
  );
}

export default Modal;
