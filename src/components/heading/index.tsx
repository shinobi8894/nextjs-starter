import { ReactNode } from "react";
import StyledHeading from "./heading.style"

interface HeadingProps {
    level?:number;
    children?:ReactNode;
    [key: string]: any;
}

export default function Heading ({ level=3, children, ...rest }: HeadingProps) {
    return(
        <StyledHeading $level={level} as={`h${level}`} {...rest}>
            {
                children
            }
        </StyledHeading>
    )
}