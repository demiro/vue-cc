#!/usr/bin/env node

const fs = require("fs");
const templatePath = __dirname + "/template";

if (process.argv.length < 3) {
  console.log("Please enter component name!");
} else {
  const componentName = process.argv[2];

  const path = "./src/components/" + componentName;

  fs.existsSync(path) || fs.mkdirSync(path);

  fs.createReadStream(`${templatePath}/component.html`).pipe(
    fs.createWriteStream(path + "/" + componentName + ".html")
  );

  fs.createReadStream(`${templatePath}/component.scss`).pipe(
    fs.createWriteStream(path + "/" + componentName + ".scss")
  );

  fs.readFile(`${templatePath}/component.vue`, "utf8", function (err, content) {
    content = content.replace(/{componentName}/g, componentName);
    content = content.replace(
      "{componentNameUpperCase}",
      componentName.charAt(0).toUpperCase() + componentName.slice(1)
    );

    fs.writeFile(
      path + "/" + componentName + ".vue",
      content,
      "utf8",
      function (err) {
        if (err) {
          console.log(err.message);
        } else {
          console.log("Component created!");
        }
      }
    );
  });
}
