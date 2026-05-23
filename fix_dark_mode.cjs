const fs = require('fs');
const path = require('path');

function replaceInFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let original = content;
  
  // Backgrounds
  content = content.replace(/dark:bg-\[#0B1120\]/g, 'dark:bg-black');
  content = content.replace(/dark:bg-\[#060B14\]/g, 'dark:bg-black');
  content = content.replace(/dark:bg-slate-900(?!\/)/g, 'dark:bg-black');
  content = content.replace(/dark:bg-slate-900\/(\d+)/g, 'dark:bg-neutral-900/$1');
  content = content.replace(/dark:bg-slate-800(?!\/)/g, 'dark:bg-neutral-900');
  content = content.replace(/dark:bg-slate-800\/(\d+)/g, 'dark:bg-neutral-900/$1');
  content = content.replace(/dark:bg-slate-700(?!\/)/g, 'dark:bg-neutral-800');
  content = content.replace(/dark:bg-slate-700\/(\d+)/g, 'dark:bg-neutral-800/$1');
  
  // Borders
  content = content.replace(/dark:border-slate-800(?!\/)/g, 'dark:border-neutral-800');
  content = content.replace(/dark:border-slate-800\/(\d+)/g, 'dark:border-neutral-800/$1');
  content = content.replace(/dark:border-slate-700/g, 'dark:border-neutral-800');
  
  // Text
  content = content.replace(/dark:text-slate-200/g, 'dark:text-neutral-200');
  content = content.replace(/dark:text-slate-300/g, 'dark:text-neutral-300');
  content = content.replace(/dark:text-slate-400/g, 'dark:text-neutral-400');
  content = content.replace(/dark:text-slate-500/g, 'dark:text-neutral-500');
  
  // Hero Gradients and glows
  content = content.replace(/dark:bg-blue-600\/30/g, 'dark:bg-neutral-800/20');
  content = content.replace(/dark:bg-purple-600\/30/g, 'dark:bg-neutral-800/20');
  content = content.replace(/dark:mix-blend-normal/g, 'dark:mix-blend-screen');
  content = content.replace(/dark:from-blue-900\/40 dark:to-purple-900\/40/g, 'dark:bg-neutral-900');
  content = content.replace(/dark:text-blue-400/g, 'dark:text-neutral-300');
  content = content.replace(/dark:text-purple-400/g, 'dark:text-neutral-300');
  content = content.replace(/dark:text-emerald-400/g, 'dark:text-neutral-300');

  // Hover states
  content = content.replace(/dark:hover:bg-slate-800/g, 'dark:hover:bg-neutral-800');
  content = content.replace(/dark:hover:bg-slate-700/g, 'dark:hover:bg-neutral-800');
  content = content.replace(/dark:hover:bg-slate-100/g, 'dark:hover:bg-neutral-200');
  content = content.replace(/dark:hover:border-slate-600/g, 'dark:hover:border-neutral-700');
  
  content = content.replace(/dark:hover:text-accent-blue/g, 'dark:hover:text-white');
  content = content.replace(/dark:hover:border-blue-900/g, 'dark:hover:border-neutral-700');
  content = content.replace(/dark:hover:shadow-blue-500\/10/g, 'dark:hover:shadow-neutral-500\/10');

  // Focus
  content = content.replace(/dark:focus:ring-blue-900\/30/g, 'dark:focus:ring-neutral-700');
  
  // Specific scrollbar and other CSS changes
  content = content.replace(/dark:bg-slate-900/g, 'dark:bg-black');
  
  if (content !== original) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated ${filePath}`);
  }
}

function walkDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      walkDir(fullPath);
    } else if (fullPath.endsWith('.jsx') || fullPath.endsWith('.js') || fullPath.endsWith('.css')) {
      replaceInFile(fullPath);
    }
  }
}

walkDir('./src');
console.log('Done!');
