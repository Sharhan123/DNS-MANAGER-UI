import React, { useEffect, useState } from 'react';
import Modal from './Modal';
import { getDomains } from '../../services/userService';
import { json, useNavigate } from 'react-router-dom';
import DeleteDomain from '../domainComponents/deleteDomain';

function Table() {
const  [data,setData] = useState([])
const navigate = useNavigate()
const fetchData = async () => {
  try {
    const response = await getDomains();
   
    setData(response.data.domains)
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};  
useEffect(()=>{

    fetchData();


  },[ ])

  const handleEdit = (id,access,secret)=>{
    const data = {
      id:id,
      access:access,
      secret:secret
    }

    const serializedData = JSON.stringify(data)
    console.log(serializedData);
    navigate(`/records?data=${serializedData}`)
  }
  return (
    <>
      <div className="flex flex-wrap  mb-5">
        <div className="w-full max-w-full px-3 mb-6 mx-auto">
          <div className="relative flex-[1_auto] flex flex-col break-words min-w-0 bg-clip-border rounded-[.95rem] bg-white m-5">
            <div className="relative flex flex-col min-w-0 break-words border border-dashed bg-clip-border rounded-2xl border-stone-200 bg-light/30">
              
              <div className="px-9 pt-5 flex justify-between items-stretch flex-wrap min-h-[70px] pb-0 bg-transparent">
                <h3 className="flex flex-col items-start justify-center m-2 ml-0 font-medium text-xl/tight text-dark">
                  <span className="mr-3 kanit-semibold text-custom text-2xl">Your Domains</span>
                  <span className="mt-1 font-medium text-dark kanit-semibold text-lg/normal">All Domains You registered</span>
                </h3>
                <div className="relative flex flex-wrap items-center my-2">
                  <a href="javascript:void(0)" className="inline-block text-[.925rem] kanit-bold leading-normal text-center align-middle cursor-pointer rounded-2xl transition-colors text-white duration-150 ease-in-out text-light-inverse bg-custom border-custom shadow-none border-0 py-2 px-5  active:bg-light focus:bg-light"> <Modal/> </a>
                </div>
              </div>
              
              <div className="flex-auto block py-8 pt-6 px-9">
                <div className="overflow-x-auto">
                  <table className="w-full my-0 align-middle text-dark border-neutral-200">
                    <thead className="align-bottom">
                      <tr className="font-semibold text-[0.95rem] text-secondary-dark">
                      <th className="pb-3 text-start min-w-[175px] text-custom">HostedZoneId</th>

                        <th className="pb-3 text-start min-w-[175px] text-custom">Domain</th>
                        <th className="pb-3 text-center min-w-[100px] text-custom">DNS</th>
                        
                        <th className="pb-3 pr-12 text-center min-w-[175px] text-custom">Delete</th>
                        
                      </tr>
                    </thead>
                    <tbody>
  {data[0]?(data.map((item) => (
    <tr key={item.id} className="border-b border-dashed last:border-b-0">
      <td className="p-3 pl-0">
        
          <a href={`https://${item.domain}`} target="_blank" rel="noopener noreferrer">
            <span className="text-center align-baseline inline-flex px-4 py-3 mr-auto items-center kanit-bold text-xl leading-none text-custom bg-primary-light rounded-lg">
              {item.hostedZoneId}
            </span>
          </a>
        
      </td>
      <td className="p-3 pl-0">
        <div className="flex items-center">
          <a href={`https://${item.domain}`} target="_blank" rel="noopener noreferrer">
            <span className="text-center align-baseline inline-flex px-4 py-3 mr-auto items-center kanit-bold text-xl leading-none text-custom bg-primary-light rounded-lg">
              {item.domain}
            </span>
          </a>
        </div>
      </td>
      <td className="p-3 pr-0 text-center">
        <button onClick={()=>handleEdit(item.hostedZoneId,item.accessKey,item.secretKey)} className="btn-default overflow-hidden relative w-32 bg-green-700 text-white py-4 px-4 rounded-xl font-bold uppercase transition-all duration-100 -- hover:shadow-md border border-stone-100 hover:bg-blue-800  hover:text-white before:to-stone-50 hover:-translate-y-[3px]">
          <span className="relative text-sm kanit-semibold">DNS records</span>
        </button>
      </td>
      
      <td className="p-3 pr-12 text-center">
        <button className="btn-default overflow-hidden relative w-32 bg-red-700 text-white py-4 px-4 rounded-xl font-bold uppercase ">
          <DeleteDomain data={item} method={()=>fetch()}/>
        </button>
      </td>
    </tr>
  ))):(
    <tr>

<p className='text-black text-2xl kanit-regular'>No Domains</p>
    </tr>
  )
  }
</tbody>

                  
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  );
}

export default Table;
