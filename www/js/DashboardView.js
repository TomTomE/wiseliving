var DashboardView = Backbone.View.extend({

    initialize: function () {
        this.articles = new ArticleCollection();
        this.articlelistView = new ArticleListView({collection: this.articles});
        console.dir(this.articlelistView);
    },

    render: function () {
        this.articles.fetch({reset: true});
        console.log(this.articles);
        $(".ui-content").append(this.articlelistView/*.render()*/.el);
        console.dir(this.el);
        return this;
    }

});