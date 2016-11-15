"use strict";

import {
    data 
} from "../data/data.js";

import {
    view
} from "../view/view.js";

class Control {
    constructor() {
        this.data = data.getAll();
    }

    home(selector) {
        return view.homeView(selector);
    }

    picture(selector) {
        this.data
            .then(function (value) {
                let data = value.db[0];
                return view.pictureView(selector, data);
            });
    }

    profiles(selector) {
        this.data
            .then(function (value) {
                let data = value.db[0];
                return view.profilesView(selector, data);
            });
    }
}

let control = new Control();
export {
    control
}