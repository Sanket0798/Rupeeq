import { env } from '../config/env';

/**
 * Logger utility for consistent logging across the application
 * Automatically disabled in production unless explicitly enabled
 */

const LOG_LEVELS = {
  ERROR: 'error',
  WARN: 'warn',
  INFO: 'info',
  DEBUG: 'debug',
};

class Logger {
  constructor() {
    this.enabled = env.isDevelopment;
  }

  _log(level, message, ...args) {
    if (!this.enabled && level !== LOG_LEVELS.ERROR) {
      return;
    }

    const timestamp = new Date().toISOString();
    const prefix = `[${timestamp}] [${level.toUpperCase()}]`;

    switch (level) {
      case LOG_LEVELS.ERROR:
        console.error(prefix, message, ...args);
        break;
      case LOG_LEVELS.WARN:
        console.warn(prefix, message, ...args);
        break;
      case LOG_LEVELS.INFO:
        console.info(prefix, message, ...args);
        break;
      case LOG_LEVELS.DEBUG:
        console.log(prefix, message, ...args);
        break;
      default:
        console.log(prefix, message, ...args);
    }
  }

  error(message, ...args) {
    this._log(LOG_LEVELS.ERROR, message, ...args);
  }

  warn(message, ...args) {
    this._log(LOG_LEVELS.WARN, message, ...args);
  }

  info(message, ...args) {
    this._log(LOG_LEVELS.INFO, message, ...args);
  }

  debug(message, ...args) {
    this._log(LOG_LEVELS.DEBUG, message, ...args);
  }

  enable() {
    this.enabled = true;
  }

  disable() {
    this.enabled = false;
  }
}

export const logger = new Logger();
export default logger;
