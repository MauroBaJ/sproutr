import React, {useEffect, useState} from 'react';
import Air from './Air/Air'
import Moisture from "./Moisture/Moisture";
import Soil from "./Soil/Soil";
import './PlantData.css'

function PlantData(){

    const [values, setValues] = useState({
        temperature: 0, moisture: 0, soil: 0
    })


    useEffect( () =>{
        const interval = setInterval( () => {
            setValues(
                {
                    temperature: Math.round((Math.random() * (40 - 19) + 19 )* 10) / 10,
                    moisture: Math.round((Math.random() * (90 - 50) + 50) * 10) / 10,
                    soil: Math.round((Math.random() * (90 - 20) + 20 )* 10) / 10
                }
            )
        }, 10000)
        return () => { clearInterval(interval)}
    })


    return(
        <div className='plant-data'>
            <Air temp={values.temperature}/>
            <Moisture moist={values.moisture}/>
            <Soil moist={values.soil}/>
        </div>
    )
}

export default PlantData;