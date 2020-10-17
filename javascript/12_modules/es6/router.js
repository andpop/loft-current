import Controller from './controller.js';

export default {
    handle(route) {
        const routeName= route + 'Route';
        Controller[routeName]();
    }
};

// задача - вызов методов контроллера (вызов action)
