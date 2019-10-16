import { isMainThread } from "worker_threads";

/**
 * @name app.ts
 * @author IDea Factory
 * @version 1.0.0
 * @abstract Entry point for app loading
 */

// Imports main.scss
import "./main.scss";

export class App {
    public constructor() {
        console.log('App works !');
    }
}

const app: App = new App();