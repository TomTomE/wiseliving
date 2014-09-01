var CategoryListView = Backbone.View.extend({

    tagName:'ul',

    attributes: {
        "data-role": "listview",
        "id" : "listview"
    },

    events: {
        "click a": "test"
    },

    initialize:function () {
        console.log("Generate CategoryListView");
        this.collection = new CategoryCollection();
        var self = this;


        //TODO reset 리스너와 fetch함수 우선순서 상관 없는지 확인요망.  fetch함수가 render: 에 가야할지?? reset 리스너가 필요한지??

        this.collection.on("reset", this.render, this);

    },

    render:function () {
        this.$el.empty();
        this.$el.html(this.template(this.collection.toJSON()));
        return this;
    },

    test: function(e) {
        //TODO 클릭시 뷰 전환 작업할것.
        var categoryId = e.currentTarget.id;
        console.log(categoryId);
        this.dashBoard.currentView = "ArticleListView";
        this.dashBoard.render();
    }

});