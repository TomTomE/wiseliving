var ArticleListView = Backbone.View.extend({

    tagName:'ul',

    attributes: {
        "data-role": "listview",
        "id" : "listview"
    },

    initialize:function (options) {
        var self = this;
        this.collection.on("reset", this.render, this);
    },

    render:function () {
        console.log("Article list view render");
        this.$el.empty();
        console.log(this.collection.models);
        this.$el.html(this.template(this.collection.toJSON()));
        return this;
    }
});