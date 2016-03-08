var soa = require('gt-soa');

var logger = soa.logger();
logger.configure({ tag: 'dispatcher', defname: 'dispatcher', debug: true });

logger.log({"neat": "message"});