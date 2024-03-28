import React, { useEffect, useState } from 'react';
import { isNamedExportBindings } from 'typescript';
import AddRecord from '../recordsComponents/addRecord';
import EditRecord from '../recordsComponents/editRecords';
import DeleteRecord from '../recordsComponents/deleteRecord';
import { useNavigate } from 'react-router-dom';



const RecordTable = ({ data ,id}) => {
    const [records,setRecords] = useState([])
    const [loading,setLoading] = useState('')
    const [searchQuery, setSearchQuery] = useState('');

    const naviagate = useNavigate()
    useEffect(()=>{
        
        setRecords(data)
        
        
    },[data])

    const handleFilter = (value)=>{
        const filteredRecords = data.filter((item) =>
                item.Type === value
            );
            setRecords(filteredRecords);
    }

    const handleChange = (e) => {
        const { value } = e.target;
        setSearchQuery(value);

        if (!value) {
            setRecords(data);
        } else {
            const filteredRecords = data.filter((item) =>
                item.Name.toLowerCase().startsWith(value.toLowerCase())
            );
            setRecords(filteredRecords);
        }
    };
    
    
    
    return (
        <section className="container px-4 mx-auto">
            <div className="sm:flex sm:items-center sm:justify-between">
                <div>
                    <div className="flex mt-5 items-center gap-x-3">
                        <h2 className="text-2xl font-medium text-gray-800 dark:text-white">electromania.tech</h2>
                        <span className="px-3 py-1 text-sm text-blue-600 bg-blue-100 rounded-full dark:bg-gray-800 dark:text-blue-400">Domain</span>
                    </div>
                    <h3 className="mt-10 text-md text-white text-xl kanit-regular">Filter records</h3>
                </div>
                <div className="flex items-center mt-4 gap-x-3 ">
                    
                    
                    <button className=" flex items-center justify-center w-1/2 px-5 py-2 text-sm tracking-wide text-white transition-colors duration-200 bg-orange-500 rounded-lg shrink-0 sm:w-auto gap-x-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <AddRecord data={id} />
                    </button>
                    <button onClick={()=>naviagate('/domain')} className="flex items-center  justify-center w-1/2 px-5 py-2 text-sm  transition-colors duration-200 border rounded-lg gap-x-2 sm:w-auto   bg-red-700  ">
                       
                        <span className='text-white kanit-regular'>Back to Domains</span>
                    </button>
                </div>
                
            </div>
            <div className="mt-6 md:flex md:items-center md:justify-between">
                <div className="inline-flex overflow-hidden bg-white border divide-x rounded-lg  rtl:flex-row-reverse ">
                    <button onClick={()=>handleFilter('A')}  className="px-5 py-2 text-xs font-medium text-black transition-colors duration-200 bg-gray-100 sm:text-sm">
                         A
                    </button>
                    <button onClick={()=>handleFilter('AAAA')} className="px-5 py-2 text-xs font-medium text-black transition-colors duration-200 sm:text-sm ">
                        AAAA
                    </button>
                    <button onClick={()=>handleFilter('CNAME')} className="px-5 py-2 text-xs font-medium text-black transition-colors duration-200 sm:text-sm ">
                        CNAME
                    </button>
                    <button onClick={()=>handleFilter('MX')} className="px-5 py-2 text-xs font-medium text-black transition-colors duration-200 sm:text-sm ">
                        MX
                    </button>
                    <button onClick={()=>handleFilter('NS')} className="px-5 py-2 text-xs font-medium text-black transition-colors duration-200 sm:text-sm ">
                        NS
                    </button>
                    <button onClick={()=>handleFilter('PTR')} className="px-5 py-2 text-xs font-medium text-black transition-colors duration-200 sm:text-sm ">
                        PTR
                    </button>
                    <button onClick={()=>handleFilter('SOA')} className="px-5 py-2 text-xs font-medium text-black transition-colors duration-200 sm:text-sm ">
                        SOA
                    </button>
                    <button onClick={()=>handleFilter('SRV')} className="px-5 py-2 text-xs font-medium text-black transition-colors duration-200 sm:text-sm ">
                        SRV
                    </button>
                    <button onClick={()=>handleFilter('TXT')} className="px-5 py-2 text-xs font-medium text-black transition-colors duration-200 sm:text-sm ">
                        TXT
                    </button>
                    <button onClick={()=>handleFilter('DNSSEC')} className="px-5 py-2 text-xs font-medium text-black transition-colors duration-200 sm:text-sm ">
                    DNSSEC
                    </button>
                    <button onClick={()=>setRecords(data)} className="px-5 py-2  bg-red-700 text-xs font-medium text-white transition-colors duration-200 sm:text-sm ">
                    Clear Filters
                    </button>
                </div>
                
                <div className="relative flex items-center mt-4 md:mt-0">
                    <span className="absolute">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 mx-3 text-gray-400 dark:text-gray-600">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                        </svg>
                    </span>
                    <input type="text" placeholder="Search" onChange={handleChange} value={searchQuery} className="block w-full py-1.5 pr-5 text-gray-700 bg-white   rounded-lg md:w-80 placeholder-gray-400/70 pl-11 rtl:pr-11 rtl:pl-5  " />
                </div>
            </div>
            <div className="flex flex-col mt-6">
                <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                        <div className="overflow-hidden border border-gray-200  md:rounded-lg">
                            <table className="min-w-full divide-y divide-gray-200 ">
                                <thead className="bg-gray-100 ">
                                    <tr>
                                        <th scope="col" className="text-center py-3.5 px-4 text-lg kanit-medium  font-normal  rtl:text-right text-black ">
                                            Record Name
                                        </th>

                                        <th scope="col" className="text-center kanit-medium px-12 py-3.5 text-lg font-normal  rtl:text-right text-black ">
                                            Type
                                        </th>

                                        <th scope="col" className="px-4 py-3.5 text-lg kanit-medium font-normal text-center rtl:text-right text-black">
                                            Value / Route traffic to
                                        </th>

                                        <th scope="col" className="px-4 py-3.5 text-lg kanit-medium font-normal text-center rtl:text-right text-black ">TTL</th>

                                        <th scope="col" className="px-4 py-3.5 text-lg kanit-medium font-normal text-center rtl:text-right text-black ">Delete</th>
                                        <th scope="col" className="px-4 py-3.5 text-lg kanit-medium font-normal text-start rtl:text-right text-black ">Edit</th>


                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-500">
    {loading?(
        <tr>
        <td colSpan="6" className="text-center">Loading...</td>
    </tr>
        ):(
            records[0]?
        (records.map((item, index) => (
            <tr key={index}>
                <td className="px-4 py-4 text-sm font-medium text-center whitespace-nowrap">
                    <div>
                        <h2 className="text-xl kanit-regular text-black">{item.Name || '-'}</h2>
                    </div>
                </td>
                <td className="px-4 py-4 text-sm font-medium whitespace-nowrap text-center">
                    <div>
                        <h2 className="text-xl kanit-regular text-black">{item.Type || '-'}</h2>
                    </div>
                </td>
                <td className="px-4 py-4 text-sm font-medium whitespace-nowrap text-center">
                    <div>
                        {item.ResourceRecords.length?(item.ResourceRecords.map((resourceRecord, index) => (
                            <p 
                                key={index} 
                                className='text-black relative'
                                title={resourceRecord.Value || '-'}
                            >
                                {resourceRecord.Value && resourceRecord.Value.length > 20 ? `${resourceRecord.Value.substring(0, 20)}...` : resourceRecord.Value}
                            </p>
                        ))) :( <h2 className='text-black'>-</h2>
                         )}
                         
                    </div>
                </td>
                <td className="px-4 py-4 text-sm font-medium whitespace-nowrap text-center">
                    <div>
                        <h2 className="text-xl kanit-regular text-black">{item.TTL || '-'}</h2>
                    </div>
                </td>
                <td className="px-4 py-4 text-sm font-medium whitespace-nowrap text-center flex justify-center">
                    <button className="flex items-center justify-center w-1/2 px-5 py-2 text-sm text-white transition-colors duration-200 bg-red-900 rounded-lg shrink-0 sm:w-auto gap-x-2 hover:bg-blue-600">
                        <DeleteRecord data={item} id={id}/>
                    </button>
                </td>
                <td className="px-4 py-4 text-sm font-medium whitespace-nowrap text-center">
                    <button  className="flex items-center justify-center w-1/2 px-5 py-2 text-sm text-white transition-colors duration-200 bg-orange-600 rounded-lg shrink-0 sm:w-auto gap-x-2 hover:bg-blue-600">
                        <EditRecord data={item} id={id} />
                    </button>
                </td>
            </tr>
        ))
        ):(<tr>
            
            <td className='text-xl kanit-regular text-center'>No records</td>
            <td>
            </td>
            <td>
            </td>
            <td>
            </td>
            <td>
            </td>
            <td>
            </td>
        </tr>
        )
    )
}
</tbody>

 </table>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}








export default RecordTable;
