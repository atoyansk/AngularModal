angular.module('modalDialog', [])
    .directive('myModal', function() {
      var ddo = {};

        ddo.restrict = "E";
        ddo.transclude = true;

        ddo.scope = {
            show: '='
        };

        ddo.link = function(scope, element, attrs) {
          scope.dialogStyle = {};
          if (attrs.width)
            scope.dialogStyle.width = attrs.width;
          if (attrs.height)
            scope.dialogStyle.height = attrs.height;
          scope.hideModal = function() {
            scope.show = false;
          };
        };

        ddo.templateUrl = 'js/directives/modal-dialog.html';

        return ddo;
});
