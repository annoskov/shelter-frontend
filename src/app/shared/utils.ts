export class Utils {

    public static getStorage() {
        // TODO Waiting for "remember" checkbox
        return localStorage || sessionStorage;
    }
}
