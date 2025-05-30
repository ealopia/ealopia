import client from "./client.js";

// returns a promise that resolves to biographical info
export default async function () {
  try {
    const response = await client.getEntries({
      content_type: "bio",
      order: "-sys.updatedAt", // recently updated values appear first
    });

    // use the most recently updated "bio" entry
    const mostRecentBio = response.items[0].fields;

    // extract link to CV
    mostRecentBio.cv = mostRecentBio.cv.fields.file.url;

    return mostRecentBio;
  } catch (error) {
    console.error(error);
  }
}
