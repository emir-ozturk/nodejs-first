class Response {
    constructor(data, message, status) {
        this.data = data;
        this.message = message;
        this.status = status;
    }

    static success(data, message, status) {
        return new Response(data, message, status || 200);
    }

    static error(message, status) {
        return new Response(null, message, status || 500);
    }
}

module.exports = Response;