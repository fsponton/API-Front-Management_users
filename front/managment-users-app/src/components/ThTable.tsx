interface Props {
    style: string,
    title: string
}


const ThTable = ({ style, title }: Props): JSX.Element => {
    return (<th className={style}>{title}</th>)
}
export default ThTable;