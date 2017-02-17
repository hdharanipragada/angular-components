(function() {
    'use strict';
    var app = angular.module('app');

    app.component('default', {
        // defines a two way binding in and out of the component
        bindings: {
            brand: '<'
        },
        // Load the template
        templateUrl: '../views/defaultComponent.html',
        controller: function() {
            var ctrl = this;
            ctrl.availableProducts = [
                {
                    "ProdName":"ABC",
                    "Imgsrc":"../images/transparent.gif",
                    "Type":"Beauty care"
                },{
                    "ProdName":"PQR",
                    "Imgsrc":"../images/transparent.gif",
                    "Type":"Beauty care"
                },{
                    "ProdName":"IJK",
                    "Imgsrc":"../images/transparent.gif",
                    "Type":"Beauty care"
                }
            ];
            ctrl.discounts = [{

            }]
            // A list of menus
        }
    });
})();
