import Card from '../components/Card'
import '../css/pages/Home.css'
import portraitImage from '../assets/portrait-drawing.png';

function Home() {
    return <div>
        <div className='hero-content'>
            <div className='hero-text'>
                <h1 className='title'> <b>Hello, I am Boris</b></h1>
                <p className='subtitle'>
                    Welcome to my <b>portfolio website</b>! I am an undergraduate student majoring in <b>Information Technology</b>. Here you can find information about me, my <b>interests</b>, the <b>projects</b> I have worked on and how to get in touch with me.
                </p>
                <hr />
                <p className='subtitle'>
                    I love <b>experimenting with various devices</b>, seeing how they work, and experiencing the <b>innovative features</b> they bring to the world. I am studying <b>Information Technology</b> to enhance my understanding of technology not only on a <b>hardware level</b> but also on a <b>software level</b>.
                </p>
            </div>
            <img
                src={portraitImage}
                alt='portrait-image'
                className='portrait-image'
            />
        </div >
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
    </div >
}

export default Home