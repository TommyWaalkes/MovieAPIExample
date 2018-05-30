"use strict";
{
  angular
    .module("app")
    .config(($routeProvider) => {
      $routeProvider
        .when("/home", {
          template: "<home></home>"
        })
        .when("/movie", {
          template: "<movie></movie>"
        })
        .otherwise({ redirectTo: "/home" });
    });
}