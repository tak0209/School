'use strict';
app.controller('moviesController', function ($scope, es, esFactory) {
    $scope.Movies = [];
    es.search({
        index: 'movies',
        size: 50,
        body: {
            "query":
                {
                    "match_all": {
                    }
                }
        }
    }).then(function (results) {
        angular.forEach(results.hits.hits, function (object, key) {
            $scope.Movies.push(object._source);
        });
    }, function (error) {
        var er = error;
    });
});


/* search title
{
        index: 'movies',
        size: 50,
        body: {
            "query":
                {
                    "match": {
                        "title":"kill"
                    }
                }
        }
}
*/