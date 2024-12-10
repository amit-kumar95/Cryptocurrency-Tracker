import {Component} from 'react'
import Loader from 'react-loader-spinner'
import CryptocurrencyItem from '../CryptocurrencyItem'
import './index.css'

class CryptocurrenciesList extends Component {
  state = {currencyList: [], isLoading: true}

  componentDidMount() {
    this.getCryptoCurrency()
  }

  getCryptoCurrency = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const data = await response.json()
    console.log(data)

    const updatedCurrency = data.map(each => ({
      id: each.id,
      currencyLogo: each.currency_logo,
      currencyName: each.currency_name,
      euroValue: each.euro_value,
      usdValue: each.usd_value,
    }))

    console.log(updatedCurrency)
    this.setState({currencyList: updatedCurrency, isLoading: false})
  }

  render() {
    const {currencyList, isLoading} = this.state
    return (
      <>
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="Rings" color="#ffffff" height={80} width={80} />
          </div>
        ) : (
          <div className="currencyListContainer">
            <h1 className="heading">Cryptocurrency Tracker</h1>
            <img
              className="imgCrypto"
              src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
              alt="cryptocurrency"
            />
            <div className="coinTypeCont">
              <div className="coinCont">
                <p>CoinType</p>
                <div className="usdCont">
                  <p className="usedParagraph">USD</p>
                  <p>EURO</p>
                </div>
              </div>
              {currencyList.map(each => (
                <CryptocurrencyItem currencyDetails={each} key={each.id} />
              ))}
            </div>
          </div>
        )}
      </>
    )
  }
}

export default CryptocurrenciesList
