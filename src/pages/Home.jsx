import Card from '../components/Card'
import '../css/pages/Home.css'
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
                    I love experimenting with various devices, seeing how they work, and experiencing the innovative features they bring to the world. I am studying Information Technology to enhance my understanding of technology not only on a hardware level but also on a software level.
                </p>
            </div>
            <img
                src={portraitImage}
                alt='portrait-image'
                className='portrait-image'
            />
        </div>
        <div className='cards'>
            <Card
                title={'About me'}
                content={'I am 20 years old and I am from Sofia, Bulgaria. I am currently studying Information Technology at New Bulgarian University. I am interested in tech and cars.'}
                link={'/about'}
            />
            <Card
                title={'My skills'}
                content={'I have experience with different programing languages such as HTML, CSS, C++, JavaScript, TypeScript and PHP with SQL. I am self-taught in Adobe Photoshop and Microsoft Office.'}
                link={'/skills'}
            />
            <Card
                title={'Projects'}
                content={'During my first year of university in the Netherlands I worked on team projects regarding a childrens` education game and a visitor registration system for the research center next door.'}
                link={'/projects'}
            />
        </div>
    </div>
}

export default Home