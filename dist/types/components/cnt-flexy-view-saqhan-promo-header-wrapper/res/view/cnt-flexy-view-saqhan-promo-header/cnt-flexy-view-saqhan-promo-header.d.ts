import { ComponentInterface } from "../../../../../stencil-public-runtime";
import { HeaderStickyInterface } from "../../../../res/interface/common.interface";
export declare class CntFlexyViewSaqhanPromoHeader implements ComponentInterface {
    /**
     * data for stickuTop€€
     * */
    categories: HeaderStickyInterface;
    /**
     * оверлей для молального окна
     * */
    overlay: HTMLElement;
    /**
     * кнопка отправить заявку
     * */
    sendBtn: HTMLElement;
    render(): any;
    showModal(): void;
    closeModal(): void;
}
