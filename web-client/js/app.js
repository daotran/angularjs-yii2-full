/* ==========================================================================
 * Template: Blankon UI Theme
 * ---------------------------------------------------------------------------
 * Author: Dennis TRAN
 * Website: http://web-dn.com
 * Email: daotran210@gmail.com
 * ==========================================================================
*/

'use strict';

// adjust to the your url of web service
// add global JavaScript varable serviceBase that refers to your Yii 2.0 web service
// afterward, we will use a web service look like: http://localhost/angularjs-yii2-full/web-service/web/books
var serviceBase = 'http://localhost/angularjs-yii2-full/web-service/web/'

// =========================================================================
// BLANKON MODULE APP
// =========================================================================
angular.module('blankonApp', [
    'ui.router',
    'oc.lazyLoad',
    'angular-loading-bar',
    'ngSanitize',
    'ngAnimate',
    'blankonConfig',
    'blankonDirective',
    'blankonController'
]);