import { listMtProps } from './Util';

export const useSpreadProps = (props : any) => {
    for (let index = 0; index < listMtProps.length; index++) {
        delete props[listMtProps[index]];
    }
    return props;
};