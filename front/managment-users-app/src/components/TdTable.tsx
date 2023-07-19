interface Props {
    style: string,
    info?: string,
    children?: any
}


const TdTable = ({ style, info, children }: Props): JSX.Element => {
    return (<td className={info === "No" ? `text-danger  ${style}` : info === "Yes" ? `text-success  ${style}` : `${style}`}>
        {info}
        {children}
    </td>)
}
export default TdTable;