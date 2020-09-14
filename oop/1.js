var Ticker	= function( interval ){
	var self	= this;
	setTimeout(function(){
        console.log('11111');
        self.trigger('tick', new Date());
        console.log('22222');
	}, 1000);
};

Ticker();

MicroEvent.mixin(Ticker);
var ticker = new Ticker();

ticker.bind('tick', function(date) {
	// display to check
	console.log('notified date', date);
});