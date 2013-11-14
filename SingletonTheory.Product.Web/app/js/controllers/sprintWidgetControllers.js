'use strict';

myApp.controller('StoryController',
    function StoryController($scope, storyData) {
        $scope.event = storyData.event;
    }
);