import { StickyMenu } from './utilities/sticky-menu';
import { SmoothScroll } from './utilities/smooth-scroll';
import { ContactForm } from './contact-form/contact-form';
import { isMainThread } from "worker_threads";
import * as $ from 'jquery';
import 'bootstrap';
import { ParallaxModule } from './parallax/parallax-module';
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
        console.log('App works after document is ready !');
        const parallaxModule = new ParallaxModule('.js-parallax');

        // Contact form manager
        const contactForm: ContactForm = new ContactForm();

        // Enable smooth scroll to sections
        const scrolling: SmoothScroll = new SmoothScroll();

        // Enable Sticky Top Menu
        const stickyTopMenu: StickyMenu = new StickyMenu();
    }
}

$(document).ready(() => {
    const app: App = new App();
});
