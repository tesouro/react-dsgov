interface IMenuItem {
    label?: string,
    link?: string,
    submenu?: IMenuItem[]
    icon?: string
    divider?: boolean,
    expanded?: boolean
}

export default IMenuItem;