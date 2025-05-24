import React from 'react'

const Card = ({ title, description, image }) => {

    return (
        <div className="card h-100">
            <div className="">
                <img src={image} className="img-square" alt="..." />
            </div>
            <div className="card-body d-flex flex-column">
                <h5 className="card-title text-center">{title}</h5>
                <p className="card-text-constrained text-center">{description}</p>
                <div className="d-flex justify-content-center align-items-center mt-auto">
                    <a href="#" className="btn btn-primary">Leer Más</a>
                </div>
            </div>
        </div>
    )
}

export default Card