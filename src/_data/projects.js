import client from "./client.js";

// TODO

/**
 * 
 * @returns a promise that resolves to project info
 * 
 * does not retrieve deeply nested description or image info
 * 
 * example return value:
[
  {
    title: 'A-Ma',
    slug: 'a-ma',
    displayOrder: 1,
    completed: true,
    description: { data: {}, content: [Array], nodeType: 'document' },
    images: [
      [Object], [Object], [Object],
      [Object], [Object], [Object],
    ],
    category: 'photography'
  },
  {
    title: 'Masks',
    slug: 'masks',
    displayOrder: 2,
    completed: false,
    description: { data: {}, content: [Array], nodeType: 'document' },
    images: [
      [Object], [Object], [Object],
    ],
    category: 'photography'
  },
  {
    title: 'test',
    slug: 'bootyhole',
    displayOrder: 6,
    completed: false,
    description: { data: {}, content: [Array], nodeType: 'document' },
    images: [ [Object] ],
    category: 'painting'
  }
]
 * 
 */
export default async function () {
  try {
    const response = await client.getEntries({
      content_type: "project",
      order: "fields.displayOrder",
    });

    const projects = response.items.map((project) => {
      const category = project.metadata.concepts[0].sys.id;
      return { ...project.fields, category: category };
    });

    return projects;
  } catch (error) {
    console.error(error);
  }
}

// get array of all projects

// func: return project types -> use to generate nav & homepage headers

// func: return projects of a single type, along with URL slug, display order, and "completed" field -> use to generate nav & homepage headers

// func: return data for a single project -> use to generate project page
