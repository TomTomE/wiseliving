var DashboardView = Backbone.View.extend({

    el: "#dashboard",

    initialize: function () {
        this.category = new CategoryCollection();
        this.article = new ArticleCollection();

        this.listenTo(this.category, 'add', this.addOne);
        this.listenTo(this.category, 'reset', this.addAll);
        this.listenTo(this.category, 'all', this.render);

        this.category.fetch({reset: true});
    },

    render: function () {
        return this;
    },

    addOne: function (category) {
        var view = new CategoryView({model: category});
        this.$el.append(view.render().el);
    },

    addAll: function () {
        this.$el.html('');
        console.log(this);
        this.category.each(this.addOne, this);
    }

});
