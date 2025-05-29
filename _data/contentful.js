const contentful = require("contentful");
const client = contentful.createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
});

module.exports = async () => {
    return client.getEntries({content_type: 'project', order: 'fields.displayOrder'}).then(response => {
        console.log(response)
        const project = response.items.map(project => {
            return project.fields;
        });
        return project;
    }).catch(console.error);
}
