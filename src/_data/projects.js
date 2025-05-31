import client from "./client.js";
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
import { INLINES } from "@contentful/rich-text-types";

/**
 * 
 * @returns a promise that resolves to project info
 * 
 * example return value:
[
  {
    title: 'United we Bargain, Divided we Beg',
    slug: 'united-we-bargain',
    displayOrder: 1,
    completed: false,
    description: '<p>In a time when fascism and authoritarianism are on the rise, labor unions stand as one of the last defenses for democracy, pushing back against exploitation. This project is a depiction of the power of collective action, the resilience of workers, and the urgency of this moment: when workers unite, they hold the power to shape a more just future.</p>',
    images: [
      '//images.ctfassets.net/qmmpmfi998wd/7gjbIKtJnXDIKE46wqz6fA/61042eea40f05f3aa246f90c9d39592d/ilford_hp5_plus_01_16_2025_000211000006.jpg',
      '//images.ctfassets.net/qmmpmfi998wd/7p1CktKclih76QpwIlP1W0/f60e69273bcb48cf5c81d8129a96ce87/ilford_hp5_plus_01_16_2025_000211000017.jpg',
      '//images.ctfassets.net/qmmpmfi998wd/6JEPbmxgkK5lSgRlC9X7SD/e7714ba0ba6e74df85cab1f8d0ed1086/ilford_hp5_plus_01_16_2025_000211000008.jpg',
      '//images.ctfassets.net/qmmpmfi998wd/5VUZFM52z436XYfT1MSGVs/974130a1ef588097da3886c680d2f6c1/ilford_hp5_plus_01_16_2025_000211000026.jpg',
      '//images.ctfassets.net/qmmpmfi998wd/7M7HshYcm4eBxcuB64oylk/76c1fb07194a7463caff578164c30da4/ilford_hp5_plus_01_16_2025_000211000022.jpg',
      '//images.ctfassets.net/qmmpmfi998wd/5Xt2jQYYAUKvSXgAOMgkK6/acc570d72434ce88e9d0def05d0cfe8d/ilford_hp5_plus_01_16_2025_000211000034.jpg',
      '//images.ctfassets.net/qmmpmfi998wd/4zebPNMBjtw4h8SvBhMh0A/a369c2354b785d3531cff5b7c2a4c535/ilford_hp5_plus_01_16_2025_000211000020.jpg',
      '//images.ctfassets.net/qmmpmfi998wd/7BpKRS2ZNrBBCvafnlyoK8/8d1bf5cc323f86738fbb810abaef4630/ilford_hp5_plus_01_16_2025_000211000007.jpg',
      '//images.ctfassets.net/qmmpmfi998wd/5iUR5G4GUGr2RJ6w5Lyhp5/9a42d3b5c45fbf6b03d8c7efd53d3017/ilford_hp5_plus_01_16_2025_000211000037.jpg'
    ],
    category: 'photography'
  },
  {
    title: 'test',
    slug: 'bootyhole',
    displayOrder: 2,
    completed: false,
    description: '<p>boo tay hole</p><p><b>this should be bold</b></p><p><i>this should be italicized</i></p><p><a href="///images.ctfassets.net/qmmpmfi998wd/2D0jGxcUTtIM8ptCcgbH7M/16a59f785af86106996d9b4e90e83a0e/e.png">link to asset</a></p><p><a href="https://www.cameronsworld.net/">external link</a></p>',
    images: [
      '//images.ctfassets.net/qmmpmfi998wd/2D0jGxcUTtIM8ptCcgbH7M/16a59f785af86106996d9b4e90e83a0e/e.png'
    ],
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

    // extract project categories
    const projects = response.items.map((project) => {
      const category = project.metadata.concepts[0].sys.id;
      return { ...project.fields, category: category };
    });

    // extract project descriptions and parse rich text
    const options = {
      preserveWhitespace: true,
      renderNode: {
        [INLINES.ASSET_HYPERLINK]: (node) => {
          return `<a href="/${node.data.target.fields.file.url}">${node.content[0].value}</a>`;
        },
      },
    };
    projects.forEach((project) => {
      project.description = documentToHtmlString(project.description, options);
    });

    // extract project image urls
    projects.forEach((project) => {
      project.images = project.images.map((img) => {
        return img.fields.file.url;
      });
    });

    return projects;
  } catch (error) {
    console.error(error);
  }
}

// TODO
// get array of all projects

// func: return project types -> use to generate nav & homepage headers

// func: return projects of a single type, along with URL slug, display order, and "completed" field -> use to generate nav & homepage headers

// func: return data for a single project -> use to generate project page
