import { createClient } from "contentful";

export default createClient({
    space: "dexlpso1gdyc", 
    accessToken: "EfNmKjuIcxHdQzkIhbacICJqxKlGR6LVmkL6Gv6C49I"
});


//////////////Forrrrrrrrrrrrr Context.js///////////////
// import Client from '../Contentful'

//Testing
// Client.getEntries({
//     content_type: "reactBeachResort"
// }).then(response => console.log(response.items));

//////Real Project//////
// //getData
// const getData = async () => {
//     try{
//         let response = await Client.getEntries({
//             content_type: "reactBeachResort",
//             order: "sys.createdAt"
//         })
//         console.log(response)
//     } catch (error) {
//         console.log(error);
//     }
// }

// useEffect(() => {
//     getData() 
//  }, [])