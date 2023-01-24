

import "./style.css"

export function Card(props) {


    return (

        <div>

            <small> {props.name} </small>

            <small> {props.hora} </small>

        </div>

    )
}