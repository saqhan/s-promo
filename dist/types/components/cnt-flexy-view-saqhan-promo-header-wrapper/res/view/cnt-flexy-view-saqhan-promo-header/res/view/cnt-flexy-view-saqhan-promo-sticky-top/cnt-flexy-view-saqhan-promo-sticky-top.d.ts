import { ComponentInterface } from "../../../../../../../../stencil-public-runtime";
export declare class CntFlexyViewSaqhanPromoStickyTop implements ComponentInterface {
    /**
     * data for stickuTop
     * */
    navItems: any;
    /**
     * data for stickuTop
     * */
    socialLinks: any;
    /**
     *
     */
    mobileMenuTag: HTMLElement;
    /**
     * show hide bars
     * */
    isShowBar: boolean;
    /**
     *
     */
    menuTag: HTMLElement;
    render(): any;
    /**
     * for items sticky
     * */
    getItemSticky(array: any): any;
    /**
     * for items sticky
     * */
    getItemLinks(array: any): any;
    /**
     * Открытие и закрытие мобильного меню при нажатии на иконки
     */
    showMobileMenuHandler(): void;
}
