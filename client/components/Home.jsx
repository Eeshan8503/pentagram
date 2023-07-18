import React from 'react'
import Logo from './../public/assets/logoo.jpeg'
import EventCard from './EventCard'
import Frame from './Frame'
import E1 from './../public/assets/E1.png'
import E2 from './../public/assets/E2.png'
import E3 from './../public/assets/E3.jpg'
import E4 from './../public/assets/E4.png'
import E5 from './../public/assets/E5.png'
import E6 from './../public/assets/E6.jpg'
import E7 from './../public/assets/E7.png'
import E8 from './../public/assets/E8.png'
import E9 from './../public/assets/E9.jpeg'
import E10 from './../public/assets/E10.png'
import E11 from './../public/assets/E11.png'
import E12 from './../public/assets/E12.jpeg'
import E13 from './../public/assets/E13.jpeg'
// import P1 from './../public/assets/'
const Home = () => {
  let i = 0
  var ab = [
    {
      post: require(`./../public/assets/P1.jpg`),
      cont: `PRESIDENT`,
      name: 'DHANWANTH M',
    },
    {
      post: require(`./../public/assets/P2.jpg`),
      cont: `VICE PRESIDENT`,
      name: 'ANIRUDH PRABHU',
    },
    {
      post: require(`./../public/assets/P3.jpg`),
      cont: `FINANCIAL HEAD`,
      name: 'ADVAITH V',
    },
    // {
    //   post: require(`./../public/assets/P4.jpg`),
    //   cont: `SECRETARY`,
    //   name: 'UMANG GOEL',
    // },
    {
      post: require(`./../public/assets/P5.jpg`),
      cont: `TECH AND DESIGN HEAD`,
      name: 'SAHANA S',
    },
    {
      post: require(`./../public/assets/P6.jpg`),
      cont: `STUDENT CO-ORDINATOR`,
      name: 'SHIVANI SHANTAGIRI',
    },
    {
      post: require(`./../public/assets/P7.jpg`),
      cont: `STUDENT CO-ORDINATOR`,
      name: 'LEKHA G PATEL',
    },
    {
      post: require(`./../public/assets/P8.jpeg`),
      cont: ` SOCIAL MEDIA HEAD`,
      name: 'AMOGH',
    },
    {
      post: require(`./../public/assets/P9.jpg`),
      cont: `DIGITAL MARKETING HEAD`,
      name: 'AJIT J GUPTA',
    },
    {
      post: require(`./../public/assets/P10.jpg`),
      cont: `EVENT ORGANIZING HEAD`,
      name: 'SUMA HIREMATH',
    },
    {
      post: require(`./../public/assets/P11.jpg`),
      cont: `EVENT ORGANIZING HEAD`,
      name: 'YASH MEHENDALE',
    },
  ]
  var k = [
    {
      post: E1,
      cont: ` *_MATHVIZ_* a mind boggling event for all curious minds, aspiring mathematicians and coding prodigies which has coding skills, analysis and knowledge in play. Get ready to ignite your passion, expand your knowledge and compete against coding and math enthusiasts.`,
      form: 'https://forms.gle/5hJwFZTTebwHn97SA',
    },
    {
      post: E2,
      cont: `KBC (Kaun Banega Conqueror) is a one-of-a-kind event designed to test your knowledge, skills, and quick thinking*. With three exciting rounds, it guarantees entertainment for everyone involved!`,
      form: 'https://forms.gle/Ax5C52MUvGu3wHoy8',
    },
    {
      post: E3,
      cont: `"CASINO OF BRAINS", an exciting event featuring rounds of mind-boggling games that combine mathematics, tabletop challenges, pop culture, general knowledge, and technology. Get ready to explore and have fun while sharpening your skills!`,
      form: 'https://forms.gle/hjprMjkFtrtq91cU6',
    },
    {
      post: E4,
      cont: `The Cryptic Killer is a *mastermind of puzzles,* an evil genius whose identity remains concealed!
      *Unravel the series of puzzles* that the killer has set up using *logic, observational skills, coding and math!*`,
      form: 'https://forms.gle/P7PPHHCFYrK4skbz8',
    },
    {
      post: E5,
      cont: `The first, and perhaps most important, relationship between current, voltage, and resistance is called Ohm’s Law_
      *BMSCE IEEE PELS AND IES* in collaboration with *PENTAGRAM* on account of *NUMERO FIESTA* presents *Ohm's law relay*`,
      form: 'https://forms.gle/nM5TC3WaeNPwAZYn9',
    },
    {
      post: E6,
      cont: `Grid Gambit, where you'll explore an enigmatic event that combines the thrill of multiplayer gemsweeper with the mind-bending challenge of Tetris.`,
      form: 'https://forms.gle/Ne38Pvq1JFW1X5M86',
    },
    {
      post: E7,
      cont: `MELT. Embark on an extraordinary voyage through a labyrinth of questions, which intertwine the realms of Mathematics, Entertainment, and Literature.

      Get ready to navigate through the intricate twists and turns of the event, where the magic of numbers dances with the allure of entertainment and the power of words.
      `,
      form: 'https://forms.gle/A1exGa3iYv5FDTB98',
    },
    {
      post: E8,
      cont: `"Number Sorcery". The event is basically a math quiz where it tests one's mathematical abilities with time as constraint. 
      
      An exhilarating event where knowledge,skills and excitement converge with exciting prizes.🤩🏅 So here is the chance to take a break from daily college schedule and gear up for the fun filled event.`,
      form: 'https://forms.gle/ky6ezC8BvcE5iFkV7',
    },
    {
      post: E9,
      cont: `"Just In Case" 🌟 Embark on an exhilarating adventure of cracking suitcases filled with hidden treasures. 💼
      Solve mind-bending obstacles to unlock the mysteries within each case.`,
      form: 'https://forms.gle/hcMEjio572TmMdFdA',
    },
    {
      post: E10,
      cont: `“PI CARNIVAL” a mind bending and exciting fun event with numerous games where you compete against other mathematical enthusiasts, revealing your true abilities and strategical thinking. Come join us for a fun ride🀄🎯`,
      form: 'https://forms.gle/K4Mz77LsQY9Z6g1z9',
    },
    {
      post: E11,
      cont: `On the occasion of NUMERO FEISTA, we present you  ENCIPHER wherein you'll be tested on your problem-solving abilities and online navigation skills🏆🏆`,
      form: 'https://forms.gle/ZQ1s5WiGc4pzUviX8',
    },
    {
      post: E12,
      cont: `Are you bullish about the bull or even is you are barely a bear, come and show your trading skills with the like minded people in BMSCE 🔥`,
      form: 'https://forms.gle/ozecSP5rLtFTW5Ra9',
    },
    {
      post: E13,
      cont: `"Extreme Treasure Hunt Event". This epic adventure is designed to ignite your curiosity, test your problem-solving skills, and uncover hidden treasures like never before. `,
      form: 'https://forms.gle/XnddduBZt5V8pzff6',
    },
  ]

  return (
    <>
      <div className="home" id="home" style={{ color: 'white' }}>
        <div>
          <h1>Pentagram</h1>
          <p>The mathematical society</p>
          <p> of BMSCE</p>
        </div>
        <div className="logo">
          <img src={Logo.src} />
        </div>
      </div>

      <div className="events" id="events">
        <h1>Events</h1>
        <div className="Evcards">
          {k.map((c) => {
            return <EventCard image={c.post.src} cont={c.cont} form={c.form} />
          })}
        </div>
      </div>
      <div className="events" id="about">
        <h1>The Team</h1>
        <div className="Evcards">
          {/* {console.log(ab[1])} */}
          {ab.map((c) => {
            return (
              <Frame
                dis="none"
                name={c.name}
                image={c.post.default.src}
                desig={c.cont}
              />
            )
          })}
        </div>
      </div>
      <div className="contact" id="contact">
        <h1>Contact:</h1>
        <br />
        <p>DHANWANTH M</p>
        <p>President</p>
        <p>80738 31246</p>
        <p>bmscepentagram@gmail.com</p>
        <br />
        <br />
        
      </div>
    </>
  )
}

export default Home
