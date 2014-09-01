/**
 * Created by E520 on 2014-09-01.
 */
var SideTabView = Backbone.View.extend({
    el: '#mypanel',

    initialize: function () {
        console.log(this.$el);
    },
    

    events: {
        "click #testInputButton": "testInputButton"
    },

    testInputButton: function(e) {
        var inputText = this.$("#testInputText").val(); // inputtext내의 텍스트
        alert(inputText);
    }
});
