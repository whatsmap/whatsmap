import {API_BASE_URL} from "./api-config";

export function call(api, method, request) {
    const requestOptions = {
        headers: new Headers({
            "Content-Type": "application/json"
        }),
        url: API_BASE_URL + api,
        method: method,
    };
    if(request) {
        requestOptions.body = JSON.stringify(request);
    }
    return fetch(requestOptions.url, requestOptions).then((reponse) =>
        Response.json().then((json) => {
            if(!Response.ok) {
                return Promise.reject(json);
            }
            return json;
        })
    );
}
