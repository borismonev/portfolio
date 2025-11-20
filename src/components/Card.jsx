import '../css/components/Card.css'
import { Link } from 'react-router-dom'

function Card({ title, content, link }) {
    return <div className="card">
        <div className="content">
            <div className="header">
                <strong className='title'>{title}</strong>
            </div>
            <div className="footer">
                <p className="para">{content}</p>
                <button className="button">
                    <Link to={link}> Read more </Link>
                </button>
            </div>
        </div>
    </div>

}

export default Card