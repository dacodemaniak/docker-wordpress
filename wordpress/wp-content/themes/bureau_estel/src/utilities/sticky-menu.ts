import * as $ from 'jquery';

export class StickyMenu {
    private menu: HTMLElement;
    private stickyTop: number;

    public constructor() {
        this.menu = document.getElementById('sticky-top-menu');
        this.stickyTop = this.menu.offsetTop;

        $(window).on(
            'scroll',
            (event: any): void => this._handler(event)
        );
    }

    private _handler(event: any): void {
        if (window.pageYOffset >= (this.stickyTop * 5)) {
            this.menu.classList.add('sticky')
        } else {
            this.menu.classList.remove('sticky');
        }
    }    
}