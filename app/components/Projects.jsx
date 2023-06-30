import Link from "next/link";


const Projects = ({ projects }) => {
  
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