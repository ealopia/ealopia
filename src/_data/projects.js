import client from "./client.js";

// TODO

/**
 * 
 * @returns a promise that resolves to project info categorized by project type
 * does not retrieve deeply nested description or image info
 * example return value:
{
  photography: [
    {
      title: 'A-Ma',
      url: 'a-ma',
      displayOrder: 1,
      completed: true,
      description: [Object],
      images: [Array]
    },
    {
      title: 'Masks',
      url: 'masks',
      displayOrder: 2,
      completed: false,
      description: [Object],
      images: [Array]
    },
  ],
  painting: [
    {
      title: 'test',
      url: 'bootyhole',
      displayOrder: 6,
      completed: false,
      description: [Object],
      images: [Array]
    }
  ]
}
 * 
 */
async function getAllProjects() {
  try {
    const response = await client.getEntries({
      content_type: "project",
      order: "fields.displayOrder",
    });

    const projects = { photography: [] }; // always list photo projects first

    response.items.forEach((project) => {
      //  extract project types from the list of current projects
      const category = project.metadata.concepts[0].sys.id;
      if (!Object.hasOwn(projects, category)) {
        projects[category] = [project.fields];
      } else {
        projects[category].push(project.fields);
      }
    });

    return projects;
  } catch (error) {
    console.error(error);
  }
}

export default async function () {
  getAllProjects();
}

// get array of all projects

// func: return project types -> use to generate nav & homepage headers

// func: return projects of a single type, along with URL slug, display order, and "completed" field -> use to generate nav & homepage headers

// func: return data for a single project -> use to generate project page
