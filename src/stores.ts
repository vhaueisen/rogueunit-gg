// import { readable } from 'svelte/store';

// type json = {
//     [key: string]: any
// }

// export const data = readable<json>({}, function start(set) {
//     console.log("Fetching data...");
//     fetch("data.json").then(async (response) => {
//         console.log("Response status: " + response.status);
//         if (response.status === 200) {
//             let data = response.json();
//             console.log("Data fetched: " + JSON.stringify(data));
//             set(data);
//         }
//         set(data);
//     }).catch((error) => {
//         console.error("Error fetching data: " + error);
//     });
// });
