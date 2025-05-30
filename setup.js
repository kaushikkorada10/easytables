const fs = require('fs');
const path = require('path');

const structure = {
  'index.html': '',
  'about.html': '',
  'README.md': '',
  assets: {
    css: {
      'style.css': '/* Main styles */',
      'about.css': '/* About page styles */',
    },
    js: {
      'main.js': '// Main script',
      'utils.js': '// Utility functions',
    },
    images: {},
    fonts: {},
  },
  components: {
    'header.html': '<!-- Header -->',
    'footer.html': '<!-- Footer -->',
  },
};

function createStructure(basePath, obj) {
  for (const name in obj) {
    const fullPath = path.join(basePath, name);
    if (typeof obj[name] === 'string') {
      fs.writeFileSync(fullPath, obj[name]);
      console.log(`✅ File created: ${fullPath}`);
    } else {
      if (!fs.existsSync(fullPath)) {
        fs.mkdirSync(fullPath);
        console.log(`📁 Folder created: ${fullPath}`);
      }
      createStructure(fullPath, obj[name]);
    }
  }
}

createStructure(process.cwd(), structure);
console.log('\n🎉 Project structure created successfully!');