var HomeView = function(store) {
 
 initialize: function() {
    var self = this;
    this.store = new MemoryStore(function() {
        $('body').html(new HomeView(self.store).render().el);
    });
}
	
	this.render = function() {
    this.el.html(HomeView.template());
    return this;
    };
	
	this.findByName = function() {
    store.findByName($('.search-key').val(), function(employees) {
        $('.employee-list').html(HomeView.liTemplate(employees));
        if (self.iscroll) {
            console.log('Refresh iScroll');
            self.iscroll.refresh();
        } else {
            console.log('New iScroll');
            self.iscroll = new iScroll($('.scroll', self.el)[0], {hScrollbar: false, vScrollbar: false });
        }
    });
};
};
 
    this.initialize();
 
}


HomeView.template = Handlebars.compile($("#home-tpl").html());
HomeView.liTemplate = Handlebars.compile($("#employee-li-tpl").html());


