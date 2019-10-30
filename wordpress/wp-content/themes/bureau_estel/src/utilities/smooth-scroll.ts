import * as $ from 'jquery';

export class SmoothScroll {
    public constructor() {
        $('a').on(
            'click',
            (event: any): void => this._scrollTo(event)
        );
    }

    private _scrollTo(event: any): void {
        const link: JQuery = $(event.target);
        const hash: string = link.attr('href');

        if (hash.substr(0, 1) === '#') {
            event.preventDefault();

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, () => {
                window.location.hash = hash;
            });
        }
    }
}