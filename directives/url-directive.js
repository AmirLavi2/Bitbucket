angular.module('myApp').directive('url', () => {
    return {
        restrict: 'E',
        template: `
            <div ng-model="arr">
                <button type="button" class="btn btn-success" ng-repeat="rss in arr" ng-click="viewRss(rss)" ng-dblclick="removeRss(rss)">
                    {{rss.feed.url}}
                </button>
            </div>`
    }
});