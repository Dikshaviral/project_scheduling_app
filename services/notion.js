const dotenv = require('dotenv').config();
const {Client} = require('@notionhq/client');

const notion = new Client({
    auth: process.env.NOTION_TOKEN
});

const dbs_id = process.env.NOTION_DATABASE_ID;

module.exports = async function getSchedule(){
    const pl = {
        path: `databases/${dbs_id}/query`,
        method: 'POST'
    }
    const {results} = await notion.request(pl);
    
    const tasks = results.map((page)=> {
        //console.log(page.properties.Tags);

        const a = {
            id: page.id,
            title: page.properties.Name.title[0].text.content,
            date: page.properties.Date.date.start,
            brief: page.properties.Brief.rich_text[0].text.content ,
           tags: page.properties.Tags.rich_text[0].text.content,

            

        }
        return a;
    });

    return tasks;

    

}