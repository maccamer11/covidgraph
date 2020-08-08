import React, { Component } from 'react'
import Cards from './components/Cards/Cards.jsx';
import Charts from './components/Charts/Charts.jsx';
import Countries from './components/CountrySelector/CountrySelector.jsx';
import { fetchData } from './api/index';

import covidImage from './images/covid.png'

import './App.modules.css';

class App extends React.Component {
  state = {
    data: {},
    country: '',
  }

  async componentDidMount() {
    const fetchedData = await fetchData();
    this.setState({ data: fetchedData })

  }

  handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country);
    //fetched data to be passed to chart and cards
    console.log(fetchedData)
    this.setState({ data: fetchedData, country: country })
  }

  render() {
    const { data, country } = this.state
    return (
      <>
        <div className='container'>
          <img className='image' src={covidImage} alt='logo' />
          <Cards data={data} />
          <Countries handleCountryChange={this.handleCountryChange} />
          <Charts data={data} country={country} />
        </div>
      </>
    )
  }
}

export default App;