#!/usr/bin/env node
const notifier = require('node-notifier');

const title = process.argv[2] || 'Pre-commit';
const message = process.argv[3] || 'Tests failed.';

try {
  notifier.notify({
    title,
    message,
    wait: false,
    timeout: 5
  });
} catch (_) {
  // Best effort; ignore
}


