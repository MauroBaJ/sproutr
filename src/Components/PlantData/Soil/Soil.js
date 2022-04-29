import React from 'react';
import {CircularProgress} from "@mui/material";

const Soil = (props) => {
    console.log(props)
    const moisture = props.moist;


    return(
        <div className={"soil"}>
            <h3>Humedad del Suelo</h3>
            <CircularProgress variant="determinate" value={moisture}
            size={200} thickness={10}
            color = {(moisture > 50 || moisture < 10 )?"warning":"info"}
            />
                <div className='gauge-level'>
                    {moisture?
                        <p>{moisture}%</p>:
                        <p>Ocurrio un error en la conexion</p>
                    }
                </div>
            </div>

    )
}




export default Soil;