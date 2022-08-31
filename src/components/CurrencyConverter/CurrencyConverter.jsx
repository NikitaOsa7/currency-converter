import CurrencyConverterInput from 'components/CurrencyConverterInput/CurrencyConverterInput';
import s from '../CurrencyConverter/CurrencyConverter.module.css';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { nanoid } from 'nanoid';

export default function CurrencyConverter() {
  const [amount1, setAmount1] = useState(1);
  const [amount2, setAmount2] = useState(1);
  const [currency1, setCurrency1] = useState('USD');
  const [currency2, setCurrency2] = useState('UAH');
  const [rates, setRates] = useState([]);

  useEffect(() => {
    axios.get('https://api.apilayer.com/fixer/latest?base=USD&apikey=vHd8sZWj3nnqKOeFPHr0JTYMidLq1pfZ')
      .then(response => {
        setRates(response.data.rates);
    })
  }, [])

  /* eslint-disable */ 
  
  useEffect(() => {
    if (!rates) {
      handleAmount1Change(1);
    }
  }, [rates])
  

  function format(number) {
    return number.toFixed(4)
  }

  function handleAmount1Change(amount1) {
    setAmount2(format(amount1 * rates[currency2] / rates[currency1]))
    setAmount1(amount1);
  };

  function handleCurrency1Change(currency1) {
    setAmount2(format(amount1 * rates[currency2] / rates[currency1]))
    setCurrency1(currency1);
  }

  function handleAmount2Change(amount2) {
    setAmount1(format(amount2 * rates[currency1] / rates[currency2]))
    setAmount2(amount2);
  };

  function handleCurrency2Change(currency2) {
    setAmount1(format(amount2 * rates[currency1] / rates[currency2]))
    setCurrency2(currency2);
  }

  return (
   <div>
      <h1 className={s.converterTitle}>ВЫБЕРИТЕ ВАЛЮТЫ ДЛЯ КОНВЕРТАЦИИ</h1>
      <CurrencyConverterInput
        onAmountChange={handleAmount1Change}
        onCurrencyChange={handleCurrency1Change}
        currencies={Object.keys(rates)}
        amount={amount1}
        currency={currency1}
      />

      <CurrencyConverterInput
        onAmountChange={handleAmount2Change}
        onCurrencyChange={handleCurrency2Change}
        currencies={Object.keys(rates)}
        amount={amount2}
        currency={currency2}
      />
    </div>
  );
}
