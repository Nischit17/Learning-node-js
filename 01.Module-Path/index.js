const path = require("path");

// Directory Name
console.log("DirectoryName", path.dirname(__dirname));

// File Name
console.log("FileName", path.basename(__filename));

// File Extension Name
console.log("FileExtension", path.extname(__filename));

// Join Path
const joinPath = path.join("/user", "documents", "node", "projects");
console.log("Joined path", joinPath);

// Resolve Path
const resolvePath = path.resolve("user", "documents", "node", "projects");
console.log("Resolve path", resolvePath);

// Normalize Path
const normalizePath = path.normalize("/user/documents/../node/projects");
console.log("NormalizePath", normalizePath);
