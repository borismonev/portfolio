import '../css/components/AboutCard.css'
import educationImage from '../assets/education.jpg';
import gamingImage from '../assets/gaming.jpg';
import carImage from '../assets/car.jpg';

function AboutCard() {
    return <section>
        <input className="sr-only" id="card-1" type="radio" name="panel" checked readOnly />
        <input className="sr-only" id="card-2" type="radio" name="panel" checked readOnly />
        <input className="sr-only" id="card-3" type="radio" name="panel" checked readOnly />

        <article id="article-1">
            <header>
                <h2>Interests</h2>
                <label htmlFor="card-2">Next slide</label>
            </header>
            <div>
                <img src={carImage} alt="car image" />
                <div className="poem">
                    <ul>
                        <li>
                            <b>Technology</b> has been interesting to me ever since I was little. I am mostly into <b>computer hardware</b>, and studying IT has helped me learn more about <b>software</b> too. I love to read and watch <b>reviews</b> about <b>new devices or technologies</b> that have been developed. Technology is everywhere and is a big part of my life as someone born in a generation where HD television and <b>smartphones</b> were accessible to most people and had become an essential tool that was used on a daily basis.
                        </li>
                        <hr className='devider' />
                        <li>
                            Another interest of mine is <b>cars</b>, but not the regular traffic - I am into the <b>high performance</b> and <b>exclusive</b> type of cars. Whenever I travel I always look forward to <b>spotting some cool car</b> on the street and photographing it to share with friends. I read and watch <b>reviews</b> on the <b>latest cars</b> and I love learning about their improvements and <b>innovative features</b>. <b>Technology</b> is also a big part of cars and that is why I am <b>passionate about both</b>.
                        </li>
                    </ul>

                </div>
            </div>

        </article>

        <article id="article-2">

            <header>
                <h2>Hobbies</h2>
                <label htmlFor="card-3">Next slide</label>
            </header>
            <div>
                <img src={gamingImage} alt="video card" />
                <div className="poem">
                    <ul>
                        <li>
                            One thing I enjoy doing the most is building a <b>computer</b>. I built my first computer about six years ago and since then I have built <b>four more</b>. It is something I wish I got to do more often, because I enjoy the process of <b>envisioning</b> the way the computer is going to look, <b>researching</b> the best performing <b>components</b> for the certain price range, and finally <b>building</b> it and seeing it power on for the first time.
                        </li>
                        <hr className='devider' />
                        <li>
                            Something I like to do in my free time is to <b>play video games</b>. Although many find this activity unproductive and a waste of time, I think it has <b>benefited me more than it has harmed me</b>. I enjoy playing <b>competitive online games</b> which require strategy and communication and I also like <b>driving games and simulators</b>.
                        </li>
                        <hr className='devider' />
                        <li>
                            Another hobby of mine is <b>photography</b>. I enjoy taking pictures of the <b>sceneric places</b> I travel to, but mostly I like taking pictures of <b>cars</b>. I am an amateur and I take pictures on a smartphone, but the process of figuring out <b>angles, lighting</b> and <b>touching up pictures in post</b> is very fun for me and <b>sharing the final result</b> with others is great.
                        </li>
                    </ul>
                </div>
            </div>
        </article>

        <article id="article-3">

            <header>
                <h2>Education</h2>
                <label htmlFor="card-1">Next slide</label>
            </header>
            <div>
                <img src={educationImage} alt="education" />

                <div className="poem">
                    <p>
                        My education in Information Technology started in the Netherlands at <b>HZ University of Applied Sciences</b>, where I completed a <b>Propaedeutic Certificate in ICT</b> (September 2024 – June 2025). This year was very practical: I built a solid foundation in web development using <b>HTML, CSS, and JavaScript</b>. I also gained experience with object-oriented programming in <b>TypeScript</b>, applying it in a team project where we developed an <b>educational game</b>. Additionally, I learned full-stack principles using <b>PHP, SQL, and the Laravel framework</b>, which I applied in another team project creating a visitor registration system. Currently, I am continuing my studies in Sofia, pursuing a <b>Bachelor of Information Technology at New Bulgarian University</b>.
                    </p>
                </div>
            </div>
        </article>

    </section>
}

export default AboutCard