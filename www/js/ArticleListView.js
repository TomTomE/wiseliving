var ArticleListView = Backbone.View.extend({

    tagName:'ul',

    attributes: {
        "data-role": "listview",
        "id" : "listview"
    },

    events: {
        "click a": "test"
    },

    initialize:function () {
        console.log("Generate ArticleListView");
    },

    render:function () {
        //TODO 뷰 작업할것.
        this.$el.empty();
        this.$el.html("<li>HI</li>");
        return this;
    },

    test: function(e) {

    }

});