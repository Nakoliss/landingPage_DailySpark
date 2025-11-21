const { spawn, exec } = require('child_process');
const { platform } = require('os');
const path = require('path');

// Clear the terminal
process.stdout.write('\x1B[2J\x1B[0f');

console.log('🚀 Starting Next.js development server...\n');

// Start Next.js dev server
const nextDev = spawn('npx', ['next', 'dev', '-p', '3001'], {
  stdio: 'inherit',
  shell: true,
});

// Wait a bit for the server to start, then open Chrome in incognito
setTimeout(() => {
  const url = 'http://localhost:3001';
  
  if (platform() === 'win32') {
    // Windows: Use start command with chrome (works if Chrome is in PATH or registered)
    // Fallback to common installation paths
    const commands = [
      `start chrome --incognito "${url}"`,
      `start "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe" --incognito "${url}"`,
      `start "C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe" --incognito "${url}"`,
    ];
    
    const tryOpenChrome = (index = 0) => {
      if (index >= commands.length) {
        console.log('\n⚠️  Could not find Chrome. Please open http://localhost:3000 manually.\n');
        return;
      }
      
      exec(commands[index], (error) => {
        if (error && index < commands.length - 1) {
          tryOpenChrome(index + 1);
        } else if (!error) {
          console.log(`\n🌐 Opening Chrome in Incognito mode...\n`);
        } else {
          console.log('\n⚠️  Could not open Chrome. Please open http://localhost:3000 manually.\n');
        }
      });
    };
    
    tryOpenChrome();
  } else if (platform() === 'darwin') {
    // macOS: Use open command
    exec(`open -na "Google Chrome" --args --incognito "${url}"`, (error) => {
      if (error) {
        console.log('\n⚠️  Could not open Chrome. Please open http://localhost:3000 manually.\n');
      } else {
        console.log(`\n🌐 Opening Chrome in Incognito mode...\n`);
      }
    });
  } else {
    // Linux: Try google-chrome or chromium
    exec(`google-chrome --incognito "${url}" || chromium-browser --incognito "${url}" || xdg-open "${url}"`, (error) => {
      if (error) {
        console.log('\n⚠️  Could not open Chrome. Please open http://localhost:3000 manually.\n');
      } else {
        console.log(`\n🌐 Opening Chrome in Incognito mode...\n`);
      }
    });
  }
}, 3000); // Wait 3 seconds for server to start

// Handle process termination
process.on('SIGINT', () => {
  nextDev.kill();
  process.exit();
});

process.on('SIGTERM', () => {
  nextDev.kill();
  process.exit();
});

