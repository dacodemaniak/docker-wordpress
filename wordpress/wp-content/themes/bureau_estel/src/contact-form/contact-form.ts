import * as $ from 'jquery';

export class ContactForm {
    private requiredFields: Map<string, any>;
    private form: JQuery;
    private button: JQuery;

    public constructor() {
        this.requiredFields = (new Map<string, any>())
            .set('your-name', $('#name'))
            .set('your-email', $('#email'));

        this.form = $('form.wpcf7-form');

        this.button = $('#send');

        this._setListeners();
    }

    private _setListeners(): void {
        this.form.on(
            'keyup',
            (event: any): void => this._checkForm(event)
        );

        [].forEach.call(
            document.querySelectorAll('.form-control'),
            (element: any) => {
                element.onblur = () => {
                    this._errorHandler(element)
                }
                element.onfocus = () => {
                    this._resetHandler(element);
                }
            }
        );
    }

    private _checkForm(event: any): void {
        let isFormValid: boolean = true;

        this.requiredFields.forEach((element: JQuery, key: string) => {
            if (element.val().toString().trim().length === 0) {
                isFormValid = false;
            } else {
                if (key === 'your-email') {
                    isFormValid = this._emailPattern(element.val().toString().trim());
                }
            }
        });

        if (isFormValid) {
            this.button.removeAttr('disabled');
        } else {
            this.button.attr('disabled', 'disabled');
        }
    }

    private _errorHandler(element: any): void {
        const jqueryElement: JQuery = $(element);
        let errorDiv: JQuery;
        let specialDiv: JQuery;

        if (jqueryElement.val().toString().trim().length === 0) {
            specialDiv = $('div.' + jqueryElement.attr('id') + '-empty');
            specialDiv.removeClass('hidden');

            errorDiv = $('div.' + jqueryElement.attr('id') + '-has-error');
            errorDiv.removeClass('hidden');
        } else {
            if (jqueryElement.attr('id') === 'email') {
                if (!this._emailPattern(jqueryElement.val().toString().trim())) {
                    errorDiv = $('div.' + jqueryElement.attr('id') + '-has-error');
                    errorDiv.removeClass('hidden');
                    specialDiv = $('div.' + jqueryElement.attr('id') + '-invalid');
                    specialDiv.removeClass('hidden');
                }
            }
        }
    }

    private _resetHandler(element: any): void {
        const jqueryElement: JQuery = $(element);
        const errorDiv: JQuery = $('div.' + jqueryElement.attr('id') + '-has-error');
        errorDiv.addClass('hidden');
    }

    private _emailPattern(value: string): boolean {
        let regExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return regExp.test(value);
    }
}