import '../css/Card.css'
import { Link } from 'react-router-dom'

function Card({ title, content, link }) {
    return <div className="card">
        <Link to={link} className="card__title">{title}</Link>
        <p className="card__content">{content}</p>
    </div>
}

export default Card