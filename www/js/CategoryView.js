var CategoryView = Backbone.View.extend({

    tagName:'ul',

    attributes: {
        "data-role": "listview",
        "id" : "listview"
    },

    events: {
        "click li": "test"
    },

    initialize:function (options) {
        var self = this;
        this.collection.on("reset", this.render, this);
    },

    render:function () {
        console.log("Category list view render");
        this.$el.empty();
        console.log(this.collection.models);
        this.$el.html(this.template(this.collection.toJSON()));
        return this;

    },

    test: function (e) {
        console.log(e.currentTarget.innerHTML);
    }


});