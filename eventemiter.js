var util = require('util');

function Emitter() {
    this.events = {};
}

Emitter.prototype.on = function(type, listener) {
    this.events[type] = this.events[type] || [];
    if(util.isFunction(listener)){
        this.events[type].push(listener);
    } else {
        console.log('s% MUST be a Function', listener);
    }
}

Emitter.prototype.emit = function(...args) {
    let type = args[0];
    let data = args.length > 1 ? args.slice(1) : null;

    if(this.events[type]) {
        this.events[type].forEach(function(listener) {
            listener(...data);
        });
    }
}

module.exports = Emitter;