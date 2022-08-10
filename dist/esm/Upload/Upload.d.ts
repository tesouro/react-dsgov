import '@govbr-ds/core/dist/core.min.css';
import React from 'react';
import IMtProps from '../IMtProps';
export interface UploadProps extends React.HTMLAttributes<HTMLDivElement>, IMtProps {
    /** Label do upload */
    label: string;
    /** Se permite enviar múltiplos arquivos. */
    multiple?: boolean;
    /** Função pra tratar o upload do arquivo. */
    uploadTimeout: () => Promise<any>;
    /** Se está desabilitado */
    disabled?: boolean;
}
declare const Upload: React.ForwardRefExoticComponent<UploadProps & React.RefAttributes<HTMLDivElement>>;
export default Upload;
