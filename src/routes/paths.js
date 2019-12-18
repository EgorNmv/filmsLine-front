import {pathToRegexp, compile} from "path-to-regexp";

function UrlInstance(url) {
    this.url = url;
    this.toPath = compile(url);
    this.toRegexp = pathToRegexp(url);
}

export default {
    Home: new UrlInstance("/"),
    SignUp: new UrlInstance("/registration"),
    Films: new UrlInstance("/films"),
    Producers: new UrlInstance("/producers"),
    CurrentProducer: new UrlInstance("/producers/:producer_id"),
    CurrentFilm: new UrlInstance("/films/:film_id"),
    Admin: new UrlInstance("/admin")
};
