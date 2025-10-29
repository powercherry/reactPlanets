function Card({title, image, description}){
    return(
        <div className="card-container">
            <div className='card-front'>
                <h2>{title}</h2>
                <img src={image} alt={title}/>
            </div>
            <div className='card-back'>
                <h2>{title}</h2>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default Card;