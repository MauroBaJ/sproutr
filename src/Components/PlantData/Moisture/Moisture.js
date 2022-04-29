import React from 'react';

const Moisture = (props) => {

    const moisture = props.moist;

    return(
        <div className={"moisture"}>
            <h3>Humedad del Ambiente</h3>
            {moisture? <p>{moisture}%</p>: <p>Error al recibir datos</p>}
        </div>
    )
}

export default Moisture;