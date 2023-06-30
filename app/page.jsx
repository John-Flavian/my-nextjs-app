'use client';
import { useState, useEffect } from 'react';
import Projects from './components/Projects';
import ProjectSearch from './components/ProjectSearch'
import Loading from './loading';

const HomePage = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      const res = await fetch('/api/projects');
      const data = await res.json();
      setProjects(data);
      setLoading(false);
    };

    fetchProjects();

  }, []);


  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <h1>Welcome to John Flavian</h1>
      <ProjectSearch getSearchResults={(results) => setProjects(results)} />
      <Projects projects={projects} />
    </>
  )
}

export default HomePage