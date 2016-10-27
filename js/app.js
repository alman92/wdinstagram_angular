let postsData = [
  { photo_url:"http://3.bp.blogspot.com/_FR4ANoG47P0/TSIE1THFskI/AAAAAAAAAYs/WBzPS26eLM0/s1600/z3.jpg", author: "LiLo", body: "Don't go back to this"}
]

angular
.module("WDInstagram", [
  "ui.router"
])
.config(["$stateProvider", RouterFunction ])

.controller("WDInstagramIndexController", [
  WDInstagramIndexControllerFunction
])
.controller("WDInstagramShowController", [
  WDinstagramShowControllerFunction
])

function RouterFunction($stateProvider){
  $stateProvider
    .state("WDInstagramIndex", {
      url: "/WDInstagram",
      templateUrl: "/js/ng-views/index.html",
      controller: "WDInstagramIndexController",
      controllerAs: "vm"
    })
    .state("WDInstagramShow", {
      url: "/WDInstagram/:id",
      templateUrl: "js/ng-views/show.html",
      controller: "WDInstagramShowController",
      controllerAs: "vm"
    })
}

function WDInstagramIndexControllerFunction(){
  this.posts = postsData
}

function WDinstagramShowControllerFunction(){
  this.update = function(){

  }
}
