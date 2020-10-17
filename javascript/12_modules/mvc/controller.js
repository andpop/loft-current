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
