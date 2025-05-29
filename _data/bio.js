import client from "./client.js";

export default async function () {
  return client
    .getEntries({ content_type: "bio", order: "sys.updatedAt" })
    .then((response) => {
      console.log("wassup");
      console.log(response);
      const bios = response.items.map((bio) => {
        return bio.fields;
      });
      console.log(bios);
    });
}

// module.exports = async () => {
//     return client.getEntries({content_type: 'project', order: 'fields.displayOrder'}).then(response => {
//         console.log(response)
//         const project = response.items.map(project => {
//             return project.fields;
//         });
//         return project;
//     }).catch(console.error);
// }
