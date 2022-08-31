import PropTypes from 'prop-types';
import s from './CurrencyConverterInput.module.css'

export default function CurrencyConverterInput(props) {
    return (
        <div className={s.group}>
            <input key={'input'} className={s.valueInput} type="text" value={props.amount} onChange={event => props.onAmountChange(event.target.value)} />
            <select key={'select'} className={s.select} vlaue={props.currency} onChange={event => props.onCurrencyChange(event.target.value)}>
                {props.currencies.map((currency => (
                    <option vlaue={currency}>{currency}</option>
                )))}
            </select>
        </div>
    )
}

CurrencyConverterInput.propTypes = {
    amount: PropTypes.number.isRequired,
    currency: PropTypes.string.isRequired,
    currencies: PropTypes.array,
    onAmountChange: PropTypes.func,
    onCurrencyChange: PropTypes.func,
}