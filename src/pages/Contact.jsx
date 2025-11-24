import ContactCard from '../components/ContactCard'
import '../css/pages/Contact.css'

function Contact() {
    return <div>
        <div className='contact-hero-content'>
            <div className='hero-text'>
                <h1 className='title'> <b>Contact me</b></h1>
                <p className='subtitle'>
                    Thanks for visiting my portfolio! Whether you have a job opportunity, a project idea, or just want to discuss the latest in technology or high-performance cars, I would love to hear from you.
                </p>
            </div>
            <ContactCard />
        </div>
    </div>
}

export default Contact