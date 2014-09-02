'use strict';

angular.module('testApp')
  .controller('StructureCtrl', function ($scope, User, $http) {

    $scope.finalId=0;


    $http.get('/api/structure').success(function(structure) {
        $scope.list = structure;
      });

        /*User.get(function(user){
         $scope.userId = user._id;
         //console.log($scope.userId);
         // HERE STUFF
         });*/

    $scope.update = function(){
    };

    $scope.saveList = function(){
        //console.log(JSON.stringify($scope.list));
        //console.log("saveList clicked!");

            $http.post('/api/structure', $scope.list).success(function() {
                //$scope.awesomeThings = postData;
                console.log('succesful post!');

              }).error(function(postData, status){
                console.log(postData);
                $scope.status = status;
                console.log(status);

              });

          };

    $scope.numOrdA = function (a, b){ return (a-b); };

    $scope.findId = function (scope){
        var ids = [];
        var decimal=1;
        //console.log(scope);
        if (typeof scope[0] !== 'undefined')
        {
          var n = scope[0]._id;
          var digit, digitCount= 0;
          do {
            digit = Math.floor(n % 10);
            n = Math.floor(n/10);
            digitCount++;
            if (digitCount > 1) {decimal=decimal*10;}
          } while (n > 0);
        }
        //console.log(digitCount);
        //console.log("Decimal:" + decimal);
        //console.log(scope);
        scope.forEach(function(node){//get the list of Ids
            if (decimal > 1) {//console.log("node id " + node.id);
              ids.push(node._id % 10);
            }
            else {ids.push(node._id);}
          });

        var tempFinalId = 0;
        ids.sort($scope.numOrdA);
        //console.log(ids);

        for (var i=0;i<ids.length;i++){//find the lowest free id
          if (ids[i] !== i+1){
            tempFinalId=i+1;
            break;
          }
        }
        if ( (tempFinalId==0) && (ids))
        {tempFinalId=ids.length+1;}

        //console.log("Final Id " + tempFinalId);
        return tempFinalId;
      };

    //function to add Category in tree
    $scope.addCategory = function (scope) {
        var nodeData = scope.$modelValue;
        //find the lowest ID not used, if any.
        var id = $scope.findId(nodeData);

        nodeData.push({
            _id: id,
            title: scope.category,
            items: [],
            __v :0
          });
        scope.category = '';
      };

    //$scope.removeCategory = function (index){
    //    $scope.categories.splice(index, 1);
    //};

    // add subtree
    $scope.newSubItem = function(scope) {
        //console.log(scope.$nodeScope.$modelValue);
        var nodeData = scope.$nodeScope.$modelValue;
        var id= $scope.findId(nodeData.items);

        nodeData.items.push({
            _id: nodeData._id * 10 + id,
            title: nodeData.title + '.' + (nodeData.items.length + 1),
            items: [],
            __v:0
          });
      };

    // **
    // ** Just some dummy data
    // **
        /*
    $scope.list= [
        {
            "id": 1,
            "title": "Nibbles",
            "items": []
        },
        {
            "id": 2,
            "title": "Mains",
            "items": []
        },
        {
            "id": 3,
            "title": "Dishes to share",
            "items": [
                {
                    "id": 31,
                    "title": "Meat",
                    "items": []
                },
                {
                    "id": 32,
                    "title": "Fish",
                    "items": []
                },
                {
                    "id": 33,
                    "title": "Vegetables",
                    "items": []
                }
            ]
        },
        {
            "id": 4,
            "title": "Sides",
            "items": []
        }
    ]
        */
  });



