import *as projects from '../assets';
import '../assets/project.css'

export default function Project ({
    project
}) {
    const {name,repo,link,description,image} = project
    return(
        <div>
          <ul>
            <li>{name}</li>
            <li>{repo}</li>
            <li>{link}</li>
            <li>{description}</li>
            </ul>
            <img className= "images" src= {projects[image]}/>
        </div>
    )
}