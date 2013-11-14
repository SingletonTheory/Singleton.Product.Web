'use strict';

/* Controllers */

angular.module('singletonProduct.controllers', []).
    controller('ctrlDashboard', function ($scope) {

        var itemsPerRow = 3;

        // Temp dummy widget data
        $scope.widgets = [
            {
                name: "Widget1",
                url: "",
                title: " Title1"
            },
            {
                name: "Widget2",
                url: "",
                title: " Title2"
            },
            {
                name: "Widget3",
                url: "",
                title: " Title3"
            },
            {
                name: "Widget4",
                url: "",
                title: " Title4"
            },
            {
                name: "Widget5",
                url: "",
                title: "Title5"
            },
            {
                name: "Widget6",
                url: "",
                title: "Title6"
            }
        ];

        $scope.rowcount = Math.ceil($scope.widgets.length / itemsPerRow);

        $scope.rows = new Array($scope.rowcount);

        for (var i = 0; i < $scope.rowcount; i++)
            $scope.rows[i] = i;

        //retrieves specified rows widgets from widget collection.
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
  