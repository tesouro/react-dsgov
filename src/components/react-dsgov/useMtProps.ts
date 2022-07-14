import { listMtProps } from "./Util";

export const useMtProps = (props : any) => {
    let mtProps : any[] = [];
    for (let index = 0; index < listMtProps.length; index++) {
        mtProps = [...mtProps, (props[listMtProps[index]] && `${listMtProps[index]}-${props[listMtProps[index]]}`)];
    }
    return mtProps;
}