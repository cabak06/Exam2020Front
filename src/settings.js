
function URLS(){

    function backendURL() {
        const URL = "https://cahits.dk/Exam2020";
        return URL;
    }

    function externalApi() {
        const URL = "https://cahits.dk/Exam2020/api/xxx/";
        return URL;
    }

    return {
        backendURL,
        externalApi
    }

}

const settingUrl = URLS();

export default settingUrl;