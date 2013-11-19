'use strict';

angular.module('singletonProduct.directives', []).
    directive('stDashboardwidget', function($compile) {

        return {
            restrict: 'E',
            link: function($scope, element, attrs) {

                $scope.$watch('widget', function(widget) {
                    if (widget) {
                        var type = widget.type;
                        var title = widget.title;
                        var html = '<' + type + ' widget="' + widget + '" />';
                        var x = angular.element(html);
                        element.replaceWith(x);
                        $compile(x)($scope);
                    }
                });
            }
        };
    });