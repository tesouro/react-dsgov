import classNames from "classnames";
import React, { useEffect, useRef } from "react";
import IMtProps from "../IMtProps";
import { useSpreadProps } from "../Util/useSpreadProps";
import { useMtProps } from "../Util/useMtProps";
import uniqueId from "lodash.uniqueid";

const core = require('@govbr-ds/core/dist/core-init');

interface UploadProps  extends React.HTMLAttributes<HTMLDivElement>, IMtProps {
    label: string,
    multiple?: boolean,
    uploadTimeout: () => Promise<any>
} 

const Upload = React.forwardRef<HTMLDivElement, UploadProps>(
    ({className, children, id = uniqueId("upload_____"), label, multiple = false, uploadTimeout, ...props}, ref) => {
        const mtProps = useMtProps(props);
        const spreadProps = useSpreadProps(props);

        const refElement = useRef(null);
        const refWrapper = useRef(ref);


        useEffect(() => {
            if(refWrapper.current && uploadTimeout && !refElement.current) {
                refElement.current = new core.BRUpload('br-upload', refWrapper.current, uploadTimeout)
            }            
        }, [uploadTimeout])

        return (
            <div
                ref={refWrapper}
                className={classNames(
                    "br-upload",
                    className,
                    ...mtProps
                )}
                {...spreadProps}
                
            >
                {label && <label className="upload-label" htmlFor={id}><span>{label}</span></label>}
                <input 
                    className="upload-input" 
                    id={id} 
                    type="file"
                    {...multiple && {multiple: "multiple"}}
                    {...spreadProps}
                />
                <div className="upload-list"></div>
                {children}
            </div>
        );
    }
) 

export default Upload;