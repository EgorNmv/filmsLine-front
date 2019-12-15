import {pathToRegexp, compile} from "path-to-regexp";

function UrlInstance(url) {
    this.url = url;
    this.toPath = compile(url);
    this.toRegexp = pathToRegexp(url);
}

export default {
    Home: new UrlInstance("/"),
    SignUp: new UrlInstance("/registration")
};
