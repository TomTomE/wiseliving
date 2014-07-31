var DashboardView = Backbone.View.extend({

    initialize: function () {
        this.category = new CategoryCollection();

        this.
        this.category.fetch({reset: true});
    },

    render: function () {
        this.category.fetch({reset: true});
        console.log(this.category);
        $(".ui-content").append(this.categoryView/*.render()*/.el);
        console.dir(this.el);
        return this;
    }

});
