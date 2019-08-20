import React from 'react'
import './importIcons.js'
import './icon.scss'
import classes from './helpers/classes'

interface IconProps extends React.SVGAttributes<any>{
    name: string,
}

const Icon: React.FunctionComponent<IconProps> = ({className, name , ...rest}) => {
    return (
        <svg className={classes("gui-icon", className)} {...rest}>
            <use xlinkHref={`#${name}`}></use>
        </svg>
    )
}
export default Icon