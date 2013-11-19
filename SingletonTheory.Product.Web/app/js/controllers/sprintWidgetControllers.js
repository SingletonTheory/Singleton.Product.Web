'use strict';

singletonProduct.controller('StoryController', 
    function StoryController($scope, storyData) {
        $scope.event = storyData.event;
        $scope.randomNumber = Math.random();
    }
);