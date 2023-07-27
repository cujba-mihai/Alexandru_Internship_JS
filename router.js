import '/pages/home.js'
import '/pages/pokemon.js'
import '/pages/not-found.js'

const WrappedElement = (element) => {
    document.getElementById('app').innerHTML = element;

    return element;
}

const routes = {
    '/': function() {
        return WrappedElement('<home-page></home-page>')
    },
    '/pokemon': function(id) {
        return WrappedElement(`<pokemon-page id=${id}></pokemon-page>`)
    },
    NotFound() {
       return WrappedElement('<not-found-page></not-found-page>')
    }
};

function router() {
    const url = location.pathname;

    if (url in routes) {
        routes[url]();
    } else {
        const splittedUrl = url.split('/');
        const page = '/' + splittedUrl[1];
        const id = splittedUrl[2];

        if (page in routes) {
            routes[page](id);
        } else {
            routes.NotFound();
        }
    }
}

window.addEventListener('hashchange', router);
window.addEventListener('load', router);
