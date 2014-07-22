var Article = Backbone.Model.extend({

    initialize:function () {
        console.log("Model Article generated");
    },

    urlRoot: "http://localhost:5000/articles"
});


var ArticleCollection = Backbone.Collection.extend({

    initialize:function () {
        console.log("Model Article Collection generated");
    },

    url: "http://localhost:5000/articles"



});

