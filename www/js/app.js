/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
// We use an "Immediate Function" to initialize the application to avoid leaving anything behind in the global scope


(function () {

    DashboardView.prototype.template = Handlebars.compile($("#dashboard-tpl").html());
    ArticleListView.prototype.template = Handlebars.compile($("#articleList-tpl").html());
    //EmployeeView.prototype.template = Handlebars.compile($("#employee-tpl").html());

    /* ---------------------------------- Local Variables ---------------------------------- */
    var slider = new PageSlider($('body'));

    var dashboardView;

    var AppRouter = Backbone.Router.extend({

        routes: {
            "":                         "dashboard",
            "employees/:id":            "employeeDetails"
        },

        dashboard: function () {
            // Since the home view never changes, we instantiate it and render it only once
            if (!dashboardView) {
                console.log('New dashboard view');
                dashboardView = new DashboardView();
                dashboardView.render();
            } else {
                console.log('reusing dashboard view');
                dashboardView.delegateEvents(); // delegate events when the view is recycled
            }
            slider.slidePage(dashboardView.$el);
        },


        employeeDetails: function (id) {
//
//            var employee = new Employee({id: id});
//            employee.fetch({
//                success: function (data) {
//                    // Note that we could also 'recycle' the same instance of EmployeeFullView
//                    // instead of creating new instances
//                    slider.slidePage(new EmployeeView({model: data}).render().$el);
//                }
//            });
        }


    });

    var router = new AppRouter();
    Backbone.history.start();

    /* --------------------------------- Event Registration -------------------------------- */


    document.addEventListener('deviceready', function () {
        FastClick.attach(document.body);
        if (navigator.notification) { // Override default HTML alert with native dialog
            window.alert = function (message) {
                navigator.notification.alert(
                    message,    // message
                    null,       // callback
                    "Workshop", // title
                    'OK'        // buttonName
                );
            };
        }
    }, false);


    /*
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
    	console.log('t-deviceready');
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }

    */

    /* ---------------------------------- Local Functions ---------------------------------- */

}());