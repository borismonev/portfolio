import Card from '../components/Card'
import '../css/Home.css'
import portraitImage from '../assets/portrait-drawing.png';

function Home() {
    return <div>
        <div className='hero-content'>
            <div className='hero-text'>
                <h1 className='title'> <b>Hello, I am Boris</b></h1>
                <p className='subtitle'>
                    Welcome to my portfolio website! I am an undergraduate student majoring in Information Technology. Here you can find information about me, the projects I have worked on and how you can get in touch with me.
                </p>
                <hr />
                <p className='subtitle'>
                    Welcome to my portfolio website! I am an undergraduate student majoring in Information Technology. Here you can find information about me, the projects I have worked on and how you can get in touch with me.
                </p>
            </div>
            <img
                src={portraitImage}
                alt='portrait-image'
                className='portrait-image'
            />
        </div>

        <div className='cards'>
            <Card title={'About me'} content={'My content'} link={'/about'} />
            <Card title={'Projects'} content={'My projects'} link={'/projects'} />
            <Card title={'About me'} content={'My content'} link={'/about'} />
        </div>
    </div>
}

export default Home