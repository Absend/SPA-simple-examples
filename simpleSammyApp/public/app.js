"use strict";

import {
    control
} from "./control/control.js";

(function () {
    let router = Sammy(function () {

        this.get("#/", function () {
            this.redirect("#/home");
        });

        this.get("#/home", (context) => {
            control.home("#content");
        });

        this.get("#/picture", (context) => { 
            control.picture("#content");
        });

        this.get("#/profiles", (context) => {
            control.profiles("#content");
        });
    });

    $(function () {
       router.run("#/");
    });
})();