import '../App.css'
import headShot from '../assets/otherImages/headshot.JPG'

export default function About() {
  return (
    <div>
      <h1>About Page</h1>
      <br/>
    
      <img  className='headShot' width="250px" height="400px" src = {headShot} />
      
      <p>
      Welcome to my portfolio website! I'm please to anounce that i am graduating August 19th from Vanderbuilt's Full Stack Coding Bootcamp! I'm taking all request, have a look around and see some of my work first hand, the next website i make could be yours!
      </p>
    </div>
  );
}
