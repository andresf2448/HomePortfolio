import '../Card/Card.css';

export default function Card({ url }) {
    console.log(url)
    return (
        <div className="grid-item">
            <img src={url} alt="no se encontró" style={{width: "230px", height: "300px" }} />
        </div>
    )
}
