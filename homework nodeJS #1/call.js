const emitter = require('./event');

module.exports.setEvent = (event, func) => {
    emitter.on(event, func)
};

module.exports.callEvent = (event) => {
    emitter.emit(event)
};

module.exports.removeEvent = (event, func) => {
    emitter.off(event, func)
};
