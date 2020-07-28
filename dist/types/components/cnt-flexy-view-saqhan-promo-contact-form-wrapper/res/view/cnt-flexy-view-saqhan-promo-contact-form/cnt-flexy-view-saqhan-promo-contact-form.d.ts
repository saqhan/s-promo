import { ComponentInterface } from "../../../../../stencil-public-runtime";
import { contactFormInterface } from "../../../../res/interface/common.interface";
export declare class CntFlexyViewSaqhanPromoContactForm implements ComponentInterface {
    payload: contactFormInterface;
    /**
     *
     * */
    phoneInput: any;
    /**
     *
     * */
    nameInput: any;
    /**
     *
     * */
    hideBlock: any;
    render(): any;
    sendMessageHandler(e: any): void;
    sendMessage(): void;
    checkInput(check: any): void;
}
