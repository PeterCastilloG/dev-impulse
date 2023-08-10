export interface IOffersContentPage {
    title: string
    offers: Array<IOffer>
}
export interface IOffer {
    title: string
    main: string
    btn: string
    img: interImage
}

interface interImage {
    src: string
    alt: string
}