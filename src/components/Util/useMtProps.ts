import { listMtProps } from './Util';

export const useMtProps = (props : any) => {
    let mtProps : any[] = [];
    for (const element of listMtProps) {
        if(typeof props[element] === 'boolean' && props[element]) {
            mtProps = [...mtProps, (element)];
        } else {
            mtProps = [...mtProps, (props[element] && `${element}-${props[element]}`)];
        }
        
    }
    return mtProps;
};