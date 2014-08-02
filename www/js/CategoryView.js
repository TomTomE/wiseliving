var CategoryView = Backbone.View.extend({
    el: "",
    events: {
        "click li": "test"
    },

    initialize:function () {
        var self = this;
        this.model.on("change", this.render, this);
    },

    render:function () {
        this.$el.html(this.template(this.model.toJSON()));
        console.log(this.$el);
        return this;
    },

    test: function (e) {
        console.log(e.currentTarget.innerHTML);
    }


});