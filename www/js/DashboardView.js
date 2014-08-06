var DashboardView = Backbone.View.extend({

    initialize: function () {
        this.categoryView = new CategoryView();
    },

    render: function () {
        $(".ui-content").append(this.categoryView.el);
        return this;
    }
});
