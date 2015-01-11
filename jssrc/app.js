// Place third party dependencies in the lib folder
//
// Configure loading modules from the lib directory,
// except 'app' ones,
requirejs.config({
    "baseUrl": "js/lib",
    "paths": {
        "app": "../app",
        "jquery": "//cdnjs.cloudflare.com/ajax/libs/jquery/1.8.3/jquery",
        "bootstrap": "//maxcdn.bootstrapcdn.com/bootstrap/3.2.0/js/bootstrap.min",
        "he": "//rhildred.github.io/to-markdown/bower_components/he/he",
        "to-markdown": "//rhildred.github.io/to-markdown/src/to-markdown",
        "autogrowtextarea": "//rhildred.github.io/editable/jssrc/lib/jquery.autogrowtextarea",
        "editor": "//rhildred.github.io/editable/jssrc/lib/jquery.editor"
    },
    shim: {
        "bootstrap": {
            "deps": ['jquery']
        },
        "autogrowtextarea": {
            "deps": ['jquery']
        },
        "editor": {
            "deps": ['jquery']
        },
        "he": {
            "deps": ['jquery']
        },
        "to-markdown": {
            "deps": ['he']
        }
    }
});

define(["jquery", "bootstrap"], function (jQuery) {
    jQuery.ajax({
        url: "CurrentUser"
    }).done(function (oUser) {
        jQuery("body").prepend('<a href="#" id="logout" style="float:right;padding-right:1em">logout</a>');
        jQuery("#logout").click(function () {
            jQuery.ajax({
                url: "logout",
                type: 'DELETE'
            }).done(function (oUser) {
                location.reload();
            });
        });
        /* This would normally be done if there is a current user


    requirejs(["editor"], function(){
        jQuery(".editable").editor();
    });*/
    });

    // doing it here so that we can see how this works
    requirejs(["editor"], function () {
        jQuery(".editable").editor();
    });
});
