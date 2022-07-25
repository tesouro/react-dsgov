import classNames from 'classnames';
import React, { useEffect, useRef } from 'react';
import IMtProps from '../IMtProps';
import { useSpreadProps } from '../Util/useSpreadProps';
import { useMtProps } from '../Util/useMtProps';
import uniqueId from 'lodash.uniqueid';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const core = require('@govbr-ds/core/dist/core-init');

interface UploadProps  extends React.HTMLAttributes<HTMLDivElement>, IMtProps {
    /** Label do upload */
    label: string,
    /** Se permite enviar múltiplos arquivos. */
    multiple?: boolean,
    /** Função pra tratar o upload do arquivo. */
    uploadTimeout: () => Promise<any>
    /** Se está desabilitado */
    disabled?: boolean
} 

const Upload = React.forwardRef<HTMLDivElement, UploadProps>(
    ({className, children, id = uniqueId('upload_____'), label, multiple = false, disabled = false, uploadTimeout, ...props}, ref) => {
        const mtProps = useMtProps(props);
        const spreadProps = useSpreadProps(props);

        const refElement = useRef(null);
        const refWrapper = useRef(ref);


        useEffect(() => {
            if(refWrapper.current && uploadTimeout && !refElement.current) {
                refElement.current = new core.BRUpload('br-upload', refWrapper.current, uploadTimeout);
            }            
        }, [uploadTimeout]);

        return (
            <div
                ref={refWrapper}
                className={classNames(
                    'br-upload',
                    className,
                    ...mtProps
                )}
                {...disabled && {disabled: 'disabled'}}
                {...spreadProps}
                
            >
                {label && <label className="upload-label" htmlFor={id}><span>{label}</span></label>}
                <input 
                    className="upload-input" 
                    id={id} 
                    type="file"
                    {...multiple && {multiple: 'multiple'}}
                    {...spreadProps}
                />
                <div className="upload-list"></div>
                {children}
            </div>
        );
    }
); 

Upload.displayName = 'Upload';

export default Upload;