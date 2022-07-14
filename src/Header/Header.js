import React from 'react';
import '../App.css';
import { useRate } from '../useRate/useRate';

function Header() {

  const { data, loading } = useRate();
  

  return (
    <header className='header'>
      {!loading && data.map(elem => (
        <div className="rateBlock" key={elem.cc}>
          <div className="rateCc">{elem.cc}</div>
          <div className="rateRate">{elem.rate}</div>
        </div>
      ))}
    </header>
  )
}

export default Header