import client from "./client.js";

// returns a promise that resolves to a url for the logo
export default async function () {
  try {
    const response = await client.getEntries({
      content_type: "logo",
      order: "sys.updatedAt",
    });

    // use the most recently updated "logo" entry
    const mostRecentLogo = response.items[response.items.length - 1].fields;
    const url = mostRecentLogo.image.fields.file.url;

    return url;
  } catch (error) {
    console.error(error);
  }
}
