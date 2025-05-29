import client from "./client.js";

// returns a promise that resolves to an array of all projects
// export default async function () {
//   try {
//     const response = await client.getEntries({
//       content_type: "project",
//     });
//   } catch (error) {
//     console.error(error);
//   }
// }

// export default async function () {
//   try {
//     const response = await client.getEntries({
//       content_type: "bio",
//       order: "sys.updatedAt",
//     });

//     // use the most recently updated "bio" entry
//     const mostRecentBio = response.items[response.items.length - 1].fields;

//     // extract link to CV
//     mostRecentBio.cv = mostRecentBio.cv.fields.file.url;

//     return mostRecentBio;
//   } catch (error) {
//     console.error(error);
//   }
// }
