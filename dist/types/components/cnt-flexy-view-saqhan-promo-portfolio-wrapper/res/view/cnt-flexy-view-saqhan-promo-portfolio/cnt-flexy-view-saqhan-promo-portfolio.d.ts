import { ComponentInterface } from "../../../../../stencil-public-runtime";
import { PortfolioInterface } from "../../../../res/interface/common.interface";
export declare class CntFlexyViewSaqhanPromoPortfolio implements ComponentInterface {
    payload: PortfolioInterface;
    portfolioCardState: {
        id: number;
        title: string;
        linkGithub: string;
        linkApp: string;
        img: string;
        category: string;
    }[];
    lastClickedCategory: PortfolioInterface;
    render(): any;
    /**
     * get a card
     * */
    getCard(array: any): any;
    /**
     * get category
     * */
    getCategories(array: any): any;
    filterCategoryPortfolioHandler(id: any): {
        id: number;
        title: string;
        linkGithub: string;
        linkApp: string;
        img: string;
        category: string;
    }[];
}
