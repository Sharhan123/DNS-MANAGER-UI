import React, { useEffect, useState } from 'react'
import RecordTable from '../customComponents/TableRecords'
import { useLocation, useParams } from 'react-router-dom'
import { getDNS } from '../../services/userService';

function MainContent() {
    const [records,setRecords] = useState([])
    const [id,setId] = useState('')
    const location = useLocation()
  const queryParams = new URLSearchParams(location.search);
  const serializedData = queryParams.get('data')
  console.log(serializedData);
  const data = JSON.parse(decodeURIComponent(serializedData));
  
    useEffect(()=>{
        const fetch = async ()=>{
            const res = await getDNS(data)
            setRecords(res.data.data)
            setId(res.data.domain)
        }

        fetch()
        console.log(id,'....');
    },[])

    
  return (
    <div className='h-screen clr'>
      <RecordTable data={records} id={id} />
    </div>
  )
}

export default MainContent
