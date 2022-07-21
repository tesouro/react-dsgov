import React from "react";

const CustomTag = React.forwardRef<HTMLElement, any>(({ tagName, children, ...props }, ref) => {
    if(tagName) {
        return React.createElement(tagName, {...props, ref: ref}, children)
    } else {
        return <>{children}</>
    }
    
}); 

export default CustomTag;