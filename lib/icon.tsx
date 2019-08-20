import React from 'react'
import './importIcons.js'
import './icon.scss'


interface IconProps extends React.SVGAttributes<SVGAElement>{
    name: string,
}

const Icon: React.FunctionComponent<IconProps> = (props) => {
    return (
        <svg className="gui-icon" {...props}>
            <use xlinkHref={`#${props.name}`}></use>
        </svg>
    )
}
export default Icon