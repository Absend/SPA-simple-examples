"use strict";

function loadTemplate(selector, templateName, data) {
    let selectedItem = $(selector);
    let url = `./view/templates/${templateName}.html`;

    return new Promise((resolve, reject) => {
        $.get(url, (htmlTemplate) => {
            let compiledTemplate = Handlebars.compile(htmlTemplate);
            resolve(compiledTemplate);
        });
    }).then((compiledTemplate) => {
        return new Promise((resolve, reject) => {
            resolve(selectedItem.html(compiledTemplate(data)));
        });
    });
}

class View {
    homeView(selector) {
        loadTemplate(selector, "home");
    }

    pictureView(selector, data) {
        loadTemplate(selector, "picture", data);
    }

    profilesView(selector, data) {
        loadTemplate(selector, "profiles", data);
    }
}

let view = new View();
export {
    view
}