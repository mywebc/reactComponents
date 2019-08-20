import React from 'react'
import './importIcons.js'
import './icon.scss'
import classes from './helpers/classes'

interface IconProps extends React.SVGAttributes<SVGAElement>{
    name: string,
}

const Icon: React.FunctionComponent<IconProps> = (props) => {
    const {className, ...rest} = props
    return (
        <svg className={classes("gui-icon", className)} {...rest}>
            <use xlinkHref={`#${props.name}`}></use>
        </svg>
    )
}
export default Icon