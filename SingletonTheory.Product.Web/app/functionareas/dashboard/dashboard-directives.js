'use strict';

angular.module('singletonProduct.directives', []).
    directive('stDashboardwidget', function ($compile) {

        return {
            restrict: 'E',
            replace: true,
            template: '<span><{{widget.type}} /></span>',
            type: '=',
            link: function($scope, element, attrs) {
                attrs.$observe('type', function(value) {
                    angular.element.find('span').replaceWith('<' + value + ' />');
                });
            }
        };
    });