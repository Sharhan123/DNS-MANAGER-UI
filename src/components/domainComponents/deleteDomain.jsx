import React, { useState } from 'react';
import { addRecord, deleteRecord } from '../../services/userService';
import { useNavigate } from 'react-router-dom';
import { deleteDomain } from '../../services/userService';

function DeleteDomain({data}) {
    
    const [isModalOpen, setIsModalOpen] = useState(false);

    const navigate = useNavigate();

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };
    
    const handleDelete = async ()=>{
        const Fdata={
            domain:data.domain
        }

        try{

            const res = await deleteDomain(Fdata)
            closeModal()
            navigate('/domain')
        }
        catch(err){
            console.log(err);    
        }
    }
    

    return (
        <div>
            <button className="w-full" onClick={openModal}>
                Delete 
            </button>

            {isModalOpen && (
                <div className="main-modal fixed w-full inset-0 z-50 overflow-hidden flex justify-center items-center animated fadeIn faster" style={{ background: 'rgba(0,0,0,.7)' }}>
                    <div className="border border-blue-500 shadow-lg modal-container bg-white w-4/12 md:max-w-11/12 mx-auto rounded-xl shadow-lg z-50 overflow-y-auto">
                        <div className="modal-content py-4 text-left px-6">
                            {/* Title */}
                            <div className="flex justify-between items-center pb-3">
                                <p className="text-2xl font-bold text-black kanit-semibold">Delete Domain</p>
                                <div className="modal-close cursor-pointer z-50" onClick={closeModal}>
                                    <svg className="fill-current text-gray-500" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
                                        <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"></path>
                                    </svg>
                                </div>
                            </div>
                            {/* Body */}
                            <div className="my-5 mr-5 ml-5 flex justify-center">
                                <h2 className='text-black kanit-regular text-2xl'>Are Your sure to delete the Domain ?</h2>
                            </div>
                            {/* Footer */}
                            <div className="flex justify-end pt-2 ">
                                <button className="px-4 bg-gray-200 p-3 rounded text-black hover:bg-gray-300 font-semibold" onClick={closeModal}>Cancel</button>
                                <button className="px-4 ml-5 bg-red-500 p-3 rounded-lg text-white hover:bg-red-400 w-1/4" onClick={handleDelete}>Delete</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default DeleteDomain;
