import Card from '../components/Card'
import '../css/Home.css'

function Home() {
    return <div>
        <h1 className='title'> <b>Hello, I am Boris</b></h1>
        <p className='subtitle'>
            I am an undergraduate student majoring in Information Technology. Welcome to my portfolio website. Here you can find information about me, the projects I have worked on and how you can get in touch with me.
        </p>
        <div className='cards'>
            <Card title={'About me'} content={'My content'} link={'/about'} />
            <Card title={'Projects'} content={'My projects'} link={'/projects'} />
            <Card title={'About me'} content={'My content'} link={'/about'} />

        </div>
    </div>
}

export default Home