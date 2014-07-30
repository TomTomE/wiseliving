var DashboardView = Backbone.View.extend({

    initialize: function () {
        this.category = new CategoryCollection();
        this.categorylistView = new CategoryListView({collection: this.category});
        console.dir(this.categorylistView);
    },

        render: function () {
            this.category.fetch({reset: true});
            console.log(this.category);
            $(".ui-content").append(this.categorylistView/*.render()*/.el);
            console.dir(this.el);
            return this;
    }

});