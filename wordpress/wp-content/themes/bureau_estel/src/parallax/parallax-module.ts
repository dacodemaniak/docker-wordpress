import Backpax from 'backpax';

export class ParallaxModule {
    public constructor(cssClass: string) {
        new Backpax(cssClass);
        console.log('Parallax module is ready');
    }
}