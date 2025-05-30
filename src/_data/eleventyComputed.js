import projects from "./projects.js";

export default {
  projects: async (data) => {
    return await projects();
  },
  categories: (data) => {
    const projectCategories = [];
    data.projects.forEach((project) => {
      if (!projectCategories.includes(project.category)) {
        projectCategories.push(project.category);
      }
    });
    return projectCategories;
  },
};
