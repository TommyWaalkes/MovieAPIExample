"use strict";
{
    function movieService($http) {
        let data = {
            title: "Tommy Boi",
            length: "2 hours"
        }
        let details = {};

        let APIKey = "a53a6bc42972a9ac76757aa3b5089827";
        //Give me data
        const getData = function () {
            return data;
        };
        //Update data 
        const setData = function (newData) {
            data = newData;
        };

        const searchMovies = function (title) {
            let url = `https://api.themoviedb.org/3/search/movie?api_key=${APIKey}&query=${title}`;
            console.log(url);
            return $http.get(url).then(function (response) {
                console.log(response.data.results);
                //console.log(response.data.results[0]);
                setData(response.data.results);
            });
        };

        const getMovieDetail = function (movieId) {
            let url = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${APIKey}`;
            return $http.get(url).then(function (response) {
                console.log(response);

            });

            const getDetails = function () {
                return details;
            }

            const setDetails = function (d) {
                let details = d;
            }

        }

        return {
            getData,
            setData,
            searchMovies
        };
    }
    angular
        .module("app")
        .factory("movieService", movieService)
}