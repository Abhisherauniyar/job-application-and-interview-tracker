import { spawn } from 'child_process';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

console.log('====================================================');
console.log('🚀 Launching Apna Role Platform (Backend + Frontend)');
console.log('====================================================\n');

// 1. Launch Backend Server
const server = spawn('npm', ['start'], {
  cwd: path.join(__dirname, 'server'),
  stdio: 'inherit',
  shell: true,
});

server.on('error', (err) => {
  console.error('Failed to start server:', err);
});

// Wait 2 seconds for server to start, then launch client
setTimeout(() => {
  const client = spawn('npm', ['run', 'dev', '--', '--host'], {
    cwd: path.join(__dirname, 'client'),
    stdio: 'inherit',
    shell: true,
  });

  client.on('error', (err) => {
    console.error('Failed to start client:', err);
  });
}, 2000);
