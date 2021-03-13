#!/usr/bin / env node
console.log('Helos');

// const fs = require("fs");


//   if (process.argv.length < 3) {
//     console.log("Please enter component name!");
//   } else {
//     const componentName = process.argv[2];
//     console.log(componentName);
//     const path = "./" + componentName + "/" + componentName;

//     fs.mkdir("./" + componentName, function (err) {
//       if (err) {
//         console.log(err.message);
//       } else {
//         fs.createReadStream("template/component.html").pipe(
//           fs.createWriteStream(path + ".html")
//         );

//         fs.createReadStream("template/component.scss").pipe(
//           fs.createWriteStream(path + ".scss")
//         );

//         fs.readFile("template/component.vue", "utf8", function (err, content) {
//           content = content.replace(/{componentName}/g, componentName);
//           content = content.replace(
//             "{componentNameUpperCase}",
//             componentName.charAt(0).toUpperCase() + componentName.slice(1)
//           );

//           fs.writeFile(path + ".vue", content, "utf8", function (err) {
//             if (err) {
//               console.log(err.message);
//             } else {
//               console.log("Component created!");
//             }
//           });
//         });
//       }
//     });
//   }



