'use strict';

angular.module('testApp')
  .factory('User', function ($resource) {
    return $resource('/api/users/:id', {
      id: '@id'
    }, { //parameters default
      update: {
        method: 'PUT',
        params: {}
      },
      get: {
        method: 'GET',
        params: {
          id:'me'
        }
      }/*,
      getArray: {
          method: 'GET',
          isArray:true,
          params: {
              id:'me'
          }
      }*/
	  });
  });
