import '../css/pages/About.css'
import AboutCard from '../components/AboutCards'

function About() {
    return <div>
        <div className='about-hero-content'>
            <div className='hero-text'>
                <h1 className='title'> <b>About me</b></h1>
                <p className='subtitle'>
                    I am <b>Boris</b>, I am 20 years old, from <b>Sofia, Bulgaria</b>. I am an <b>Information Technology</b> undergraduate with experience ranging from <b>HTML/CSS, JavaScript, and TypeScript to PHP/Laravel</b>. I gained these skills during my studies in the <b>Netherlands</b>, where I took part in collaborative projects to develop an <b>educational game</b> and a <b>registration system</b> for a research center. I am passionate about <b>technology and cars</b>, and I love dedicating my free time to building custom computers, playing video games, or taking pictures. <b>Read more</b> about my <b>education, interests and hobbies</b> below!
                </p>
            </div>
        </div>
        <AboutCard />
    </div>
}

export default About