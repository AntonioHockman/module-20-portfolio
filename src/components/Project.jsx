import *as projects from '../assets';
import '../assets/project.css'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

export default function Project ({
    project
}) {
    const {name,repo,link,description,image,stack} = project
    return (
        <Card style={{ width: '18rem', margin: '10px' }}>
          <Card.Img variant="top" src={projects[image]} />
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>
              {description}
            </Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            {stack.split(',').map(st => (
            <ListGroup.Item>{st}</ListGroup.Item>

            ))}

          </ListGroup>
          <Card.Body>
        
            <Card.Link href={repo}> 
           <i className="fab fa-github">Github!</i>
             </Card.Link>
            <br/>
            <Card.Link href={link}>Live Link for deployed site</Card.Link>
          </Card.Body>
        </Card>
      );

        // <div>
        //   <ul>
        //     <li>{name}</li>
        //     <li>{description}</li>
        //     </ul>
        //     <a href={repo}>
        //      <i className="fab fa-github"></i>
        //   </a>
        //   {/* by adding the i, and the class name it will render the github icon, i get the className from the font Awesome webpage */}
        //     <a href={link}>View my live site  here!</a>
        //     <img className= "images" src= {projects[image]}/>
        // </div>

}