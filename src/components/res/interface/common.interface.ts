

export interface HeaderStickyInterface {
    stickyTop: {id: string, name: string }[],
    headerTitle: string,
    headerBtnTitle: string,
    logoMain: string,
    socilaLinks: {
        name: string,
        class: string,
        links: string
    }[]
}

export interface AboutMeInterface {
    title:string,
    subTitle: string,
    aboutMe: {
        title: string,
        text: string,
    }
    img: string,
    contacts: {
        name: string,
        text: string,
        phone: string,
        email: string,
    },
    socilaLinks: {
        name: string,
        class: string,
        links: string
    }[]

}

export interface PortfolioInterface {
    portfolioCard: {
        id: number,
        title: string,
        linkGithub: string,
        linkApp: string,
        img: string,
        category: string,
    }[],
    categoriesPortfolio: {
        id: string,
        name: string
    }[]
}

export interface SkillsInterface {
    name: string,
    percent: number
}
