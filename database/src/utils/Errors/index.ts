export class UserError extends Error {
    code: number;
    constructor(message: string, code: number = 404) {
        super(message);
        this.name = 'userError'
        this.code = code;
    }
}