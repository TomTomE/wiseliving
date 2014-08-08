var DashboardView = Backbone.View.extend({
    "currentView": "",

    initialize: function () {
        this.categoryListView = new CategoryListView();
        this.articleListView = new ArticleListView();

        //TODO 리스트뷰 교체시 이전 뷰 지우고 새로 생성해서 할지 초기생성 후 교체만 할지??

        this.categoryListView.dashBoard = this;
        this.articleListView.dashBoard = this;

        this.currentView = "categoryListView";
    },

    render: function () {
        console.log("Rendering...");
        console.log("this.currentView: " + this.currentView);
        $(".ui-content").html("");
        if(this.currentView === "categoryListView") {
            console.log("categoryListView rendering");
            this.categoryListView.collection.fetch({reset: true});
            $(".ui-content").append(this.categoryListView.el);
        } else {
            console.log("ArticleListView rendering");
            $(".ui-content").append(this.articleListView.el);
        }

        return this;
    }
});
