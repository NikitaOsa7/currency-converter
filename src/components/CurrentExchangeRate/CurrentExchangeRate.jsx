import s from './CurrentExchangeRate.module.css';
import axios from 'axios'
import { useState, useEffect } from 'react';

export default function CurrentExchangeRate() {
  const [usd, setUsd] = useState('');
  const [eur, setEur] = useState('');


  useEffect(() => {
    axios.get('https://api.apilayer.com/fixer/latest?base=USD&apikey=vHd8sZWj3nnqKOeFPHr0JTYMidLq1pfZ')
      .then(response => {
        setUsd(format(response.data.rates.UAH));
        console.log('asdas');
    })
  }, [])

    useEffect(() => {
    axios.get('https://api.apilayer.com/fixer/latest?base=EUR&apikey=vHd8sZWj3nnqKOeFPHr0JTYMidLq1pfZ')
      .then(response => {
        setEur(format(response.data.rates.UAH));
    })
  }, [])

  function format(number) {
    return number.toFixed(2)
  }

  return (
    <div>
      <table className={s.table}>
        <tr>
          <th className={s.th}>Валюта</th>
          <th className={s.th}>Покупка</th>
        </tr>
        <tr>
          <td className={s.td}>USD</td>
          <td className={s.td}>{usd}</td>
        </tr>
        <tr>
          <td className={s.td}>EUR</td>
          <td className={s.td}>{eur}</td>
        </tr>
      </table>
     
    </div>

    
  );
};
