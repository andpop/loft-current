(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
const Model = require('./model.js');
const View = require('./view.js');

module.exports = {
    async friendsRoute() {
        const results = document.querySelector('#results');
        const friends = await Model.getFriends({ fields: 'photo_100'});
        results.innerHTML = View.render('friends', {list: friends.items});
    },
    async newsRoute() {
        const results = document.querySelector('#results');
        const news = await Model.getNews({ filters: 'post', count: 20 });
        results.innerHTML = View.render('news', {list: news.items});
    },
    async videoRoute() {
        const results = document.querySelector('#results');
        const video = await Model.getVideos();
        results.innerHTML = View.render('video', {list: video.items});
    }
};

},{"./model.js":3,"./view.js":5}],2:[function(require,module,exports){
Handlebars.registerHelper('formatTime', time => {
    let minutes = (time / 60).toFixed();
    let seconds = time - minutes * 60;

    minutes = minutes.toString().length === 1 ? '0' + minutes : minutes;
    seconds = seconds.toString().length === 1 ? '0' + seconds : seconds;

    return minutes + ':' + seconds;
});

Handlebars.registerHelper('formatDate', ts => {
    return new Date(ts * 1000).toLocaleString();
});

const Model = require('./model.js');
const View = require('./view.js');
const Router = require('./router.js');

Model.login(7565225, 2 | 8192)
    .then(() => Model.getUser({ name_case: 'gen' }))
    .then(([me]) => {
            const header = document.querySelector('#header');
            header.innerHTML = View.render('header', me);

            document.addEventListener('click', e => {
                const {route} = e.target.dataset;

                if (route) {
                   Router.handle(route);
                }
            });
    })
    .catch(e => {
        console.error(e);
        alert('Ошибка: ' + e.message);
    });
},{"./model.js":3,"./router.js":4,"./view.js":5}],3:[function(require,module,exports){
module.exports = {
    login(appId, perms) {
        return new Promise((resolve, reject) => {
            VK.init({
                apiId: appId
            });

            VK.Auth.login(response => {
                if (response.session) {
                    resolve(response);
                } else {
                    reject(new Error('Не удалось авторизоваться'));
                }
            }, perms);
        });
    },
    callApi(method, params) {
        params.v = params.v || '5.78';

        return new Promise((resolve, reject) => {
            VK.api(method, params, response => {
                if (response.error) {
                    reject(new Error(response.error.error_msg));
                } else {
                    resolve(response.response);
                }
            });
        });
    },
    getUser(params = {}) {
        return this.callApi('users.get', params);
    },
    getFriends(params = {}) {
        return this.callApi('friends.get', params);
    },
    getNews(params = {}) {
        return this.callApi('newsfeed.get', params);
    },
    getVideo(params = {}) {
        return this.callApi('video.get', params);
    }
};

// задача - получение данных
},{}],4:[function(require,module,exports){
const Controller = require('./controller.js');

module.exports = {
    handle(route) {
        const routeName= route + 'Route';
        Controller[routeName]();
    }
};

// задача - вызов методов контроллера (вызов action)

},{"./controller.js":1}],5:[function(require,module,exports){
module.exports = {
    render(templateName,model) { // имя шаблона,данные
        templateName = templateName + 'Template';

        const templateElement = document.getElementById(templateName);
        const templateSource = templateElement.innerHTML;
        const renderFn = Handlebars.compile(templateSource);

        return renderFn(model);
    }
};

// задача - отображение данных
},{}]},{},[2]);
