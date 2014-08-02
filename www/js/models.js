var Article = Backbone.Model.extend({

    initialize:function () {
        console.log("Model Article generated");
    },

    urlRoot: "http://localhost:5000/articles"
});

var ArticleCollection = Backbone.Model.extend({

    initialize:function () {
        console.log("Model Article generated");
    },

    urlRoot: "http://localhost:5000/articles"
});


var Category = Backbone.Model.extend({

    initialize:function () {
        console.log("Model Category generated");
    },

    urlRoot: "http://localhost:5000/category"
});

var CategoryCollection = Backbone.Collection.extend({

    model: Category,

    initialize:function () {
        console.log("Model Category Collection generated");
    },

    url: "http://localhost:5000/category"

});
