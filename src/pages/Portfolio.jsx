import CodeCard from '../components/CodeCard'
import '../css/pages/Portfolio.css'

function Portfolio() {
    return <div>
        <div className='portfolio-hero-content'>
            <div className='hero-text'>
                <h1 className='title'> <b>My portfolio</b></h1>
                <p className='subtitle'>
                    I am very early into my career but I am <b>proud of the projects I have worked on</b>. I not only learnt <b>widely used programming languages</b>, but also how to write <b>documentation</b> and create <b>complex diagrams</b>, how to <b>build trust within a team</b> and how to <b>communicate with a client and gather feedback</b>. Below is the list of projects I have worked on.
                </p>
            </div>
        </div>
        <div className='code-cards'>
            <CodeCard title='Educational game' content='The first project I was a part of was an **educational game**, programmed using **object-oriented programming** with **TypeScript**. My major role in the project was to **create the story** and **the design for the game**. I was also responsible for the **code architecture** and **visualization through diagrams of the OOP principles** implemented. Our game was chosen as the **second best in the contest**.' />
            <CodeCard title='Visitor registration system' content='The second project I was a part of was a **visitor registration system** for the research center next door. The project was focused on the **CRUD operations** of the system and was developed using **PHP** and **SQL** on the **Laravel framework**. I **worked with a real client** and every two weeks had a meeting where I **presented the progress** and **gathered their feedback**.' />
            <CodeCard title='Portfolio website' content='My final project (for now) is this **portfolio website**. I made it using **React** and **JavaScript**. I wanted to try out something new and learnt one very **commonly used web technology**. I tried to **optimise this website** to be **responsive** and to work on **different devices**. I used outside sources for some of the **CSS** and made my own **logo** and the **portrait** on the front page using **Photoshop**.' />
        </div>
    </div>
}

export default Portfolio