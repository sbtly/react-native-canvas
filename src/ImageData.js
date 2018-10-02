import {webviewConstructor, webviewProperties} from './webview-binders';

@webviewProperties({
    data: null,
    height: 100,
    width: 100
})
@webviewConstructor('ImageData')

export default class ImageData {
    constructor(array, width, height, canvas) {
        if (!(canvas instanceof Canvas)) {
            throw new Error('Image must be initialized with a Canvas instance');
        }

        this.canvas = canvas;

        if (this.onConstruction) {
            // this.onConstruction(array, width, height);
            this.onConstruction();
        }
        // if (this.width) {
        //     this.width = width;
        // }
        // if (this.height) {
        //     this.height = height;
        // }
    }

    // postMessage = message => {
    //     if (this.canvas)
    //         return this.canvas.postMessage(message);
    // };

    // addMessageListener = listener => {
    //     if (this.canvas)
    //         return this.canvas.addMessageListener(listener);
    // };

    postMessage = message => {
        return this.canvas.postMessage(message);
    };

    addMessageListener = listener => {
        return this.canvas.addMessageListener(listener);
    };
}