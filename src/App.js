import React, { useState } from "react";
import "./style.css";

const App = ({ projectTypes }) => {
  const [availableProjects, setAvailableProjects] = useState(projectTypes);
  
  const handleResetForm = () => {
    console.log('handleResetForm -> projectTypes', projectTypes)
    setAvailableProjects(projectTypes);
  };
  
  const handleProjectClick = (project) => {
    setAvailableProjects(projects => {
      const selectedIndex = projects.findIndex((availableProject) => availableProject.id === project.id);
      const checkedProjects = [...projects];
      checkedProjects[selectedIndex].isChecked = !checkedProjects[selectedIndex].isChecked;
      return checkedProjects;
    })
  };
  
  return (
    <div>
      <button onClick={handleResetForm}>Reset</button>
      <div className="project-types">
        {
          availableProjects.map((project) => {
            return(
              <p
                key={project.id}
                style={{background: project.isChecked ? 'orange' : 'gray'}}
                className="project-types__type"
                onClick={()=> handleProjectClick(project)}>
                  {project.name}
              </p>
            );
          })
        }
      </div>
    </div>
  );
}
export default App;
