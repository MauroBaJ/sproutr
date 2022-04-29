import React from 'react';

const Air = (props) => {

    const temp = props.temp;
    return(
        <div className={"air"}>
            <h3>Temperatura del Ambiente</h3>
            {temp? <p>{temp}°C</p>: <p>Error al recibir datos</p>}
        </div>
    )
}

export default Air;