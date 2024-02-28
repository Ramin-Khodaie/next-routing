export default class AuthRequired extends Error {
    constructor(message = "Auth is required to access this page") {
        super(message);
        this.name = "AuthRequiredError"
    }
};
