"use strict";

function requester(url) {
    return new Promise((resolve, reject) => {
        $.getJSON(url, (data, err) => {
            resolve(data);
            reject(err);
        });
    });
}

class Data {
    constructor() {
        this.url = "./data/db.json";
    }

    getAll() {
        return requester(this.url);
    }
}

let data = new Data();
export {
    data
}