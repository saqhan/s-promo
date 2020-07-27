

export interface HeaderStickyInterface {
    stickyTop: {id: string, name: string }[],
    headerTitle: string,
    headerBtnTitle: string,
    logoMain: string,
}

export interface AboutMe {
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
    }

}

export interface Portfolio {
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

export interface Skils {
    name: string,
    percent: number
}
