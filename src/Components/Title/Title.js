import React from "react";
import './Title.css'
const Title = (props) => {
    const title = props.title
    return(
        <div className="title">

            {title?
                <h1>{title}</h1>:
                <h1>Placeholder</h1>
            }

        </div>
    )
}

export default Title;