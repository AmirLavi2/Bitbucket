angular.module('myApp').directive('items', () => {
    return {
        restrict: 'E',
        template: `
            <div ng-model="items">
                <div class="alert alert-danger" role="alert" ng-repeat="title in items" ng-click="viewRss(rss)">
                    <h4>{{title.title}} - {{title.pubDate}}</h4>
                    <span>{{title.content}}</span>
                </div>
            </div>
        `
    }
});

