function ClassificationCard({ title, description, examples, images }) {
    return (
        <div>
            <h2>{title}</h2>
            <hr />
            <p>{description}</p>
            <ul className="planets-list-container">
                {examples.map((item, index) => (
                    <li key={item} className="planet-item">
                        <img src={images[index]} alt={item} className="pixel-art" />
                        <span>{item}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ClassificationCard;
