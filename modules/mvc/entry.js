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

// Model.login(5267932, 2 | 8192)
Model.login(7565225, 2 | 8192)
    .then(() => {
        return Model.getUser({ name_case: 'gen' }).then(([me]) => {
            const header = document.querySelector('#header');
            header.innerHTML = View.render('header', me);
        });
    })
    .catch(e => {
        console.error(e);
        alert('Ошибка: ' + e.message);
    });