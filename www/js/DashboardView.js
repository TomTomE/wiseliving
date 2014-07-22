var DashboardView = Backbone.View.extend({

    initialize: function () {
        this.articles = new ArticleCollection();
        this.articlelistView = new ArticleListView({collection: this.articles});
        console.dir(this.articlelistView);
    },

    render: function () {
        this.articles.fetch({reset: true});
        this.$el.html(this.template());
        console.log(this.articles);
        $("[data-role='content']", this.el).append(this.articlelistView/*.render()*/.el);
        return this;
    }

});