/// <reference path="../../partials/directives/sampleSprint.html" />
'use strict';
singletonProduct.directive('storyWidget', function ($compile) {
    return {
        restrict: 'E',
        replace: true,
        templateUrl: 'partials/directives/storyWidget.html'
    }
});
