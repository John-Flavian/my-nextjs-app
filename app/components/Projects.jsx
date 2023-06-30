import Link from "next/link";


async function fetchProjects() {
  const response = await fetch('http://localhost:3000/api/projects');
  const projects = await response.json();
  return projects;
}

const Projects = async () => {
  const projects = await fetchProjects();
  return (
    <div className='courses'>
      {
        projects.map((project) => {
          return (
            <div key={project.id} className='card'>
              <h2>{project.title} </h2>
              <small>Side Project</small>
              <p>{project.desc[0]} </p>
              <Link href={project.url} target='_blank' className='btn'>
                View Live
              </Link>
            </div>
          )
        })
      }
    </div>
  )
}

export default Projects