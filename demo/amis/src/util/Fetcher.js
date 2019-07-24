import {message} from 'antd';

class Fetcher {
    constructor() {
        this.url = '';
        this.method = 'GET';
        this.params = {};
        this.body = {};
        this.header = {"Content-Type": "application/json"};

        this.handleHttpStatus = (data) => {
            if (data.status != 200) {
                return data.statusText;
            }
        }
        this.handleResponseCode = (data) => {
            if (data.code != 200) {
                message.error(data.message);
            }
        }
        this.handleResults = null;

        this.handleException = (error) => {
            message.error(error.message);
        }
    }

    withUrl(url) {
        this.url = url;
        return this;
    }

    withMethod(method) {
        this.method = method;
        return this;
    }

    withParams(params) {
        this.params = params;
        return this;
    }

    addParam(key, value) {
        this.params[key] = value;
        return this;
    }

    withBody(body) {
        Object.assign(this.body, body);
        return this;
    }

    addBody(key, value) {
        this.body[key] = value;
        return this;
    }

    withHeader(header) {
        Object.assign(this.header, header);
        return this;
    }

    addHeader(key, value) {
        this.header[key] = value;
        return this;
    }

    withHandleHttpStatus(method) {
        this.handleHttpStatus = method;
        return this;
    }

    withHandleResponse(method) {
        this.handleResponse = method;
        return this;
    }

    withHandleException(method) {
        this.handleException = method;
        return this;
    }

    withHandleResults(method) {
        this.handleResults = method;
        return this;
    }

    withDefaultHandleResults(key) {
        this.handleResults = (data) => {
            return data[key];
        }
        return this;
    }

    build() {
        return new Promise((resolve, reject) => {
            if (Object.keys(this.params).length != 0) {
                let paramsArray = []
                Object.keys(this.params).forEach(key => paramsArray.push(key + '=' + encodeURIComponent(this.params[key])))
                if (this.url.search(/\?/) === -1) {
                    this.url += '?' + paramsArray.join('&')
                } else {
                    this.url += '&' + paramsArray.join('&')
                }
            }

            fetch(this.url, {
                method: this.method,
                mode: "cors",
                credentials: 'same-origin',
                headers: this.header,
                body: JSON.stringify(Object.keys(this.params).length == 0 ? {} : this.body)
            })
                .then(res => {
                        let message = this.handleHttpStatus(res);
                        if (message) {
                            throw new Error(message);
                        }
                        return res.json()
                    }
                )
                .then((data) => {
                    this.handleResponseCode(data)
                    if (this.handleResults) {
                        resolve(this.handleResults(data))
                    } else {
                        resolve(data)
                    }
                })
                .catch((error) => {
                    if (this.handleException) {
                        this.handleException(error);
                    }
                    // return reject(error)
                });

        });
    }
}

export default Fetcher;
