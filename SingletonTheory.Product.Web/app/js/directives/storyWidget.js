/// <reference path="../../partials/directives/sampleSprint.html" />
'use strict';
myApp.directive('storyWidget', function ($compile) {
    return {
        restrict: 'E',
        replace: true,
        templateUrl: 'partials/directives/storyWidget.html'
    }
});
