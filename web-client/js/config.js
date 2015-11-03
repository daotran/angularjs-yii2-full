// =========================================================================
// CONFIGURATION ROUTE
// =========================================================================

'use strict';
angular.module('blankonConfig', [])

    // Setup global settings
    .factory('settings', ['$rootScope', function($rootScope) {
        //var baseURL = (window.location.href).replace(/^[^\/]+\/\/[^\/]+/,'').replace(/\/production\/admin\/.*$/,''), // Setting base url app
        var baseURL = 'http://localhost/angularjs-yii2-full/web-client', // Setting base url app
            settings = {
                baseURL                 : baseURL,
                pluginPath              : baseURL+'/assets/global/plugins/bower_components',
                globalImagePath         : baseURL+'/assets/global/img',
                frontendImagePath       : baseURL+'/assets/frontend/img',
                cssPath                 : baseURL+'/assets/frontend/css',
                dataPath                : baseURL+'/data'
        };
        $rootScope.settings = settings;
        return settings;
    }])

    // Configuration angular loading bar
    .config(function(cfpLoadingBarProvider) {
        cfpLoadingBarProvider.includeSpinner = true;
    })

    // Configuration event, debug and cache
    .config(['$ocLazyLoadProvider', function($ocLazyLoadProvider) {
        $ocLazyLoadProvider.config({
            events: true,
            debug: true,
            cache:false,
            cssFilesInsertBefore: 'ng_load_plugins_before',
            modules:[
                {
                    name: 'blankonApp.core.demo',
                    files: ['js/modules/core/demo.js']
                }
            ]
        });
    }])

    // Configuration ocLazyLoad with ui router
    .config(function($stateProvider, $locationProvider, $urlRouterProvider) {
        // Redirect any unmatched url
        $urlRouterProvider.otherwise('page-error-404');

        $stateProvider

            // =========================================================================
            // ERROR 400
            // =========================================================================
            .state('pageError403', {
                url: '/page-error-403',
                templateUrl: 'views/pages/page-error-403.html',
                data: {
                    pageTitle: 'ERROR 403',
                    pageHeader: {
                        icon: 'fa fa-ban',
                        title: 'Error 403',
                        subtitle: 'access is denied'
                    },
                    breadcrumbs: [
                        {title: 'Pages'},{title: 'Error 403'}
                    ]
                },
                resolve: {
                    deps: ['$ocLazyLoad', 'settings', function($ocLazyLoad, settings) {

                        var cssPath = settings.cssPath; // Create variable css path

                        return $ocLazyLoad.load( // You can lazy load files for an existing module
                            [
                                {
                                    insertBefore: '#load_css_before',
                                    files: [
                                        cssPath+'/pages/error-page.css'
                                    ]
                                }
                            ]
                        );
                    }]
                }
            })

            // =========================================================================
            // ERROR 404
            // =========================================================================
            .state('pageError404', {
                url: '/page-error-404',
                templateUrl: 'views/pages/page-error-404.html',
                data: {
                    pageTitle: 'ERROR 404',
                    pageHeader: {
                        icon: 'fa fa-ban',
                        title: 'Error 404',
                        subtitle: 'page not found'
                    },
                    breadcrumbs: [
                        {title: 'Pages'},{title: 'Error 404'}
                    ]
                },
                resolve: {
                    deps: ['$ocLazyLoad', 'settings', function($ocLazyLoad, settings) {

                        var cssPath = settings.cssPath; // Create variable css path

                        return $ocLazyLoad.load( // You can lazy load files for an existing module
                            [
                                {
                                    insertBefore: '#load_css_before',
                                    files: [
                                        cssPath+'/pages/error-page.css'
                                    ]
                                }
                            ]
                        );
                    }]
                }
            })

            // =========================================================================
            // ERROR 500
            // =========================================================================
            .state('pageError500', {
                url: '/page-error-500',
                templateUrl: 'views/pages/page-error-500.html',
                data: {
                    pageTitle: 'ERROR 500',
                    pageHeader: {
                        icon: 'fa fa-ban',
                        title: 'Error 500',
                        subtitle: 'internal server error'
                    },
                    breadcrumbs: [
                        {title: 'Pages'},{title: 'Error 500'}
                    ]
                },
                resolve: {
                    deps: ['$ocLazyLoad', 'settings', function($ocLazyLoad, settings) {

                        var cssPath = settings.cssPath; // Create variable css path

                        return $ocLazyLoad.load( // You can lazy load files for an existing module
                            [
                                {
                                    insertBefore: '#load_css_before',
                                    files: [
                                        cssPath+'/pages/error-page.css'
                                    ]
                                }
                            ]
                        );
                    }]
                }
            })

            // =========================================================================
            // FORM WIZARD
            // =========================================================================
            .state('formWizard', {
                url: '/form-wizard',
                templateUrl: 'views/forms/form-wizard.html',
                data: {
                    pageTitle: 'FORM WIZARD',
                    pageHeader: {
                        icon: 'fa fa-th-list',
                        title: 'Form Wizard',
                        subtitle: 'form wizard sample'
                    },
                    breadcrumbs: [
                        {title: 'Forms'},{title: 'Form Wizard'}
                    ]
                },
                resolve: {
                    deps: ['$ocLazyLoad', 'settings', function($ocLazyLoad, settings) {

                        var pluginPath = settings.pluginPath; // Create variable plugin path

                        return $ocLazyLoad.load( // You can lazy load files for an existing module
                            [
                                {
                                    name: 'blankonApp.forms.wizard',
                                    files: [
                                        pluginPath+'/jquery-validation/dist/jquery.validate.min.js',
                                        pluginPath+'/twitter-bootstrap-wizard/jquery.bootstrap.wizard.min.js',
                                        'js/modules/forms/wizard.js'
                                    ]
                                }
                            ]
                        );
                    }]
                }
            })            

    })

    // Init app run
    .run(["$rootScope", "settings", "$state", function($rootScope, settings, $state, $location) {
        $rootScope.$state = $state; // state to be accessed from view
        $rootScope.$location = $location; // location to be accessed from view
        $rootScope.settings = settings; // global settings to be accessed from view
    }]);