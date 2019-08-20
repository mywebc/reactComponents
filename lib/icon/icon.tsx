import * as React from "react";
import "./importicons";
import "./icon.scss";
import classes from "../helpers/classes";

interface IconProps extends React.SVGAttributes<SVGElement>{
    name: string;
}

const Icon: React.FunctionComponent<IconProps> = (props) => {
    const {className,
        name,
        ...restProps
    } = props
    return (
        <div className={"roue-icon-wrapper"}>
            {props.children}
            <svg  {...restProps}  className={classes('roue-icon', className)}  >
                <use xlinkHref={`#${name}`}/>
            </svg>
        </div>
    );
};

export default Icon