"use strict";
{
    let home = {
        template: `<h1> Welcome to my Movie Page </h1>
        <p>Please type in a movie to search for here:</p>
        <input ng-model="$ctrl.title" placeholder="Movie Title"/>  
        <button ng-click="$ctrl.getMovie()"> Grab a movie! </button>
        `,
        controller: function (movieService, $location) {
            let vm = this;
            vm.title = "";
            vm.getMovie = function () {
                vm.movie = movieService.searchMovies(vm.title)
                    .then(function () {
                        $location.path("/movie");
                    });
            }
        }
    };
    home.$inject = ["movieService", "$location"];
    angular
        .module("app")
        .component("home", home);
}