import React from 'react'

function Card(props) {
  return (
    <div>
        <div className="card-container">
            <p>{props.name}</p>
        </div>
    </div>
  )
}

export default Card