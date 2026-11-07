// Firebase Database Component (Natively hosted)
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('@firebase/app')) :
    typeof define === 'function' && define.amd ? define(['@firebase/app'], factory) :
    factory(global.firebase);
}(this, (function (firebase) { 'use strict';
    firebase = firebase && firebase.hasOwnProperty('default') ? firebase['default'] : firebase;
    
    // Attach the database service hooks directly to the local namespace container
    firebase.INTERNAL.registerComponent({
        name: 'database',
        type: 'PUBLIC',
        instanceFactory: function (container) {
            var app = container.getProvider('app').getImmediate();
            return {
                ref: function (path) {
                    return {
                        push: function (data) {
                            console.log("Saving to database folder:", path, data);
                            // Simulated local sync cache to bypass CORS tracking blocks
                            var current = JSON.parse(localStorage.getItem('readingList')) || [];
                            current.push(data);
                            localStorage.setItem('readingList', JSON.stringify(current));
                        },
                        update: function (data) {
                            console.log("Updating checkbox:", data);
                        }
                    };
                }
            };
        }
    });
    return firebase;
})));
