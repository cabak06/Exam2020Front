
function URLS(){

    function backendURL() {
        const URL = "http://localhost:8080/startcode";
        return URL;
    }

    function externalApi() {
        const URL = "http://localhost:8080/startcode/api/info/external";
        return URL;
    }

    function movieInfoApi(title) {
        const URL = "http://localhost:8080/startcode/api/movie-info/" + title;
        return URL;
    }

    function movieInfoApiAll(title) {
        const URL = "http://localhost:8080/startcode/api/movie-info-all-ratings/" + title;
        return URL;
    }

    return {
        backendURL,
        externalApi,
        movieInfoApi,
        movieInfoApiAll
    }

}

const settingUrl = URLS();

export default settingUrl;