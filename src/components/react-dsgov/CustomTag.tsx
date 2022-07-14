import React from "react";

const CustomTag = React.forwardRef<HTMLElement, any>(({ tagName, children, ...props }, ref) => (
    React.createElement(tagName, {...props, ref: ref}, children)
)); 

export default CustomTag;