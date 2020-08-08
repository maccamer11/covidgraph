import React, { useState, useEffect } from 'react'
import { FormControl, NativeSelect } from '@material-ui/core';

import { getCountries } from '../../api/index';
import './CountrySelector.modules.css'

const CountrySelect = ({ handleCountryChange }) => {
    const [fetchedCountries, setFetchedCountries] = useState([])

    useEffect(() => {
        const fetchCountries = async () => {
            setFetchedCountries(await getCountries())
        }

        fetchCountries()
    }, [setFetchedCountries])



    return (
        <FormControl className='formcontrol'>
            <NativeSelect defaultValue='' onChange={(e) => handleCountryChange(e.target.value)}>
                <option value='global'>Global</option>
                {fetchedCountries.map((country, i) =>
                    <option key={i} value={country}>{country}</option>
                )}
            </NativeSelect>
        </FormControl>
    )
}

export default CountrySelect;