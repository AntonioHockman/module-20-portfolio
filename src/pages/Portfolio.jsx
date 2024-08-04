import Project from '../components/Project.jsx';
import projectData from '../utils/projectData.json';

export default function Portfolio() {
  return (
    <div>
      <h1>Porfolio</h1>
      <p>
        The following list are some of my past coding projects with images, links to the live sites and gitHub repositories. 
      </p>

      <div className='d-flex flex-wrap justify-content-center'>
        {projectData.map(project => (
        <Project project={project} key = {project.name}/>
      ))}
      </div>

      {/* <Project project={projectData[0]}/>
      <Project project={projectData[1]}/>
      <Project project={projectData[2]}/>
      <Project project={projectData[3]}/>
      <Project project={projectData[4]}/>
      <Project project={projectData[5]}/> */}


    </div>
  );
}

// i can learn how to map over project from activity 9-10 in module 20 but it also works this way as well, i added a css in assets to change size of images, i will attempt to render all of them later on, and will update sections as well to fit my needs. 
