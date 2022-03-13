import React from 'react'
import Logo from './../public/assets/logoo.jpeg'
import EventCard from './EventCard'
import E1 from './../public/assets/E1.jpeg'
import E2 from './../public/assets/E2.jpeg'
import E3 from './../public/assets/E3.jpeg'
import E4 from './../public/assets/E4.jpeg'
import E5 from './../public/assets/E5.jpeg'
import E6 from './../public/assets/E6.jpeg'
import E7 from './../public/assets/E7.jpeg'
import E8 from './../public/assets/E8.jpeg'
import { render } from 'react-dom'
// import P1 from './../public/assets/'
const Home = () => {
    let i=0;
    var ab=[
        {
            post:require(`./../public/assets/P1.jpeg`),
            cont:`President`
        },
        {
            post:require(`./../public/assets/P2.jpeg`),
            cont:`Club Co-ordinator`
        },
        {
            post:require(`./../public/assets/P3.jpeg`),
            cont:`Secretary`
        },
        {
            post:require(`./../public/assets/P4.jpeg`),
            cont:`Tech and Design head`
        },
        {
            post:require(`./../public/assets/P5.jpeg`),
            cont:`Digital Marketing head`
        },
        {
            post:require(`./../public/assets/P6.jpeg`),
            cont:`FINANCIAL HEAD`
        },
        {
            post:require(`./../public/assets/P7.jpeg`),
            cont:`Student co-ordinators`
        },
        {
            post:require(`./../public/assets/P8.jpeg`),
            cont:`Student co-ordinators`
        },
        {
            post:require(`./../public/assets/P9.jpeg`),
            cont:`SOCIAL MEDIA MANAGER`
        },
        {
            post:require(`./../public/assets/P10.jpeg`),
            cont:`EVENT ORGANIZING HEADS`
        },
        {
            post:require(`./../public/assets/P11.jpeg`),
            cont:`EVENT ORGANIZING HEADS`
        },
    ]
    var k=[
        {
            post:E1,
            cont:`Cup pong games, can be amusing. Imagine a competition where you can play a game and answer some fun questions at the same time. Sounds interesting, isn’t it?

            Protocol club in collaboration with Pentagram club presents to you a super exciting event, Think-Pong on account of SIMPLY π.`,
            form:'https://forms.gle/UasDZvPiLewaiDRV9'
        },
        {
            post:E2,
            cont:`Greetings from BMS Photography Club !📸

            “To me, photography is an art of observation. It’s about finding something interesting in an ordinary place… I’ve found it has little to do with the things you see and everything to do with the way you see them.”
            - Elliott Erwitt`,
            form:'https://forms.gle/8Xh8wtYT1Q7WAN6e6'  
              
        },
        {
            post:E3,
            cont:`Greetings from BMSCE IEEE WIE! ✨ 

            On the account of 'Simply Pi',  BMSCE IEEE WIE in collaboration with Pentagram brings to you “Number Ninjas”- An event for all those who love playing with numbers!`,
            form :'https://forms.gle/TWXf6y2hyvaZtgs97'
        },
        {
            post:E4,
            cont:`Greetings from BMSCE IEEE SB, BMSCE IEEE PES & Sensors Council and BMSCE Pentagram!

            Origami is an age-old art form of folding paper and turning it into something completely different. But little do people know that there is a mathematical aspect to it as well!`,
            form :'https://forms.gle/iW4jdF9bShVgjVGq5'
        },
        {
            post:E5,
            cont:`Greetings from BMSCE PENTAGRAM!

            “Life is a carnival, enjoy every ride🚲 with zeal.”
            What do you think of when you hear the word "Carnival"? For many people, the first thing that comes to mind is a celebration of fun and enjoyment.🎊
            `
        },
        {
            post:E6,
            cont:`Greetings from BMSCE Quiz Club!

            The BMSCE Quiz Club in collaboration with Pentagram on account of Simply Pi brings to you The Sur-Pi-ise quiz.
            `,
            form:'https://forms.gle/LyKJCCpv25D7KMgu8'
        },
        {
            post:E7,
            cont:`Greetings from Inksanity - The Literary and Debating Club of BMSCE!✨

            "Life is a mystery box, you never know what's inside unless you open it."
            
            On account of Simply π, INKSANITY in collaboration with PENTAGRAM, brings to you, "SIKE"- an exciting event to showcase your guessing and articulation skills. Do you have what it takes to identify the contents of the mystery box?`,
            form:'https://forms.gle/A1U4YUXH9DtMXyPQ8'
        },
        {
            post:E8,
            cont:`The encryption genie is out of the bottle.🧞‍♂️
            Do you have the key to Decrypt the genie🗝? 
            
            🚂The Train has arrived at the fest Simply-Pi. Enliven yourself while you encrypt and decrypt!
            
            Pentagram brings you an intriguing and stirring event,  Encipher 🕵️ which would keep you entertained and help you upgrade your cryptography skills.`,
            form:'https://forms.gle/c1YaPzFevJ9W73D97'
        }
        ];

  return (
      <>

    <div  className='home' id='home' style={{color:'white'}}>
    <div>
        <h1>Pentagram</h1>
        <p>The mathematical society</p>
        <p> of BMSCE</p>
    </div>
        <div className='logo'>
            <img src={Logo.src}/>
        </div>
    </div>

        <div className='events' id='events'>
            <h1>Events</h1>
            <div className='Evcards'>
                {k.map(c=>{return <EventCard image={c.post.src} cont={c.cont} form={c.form}/>})}

            </div>
        </div>
        <div className='events' id='about'>
            <h1>The Team</h1>
            <div className='Evcards'>
            {console.log(ab[1])}
            {ab.map(c=>{return <EventCard dis='none' image={c.post.default.src} desig={c.cont}/>})}
            </div>
        </div>
        <div className='contact' id='contact'>
        <h1>Contact:</h1>
        <br/>
        <p>Piyush Dubey</p>
        <p>President</p>
        <p>7209046690</p>
        <p>bmscepentagram@gmail.com</p>
        </div>
      </>
  )
}

export default Home