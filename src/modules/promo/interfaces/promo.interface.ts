export interface IPromoContentPage {
    title: string
    main: string
    info: string
    input: {
        id: string
        placeholder: string
        required: boolean
        name: string
    }
}