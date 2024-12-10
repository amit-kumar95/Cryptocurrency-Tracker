import './index.css'

const CryptocurrencyItem = props => {
  const {currencyDetails} = props
  const {currencyLogo, currencyName, euroValue, usdValue} = currencyDetails

  return (
    <li className="listStlTypeCurrency">
      <div className="currencyDetailsCont">
        <div className="imgCont">
          <img className="imgCurrency" src={currencyLogo} alt={currencyName} />
          <p className="currencyNamePara">{currencyName}</p>
        </div>
        <div className="euroCont">
          <div className="paraUsed">
            <p>{usdValue}</p>
          </div>
          <p>{euroValue}</p>
        </div>
      </div>
    </li>
  )
}

export default CryptocurrencyItem
