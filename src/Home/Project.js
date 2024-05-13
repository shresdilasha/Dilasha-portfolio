import React, { useState, useEffect } from 'react';
// import db from './firebase-config';
// import { collection, getDocs } from 'firebase/firestore';

// const ProjectsList = () => {
//   const [projects, setProjects] = useState([]);

//   useEffect(() => {
//     const fetchProjects = async () => {
//       const projectsCollection = collection(db, 'Projects');
//       const projectSnapshot = await getDocs(projectsCollection);
//       const projectsList = projectSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
//       setProjects(projectsList);
//     };

//     fetchProjects();
//   }, [])

const ProjectsList = () => {
return (
  <div>
    <h1>Projects</h1>
    {/* {projects.map(project => (
        <div key={project.id}>
          <h2>{project.name}</h2>
          <p>{project.description}</p>
          {/* Display other fields as needed </div> */}
  </div>
);
};

export default ProjectsList;