/* eslint-disable no-unused-vars */
const { createLogger, format, transports } = require('winston');

const {
    combine, timestamp, simple, colorize,
} = format;

require('winston-daily-rotate-file');

const config = require('config');

const logLevel = config.get('main.logLevel.value');

const timezoned = () => new Date().toLocaleString('en-US', {
    timeZone: 'Asia/Kolkata',
});

const rotatingTransport = new (transports.DailyRotateFile)({
    filename: 'logs/BCG-Backend-%DATE%.log',
    datePattern: 'YYYY-MM-DD-HH',
    zippedArchive: true,
    maxSize: '20m',
    maxFiles: '14d',
});

const logger = createLogger({
    level: logLevel,
    format: format.combine(
        format.timestamp({ format: timezoned }),
        format.colorize(),
        format.json(),
    ),
    transports: [
        rotatingTransport,
    ],
});

logger.add(new transports.Console({
    level: logLevel,
    format: combine(timestamp({ format: timezoned }), colorize(), simple()),
}));

logger.info(`Logger initialized with level '${logLevel}'`);

module.exports = logger;
