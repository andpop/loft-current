const Controller = require('./controller.js');

module.exports = {
    handle(route) {
        const routeName= route + 'Route';
        Controller[routeName]();
    }
};

// задача - вызов методов контроллера (вызов action)
