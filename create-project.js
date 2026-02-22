const fs = require("fs");
const path = require("path");

const projectName = process.argv[2];
if(!projectName){
    console.log("Plesase enter a project name");
}

const projectPath=path.join(process.cwd(),projectName);

if(fs.existsSync(projectPath)){
    console.log("Project already exists!!");
    process.exit(1);
}

fs.mkdirSync(projectPath,{ recursive: true });
console.log("Project folder created");

fs.mkdirSync(path.join(projectPath,"src"));
fs.mkdirSync(path.join(projectPath,"public"));
console.log("Sub folders created");

fs.writeFileSync(
    path.join(projectPath,"src","index.js"),
        `console.log("Hi");`
    );

fs.writeFileSync(
    path.join(projectPath,"README.md"),
        `# ${projectName}

        Project created with custom project generator.
        `); 

fs.writeFileSync(
    path.join(projectPath,"package.json"),    JSON.stringify({
    name:projectName,
    version:'1.0.0',
    main:'src/index.js'
  },
  null,
  2
));

console.log("Project setup Complete!!!");