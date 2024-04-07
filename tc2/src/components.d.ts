/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface MyButton {
    }
    interface MyTestimonial {
        "altText": string;
        "description": string;
        "imagePosition": 'left' | 'right';
        "imageSrc": string;
        "name": string;
        "quote": string;
    }
}
declare global {
    interface HTMLMyButtonElement extends Components.MyButton, HTMLStencilElement {
    }
    var HTMLMyButtonElement: {
        prototype: HTMLMyButtonElement;
        new (): HTMLMyButtonElement;
    };
    interface HTMLMyTestimonialElement extends Components.MyTestimonial, HTMLStencilElement {
    }
    var HTMLMyTestimonialElement: {
        prototype: HTMLMyTestimonialElement;
        new (): HTMLMyTestimonialElement;
    };
    interface HTMLElementTagNameMap {
        "my-button": HTMLMyButtonElement;
        "my-testimonial": HTMLMyTestimonialElement;
    }
}
declare namespace LocalJSX {
    interface MyButton {
    }
    interface MyTestimonial {
        "altText"?: string;
        "description"?: string;
        "imagePosition"?: 'left' | 'right';
        "imageSrc"?: string;
        "name"?: string;
        "quote"?: string;
    }
    interface IntrinsicElements {
        "my-button": MyButton;
        "my-testimonial": MyTestimonial;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "my-button": LocalJSX.MyButton & JSXBase.HTMLAttributes<HTMLMyButtonElement>;
            "my-testimonial": LocalJSX.MyTestimonial & JSXBase.HTMLAttributes<HTMLMyTestimonialElement>;
        }
    }
}
