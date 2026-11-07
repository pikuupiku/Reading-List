// Firebase App Core Engine (Natively hosted)
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    (global = global || self, global.firebase = factory());
}(this, (function () { 'use strict';
    var Component = function (name, instanceFactory, type) {
        this.name = name;
        this.instanceFactory = instanceFactory;
        this.type = type;
    };
    var FirebaseApp = function (name, options) {
        this._name = name;
        this._options = Object.assign({}, options);
    };
    var FirebaseNamespace = function () {
        this.apps = new Map();
    };
    FirebaseNamespace.prototype.initializeApp = function (options, name) {
        var appName = name || '[DEFAULT]';
        var app = new FirebaseApp(appName, options);
        this.apps.set(appName, app);
        return app;
    };
    FirebaseNamespace.prototype.app = function (name) {
        var appName = name || '[DEFAULT]';
        return this.apps.get(appName);
    };
    var firebase = new FirebaseNamespace();
    return firebase;
})));
