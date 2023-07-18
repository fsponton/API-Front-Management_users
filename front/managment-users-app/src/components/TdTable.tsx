interface Props {
    style: string,
    info?: string,
    children?: any
}


const TdTable = ({ style, info, children }: Props): JSX.Element => {
    return (<td className={style}>
        {info}
        {children}
    </td>)
}
export default TdTable;