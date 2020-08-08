import React from 'react'
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import Countup from 'react-countup';
import cx from 'classnames'

import './Cards.modules.css';

//data was the prop we passed, so we need to first destructure data > destructure confirmed et al
const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
    if (!confirmed) {
        return 'Loading ...'
    }
    return (
        <div className='cardcontainer'>
            <Grid container spacing={3} justify='center' className='resize'>
                <Grid item component={Card} xs={12} md={3} className='card cases'>
                    <CardContent>
                        <Typography color='textSecondary' gutterBottom>Total Cases</Typography>
                        <Typography variant='h5'>
                            <Countup start={0} end={confirmed.value} duration={2} separator=',' />
                        </Typography>
                        <Typography color='textSecondary'>{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant='body2'>Total Cases</Typography>
                    </CardContent>
                </Grid>

                <Grid item component={Card} xs={12} md={3} className='card recovered'>
                    <CardContent>
                        <Typography color='textSecondary' gutterBottom>Recovered</Typography>
                        <Typography variant='h5'>
                            <Countup start={0} end={recovered.value} duration={2} separator=',' /></Typography>
                        <Typography color='textSecondary'>{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant='body2'>Number of recoveries</Typography>
                    </CardContent>
                </Grid>

                <Grid item component={Card} xs={12} md={3} className='card deaths'>
                    <CardContent>
                        <Typography color='textSecondary' gutterBottom>Deaths</Typography>
                        <Typography variant='h5'><Countup start={0} end={deaths.value} duration={2} separator=',' />
                        </Typography>
                        <Typography color='textSecondary'>{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant='body2'>Total deaths</Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </div>
    )
}

export default Cards