const fs = require("fs-extra");

try {
  fs.copySync("src/public/favicon.ico", "dist/public/favicon.ico");
  fs.copySync("src/public/styles.css", "dist/public/styles.css");
  fs.copySync("src/public/grayarrow.gif", "dist/public/grayarrow.gif");
  fs.copySync("../node_modules/react-linechart/dist/styles.css", "dist/public/react-linechart-styles.css");

  console.log("######## static assets copy: OK ########");
} catch (err) {
  console.error("######## static assets copy: ERROR ########", err.message);
}
