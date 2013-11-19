/// <reference path="../../partials/directives/sampleSprint.html" />
'use strict';
singletonProduct.directive('storyWidget', function ($compile) {
    return {
        link: function (scope, element, attrs) {
            scope.$watch('widget', function(widget) {
                if (widget) {
                    scope.widget = widget;
                }
            });
        },
        restrict: 'E',
        templateUrl: 'partials/directives/storyWidget.html'
    };
});
