var CategoryListView = Backbone.View.extend({

    tagName:'ul',

    attributes: {
        "data-role": "listview",
        "id" : "listview"
    },

    events: {
        "click a": "test"
    },

    initialize:function (options) {
        this.collection = new CategoryCollection();

        this.collection.fetch({reset: true});
        var self = this;
        this.collection.on("reset", this.render, this);
    },

    render:function () {
        this.$el.empty();
        this.$el.html(this.template(this.collection.toJSON()));
        return this;
    },

    test: function(e) {
        var categoryId = e.currentTarget.id;
        console.log(categoryId);

    }

});