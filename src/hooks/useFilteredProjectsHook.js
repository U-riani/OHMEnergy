import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const useFilteredProjectsHook = (radioValue) => {
  const projects = useSelector((state) => state.projects);
  const [filteredProjects, setFilteredProjects] = useState(
    projects.filter((project) => project.type === radioValue)
  );

  useEffect(() => {
    setFilteredProjects(
      projects.filter((project) => project.type === radioValue)
    );
  }, [radioValue, projects]);

  return filteredProjects;
};

export default useFilteredProjectsHook;
