import projects from "./projects.js";
import bio from "./bio.js";
import { marked } from "marked";

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
  bio: async (data) => {
    const response = await bio();
    response.longDescription = marked.parse(response.longDescription);
    return response;
  },
};
