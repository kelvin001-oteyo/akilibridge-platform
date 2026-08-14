const fs = require('fs');
const path = require('path');

// Create logs directory if it doesn't exist
const logDir = path.join(__dirname, '../../logs');
if (!fs.existsSync(logDir)) {
  fs.mkdirSync(logDir, { recursive: true });
}

const logLevels = {
  INFO: 'INFO',
  WARN: 'WARN',
  ERROR: 'ERROR',
  DEBUG: 'DEBUG',
};

const log = (level, message, data = null) => {
  const timestamp = new Date().toISOString();
  const logEntry = {
    timestamp,
    level,
    message,
    ...(data && { data }),
  };

  // Console output
  const consoleMessage = `[${timestamp}] ${level}: ${message}`;
  if (level === logLevels.ERROR) {
    console.error(consoleMessage);
  } else if (level === logLevels.WARN) {
    console.warn(consoleMessage);
  } else {
    console.log(consoleMessage);
  }

  // File output
  try {
    const logFile = path.join(logDir, `${new Date().toISOString().split('T')[0]}.log`);
    fs.appendFileSync(logFile, JSON.stringify(logEntry) + '\n');
  } catch (err) {
    // Silently fail if file can't be written
  }
};

const logger = {
  info: (message, data) => log(logLevels.INFO, message, data),
  warn: (message, data) => log(logLevels.WARN, message, data),
  error: (message, data) => log(logLevels.ERROR, message, data),
  debug: (message, data) => log(logLevels.DEBUG, message, data),
};

module.exports = logger;