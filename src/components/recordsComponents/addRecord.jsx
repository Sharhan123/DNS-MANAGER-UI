import React, { useState } from 'react';
import { addRecord } from '../../services/userService';
import { useNavigate } from 'react-router-dom';

function AddRecord({data}) {
    const [nameErr,setNameErr] = useState('')
    const [value,setValueErr] = useState('')
    const [gErr,setGErr] = useState('')
    

    const navigate = useNavigate()
    const [isModalOpen, setIsModalOpen] = useState(false);
    console.log(data+'got');
    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const handleSubmit = async(e)=>{
        e.preventDefault();
        const formDatas = new FormData(e.target);

        const formData = {
            id:data
        }
        formDatas.forEach((value, key) => {
            formData[key] = value.trim() 
        });
        
        if(!formData.Name){
            setNameErr('Please enter a record name')
            return 
        }
        if(!formData.message){
            setValueErr('Please enter the records ')
            return 
        }
        
        try{
            const res = await addRecord(formData)
            navigate('/domain')
        }catch(err){
            setGErr(err.response.data.message)
        }
    }

    return (
        <div>
            <button className='w-full' onClick={openModal} >
                Create Record
            </button>

            {isModalOpen && (
                <div className="main-modal fixed w-full inset-0 z-50 overflow-hidden flex justify-center items-center animated fadeIn faster" style={{ background: 'rgba(0,0,0,.7)' }}>
                    <div className="border border-blue-500 shadow-lg modal-container bg-white w-4/12 md:max-w-11/12 mx-auto rounded-xl shadow-lg z-50 overflow-y-auto">
                        <div className="modal-content py-4 text-left px-6">
                            {/* Title */}
                            <div className="flex justify-between items-center pb-3">
                                <p className="text-2xl font-bold text-black kanit-semibold">Add Record</p>
                                <div className="modal-close cursor-pointer z-50" onClick={closeModal}>
                                    <svg className="fill-current text-gray-500" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
                                        <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"></path>
                                    </svg>
                                </div>
                            </div>
                            {/* Body */}
                            <div className="my-5 mr-5 ml-5 flex justify-center">
                                <form onSubmit={handleSubmit} method="POST" className="w-full">
                                    <div>
                                        <div>
                                            <label htmlFor="names" className="text-md text-black kanit-regular">HostedZoneID</label>
                                        </div>
                                        <div>
                                            <input type="text" id="names" name='id' disabled autoComplete="off" className="text-black h-3 p-6 w-full border-2 border-gray-300 mb-5 rounded-md" value={data} />
                                        </div>

                                    </div>
                                    <div>
                                        <div>
                                            <label htmlFor="names" className="text-md text-black kanit-regular">Record Name </label>
                                        </div>
                                        <div>
                                            <input type="text"  id="Name" name='Name' autoComplete="off" className={`text-black h-3 p-6 w-full border-2 ${nameErr?'border-red-500':'border-gray-300'}  mb-5 rounded-md`} placeholder="sub domain" />
                                        </div>
                                        <p className='text-red-500 kanit-regular'>{nameErr}</p>


                                    </div>
                                    <div>
                                        <div>
                                            <label htmlFor="names" className="text-md text-black kanit-regular">Record Type </label>
                                        </div>
                                        <div>
                                            <select name="Type" className="text-black   p-4 w-full border-2 border-gray-300 mb-5 rounded-md">
                                                <option value='A' selected>A (Address)</option>
                                                <option value='AAAA'>AAAA (IPv6 Address)</option>
                                                <option value='CNAME'>CNAME (Canonical Name)'</option>
                                                <option value='MX'>MX (Mail Exchange)</option>
                                                <option value='NS' selected>NS (Name Server)</option>
                                                <option value='PTR'>PTR (Pointer)</option>
                                                <option value='SOA'>SOA (Start of Authority)</option>
                                                <option value='SRV'>SRV (Service)</option>
                                                <option value='TXT'>TXT (Text)</option>
                                                <option value='DNSSEC'>DNSSEC</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div>
                                        <div>
                                            <label htmlFor="names" className="text-md text-black kanit-regular">Values </label>
                                        </div>
                                        <div className="md:col-span-2">
                                            <textarea name="message"  rows="5" cols="" placeholder="Enter the values line by line and also ensure that the value is actual format according to the Type." className={`w-full border text-black ${value?'border-red-500':'border-gray-300' }rounded-md py-2 px-3 focus:outline-none focus:border-blue-700`}></textarea>
                                        </div>
                                        <p className='text-red-500 kanit-regular'>{value}</p>


                                    </div>
                                    <p className='text-red-500 kanit-regular'>{gErr}</p>

                                    <div className="flex justify-end pt-2 ">
                                <button className="px-4 bg-gray-200 p-3 rounded text-black hover:bg-gray-300 font-semibold" onClick={closeModal}>Cancel</button>
                                <button type='submit' className="px-4 ml-5 bg-blue-500 p-3 rounded-lg text-white hover:bg-red-400 w-1/4">Create</button>
                            </div>
                                </form>
                            </div>
                           
                            
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default AddRecord;
