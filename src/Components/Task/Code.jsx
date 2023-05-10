import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { Container } from 'react-bootstrap'

const Code = () => {

    const [data, setData] = useState();
    const getData = ()=>{
    }
    useEffect(()=>{
    },[])
  return (
    <div>
        <Container>
            <div>
                <textarea value={data} onChange={(e)=>{setData(e.target.value)}} id="coding" cols="30" rows="10">
                </textarea>
                <button onClick={()=>getData()}>Check</button>
            </div>
        </Container>
    </div>
  )
}

export default Code