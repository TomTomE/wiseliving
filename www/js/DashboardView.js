var DashboardView = Backbone.View.extend({

    initialize: function () {
        this.categoryListView = new CategoryListView();
    },

    render: function () {
        $(".ui-content").append(this.categoryListView.el);
        return this;
    }
});
