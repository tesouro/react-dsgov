import { listMtProps } from "./Util";

export const useMtProps = (props : any) => {
    let mtProps : any[] = [];
    for (let index = 0; index < listMtProps.length; index++) {
        if(typeof props[listMtProps[index]] === "boolean" && props[listMtProps[index]]) {
            mtProps = [...mtProps, (listMtProps[index])];
        } else {
            mtProps = [...mtProps, (props[listMtProps[index]] && `${listMtProps[index]}-${props[listMtProps[index]]}`)];
        }
        
    }
    return mtProps;
}