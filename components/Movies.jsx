import React, { useEffect, useState } from 'react';
import axios, { Axios } from 'axios';

const Movies = () => {
  const [datas,setDatas] = useState({});
  const [temp, setTemp] = useState(1);

  useEffect(()=>{
    axios.get('https://catfact.ninja/fact').then( res => {
        setDatas(res.data)
    })
  },[temp])
  
  return (
    <div>
      <table>
        <tr>
          <th>fact</th>
          <td>{datas.fact}</td>
        </tr>
        <tr>
          <th><button onClick={()=> setTemp(temp+1)}>Refresh</button></th>
        </tr>
      </table>
    </div>
  )
}

export default Movies
