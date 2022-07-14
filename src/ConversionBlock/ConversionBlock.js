import React from 'react';
import '../App.css';
import { useRate } from '../useRate/useRate';
import { useState, useEffect } from 'react';

function ConversionBlock() {

    const { data, loading } = useRate();
    const [topRate, settopRate] = useState(1);
    const [bottomRate, setbottomRate] = useState(1);
    const [topInput, setTopInput] = useState(1);
    const [bottomInput, setBottomInput] = useState(1);

    const onSetTopInput = (d) => {
        setTopInput(+d);
    }

    useEffect(() => { setBottomInput(topInput * topRate / bottomRate)}, [topInput, bottomRate]);
    useEffect(() => { setTopInput(bottomInput * bottomRate / topRate)}, [bottomInput, topRate]);

    const onSetBottomInput = (d) => {
        setBottomInput(+d)
    }

    const onSettopRate = (d) => {
        settopRate(+d)
    }

     const onSetbottomRate = (d) => {
        setbottomRate(+d)
    }

  return (
        <div className='convertation'>
        <div className='block'>
              <input value={topInput} onChange={(e) => onSetTopInput(e.target.value)}/>
                  <select onChange={(e) => onSettopRate(e.target.value)}>
                      <option value={1}>UAN</option>
                      {!loading && data.map(elem => (
                         <option key={elem.cc} value={elem.rate}>{elem.cc}</option>
                     ))} 
                  </select>
        </div>
        <div className='block'>
              <input value={bottomInput} onChange={(e) => onSetBottomInput(e.target.value)}/>
                  <select onChange={(e) => onSetbottomRate(e.target.value)}>
                      <option value={1}>UAN</option>
                      {!loading && data.map(elem => (
                         <option key={elem.cc} value={elem.rate}>{elem.cc}</option>
                     ))} 
                  </select>
        </div>
    </div>
  )
}

export default ConversionBlock