angular.module('myApp').controller('MainCtrl', function ($scope, $http) {

    $scope.arr = {};
    let i = 0;


    $scope.addRss = () => {
        let rss = $scope.rss;
        
        $http.get(rss).then(
            (res) => {
                let rssJson = res.data;
                $scope.arr[i++] = rssJson;
            },
            (err) => {
                console.log(err);
        });
    };

    $scope.viewRss = (rss) => {
       $scope.items = rss.items;
    };

    $scope.removeRss = (rss) =>{
        for (let index in $scope.arr) {
            if(rss == $scope.arr[index]) delete $scope.arr[index];
        }
    }
});