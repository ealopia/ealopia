import client from "./client.js";
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
import { INLINES } from "@contentful/rich-text-types";

/**
 * 
 * @returns a promise that resolves to project info
 * 
 * example return value:
 * 
[
  {
    title: 'United we Bargain, Divided we Beg',
    slug: 'united-we-bargain',
    displayOrder: 1,
    completed: false,
    description: '<p>In a time when fascism and authoritarianism are on the rise, labor unions stand as one of the last defenses for democracy, pushing back against exploitation. This project is a depiction of the power of collective action, the resilience of workers, and the urgency of this moment: when workers unite, they hold the power to shape a more just future.</p>',
    images: [
      ['//images.ctfassets.net/qmmpmfi998wd/7gjbIKtJnXDIKE46wqz6fA/61042eea40f05f3aa246f90c9d39592d/ilford_hp5_plus_01_16_2025_000211000006.jpg', '']
      ['//images.ctfassets.net/qmmpmfi998wd/7p1CktKclih76QpwIlP1W0/f60e69273bcb48cf5c81d8129a96ce87/ilford_hp5_plus_01_16_2025_000211000017.jpg', '']
      ['//images.ctfassets.net/qmmpmfi998wd/6JEPbmxgkK5lSgRlC9X7SD/e7714ba0ba6e74df85cab1f8d0ed1086/ilford_hp5_plus_01_16_2025_000211000008.jpg', '']
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
  [
    '//images.ctfassets.net/qmmpmfi998wd/1KvaSWusEJ9p7xVbOAtj4r/e5cb5d8fc2f33984995b8e050238586e/Screenshot_2024-10-04_at_5.52.19â__PM.png',
    'my ex drew this lol'
  ],
  [
    '//images.ctfassets.net/qmmpmfi998wd/3xtm0PHIBMHG8Jk96TNPvA/9b1af854268b0344a29feafced1457d9/Screenshot_2025-02-13_at_12.30.17â__PM.png',
    'i had a thought and now i must execute. testing captions really quickly'
  ]
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
        if ("description" in img.fields) {
          return [img.fields.file.url, img.fields.description];
        } else {
          return [img.fields.file.url, ""];
        }
      });
    });

    return projects;
  } catch (error) {
    console.error(error);
  }
}
