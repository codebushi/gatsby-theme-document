const fs = require("fs");

// Make sure the content directory exists
exports.onPreBootstrap = ({ reporter }) => {
  const contentPath = `content`;
  if (!fs.existsSync(contentPath)) {
    reporter.info(`creating the ${contentPath} directory`);
    fs.mkdirSync(contentPath);
  }
};
