import client from "./client.js";

export async function loadBio() {
    return client.getEntries({content_type: 'bio'}).then(response => {
        console.log(response)
    })
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
