'use strict';

/* Controllers */

angular.module('singletonProduct.controllers', []).
    controller('dashboardCtrl', function ($scope) {

        var itemsPerRow = 3;

        // Temp dummy widget data - will retrieve the widget data via the authservice injected into the controller at a later stage.
        $scope.widgets = [
            {
                name: "Widget1",
                url: "",
                title: "Title1",
                type: "story-widget"
            },
            {
                name: "Widget2",
                url: "",
                title: "Title2",
                type: "story-widget"
            },
            {
                name: "Widget3",
                url: "",
                title: "Title3",
                type: "story-widget"
            },
            {
                name: "Widget4",
                url: "",
                title: "Title4",
                type: "story-widget"
            },
            {
                name: "Widget5",
                url: "",
                title: "Title5",
                type: "story-widget"
            },
            {
                name: "Widget6",
                url: "",
                title: "Title6",
                type: "story-widget"
            }
        ];

        //determine how many rows of widgets there should be.
        $scope.rowcount = Math.ceil($scope.widgets.length / itemsPerRow);

        $scope.rows = new Array($scope.rowcount);

        //create an array to iterate over with ng-repeat.
        for (var i = 0; i < $scope.rowcount; i++)
            $scope.rows[i] = i;

        //retrieves specified row widgets from widget collection.
        $scope.getNextWidgetRow = function (rownumber) {

            var rowWidgets = new Array();

            var windowStart = rownumber * itemsPerRow;
            var windowEnd = windowStart + itemsPerRow;
            
            if (windowEnd > $scope.widgets.length)
                windowEnd = $scope.widgets.length;

            var counter = 0;
            
            for (var j = windowStart; j < windowEnd; j++) {
                rowWidgets[counter] = $scope.widgets[j];
                counter++;
            }

            return rowWidgets;
        };
    });
  