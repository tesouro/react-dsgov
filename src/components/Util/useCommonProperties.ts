/* eslint-disable @typescript-eslint/no-explicit-any */
import { useImperativeHandle } from 'react';

const useCommonProperties = <T>(refTarget: any, ref : any, extra? : any) => {
    const attributes: any = {};

    for(const prop in ref.current) {

        if(typeof ref.current[prop] === 'function') {
            attributes[prop] = (...args : any) => {
                return ref?.current[prop]?.(...args);
            };
        } else {
            Object.defineProperty(attributes, prop, {
                get: () => ref.current[prop],
                set: (value : any) => ref.current[prop] = value
            });
        }

    }

    Object.assign(attributes, extra);

    useImperativeHandle<T, any>(refTarget, () => attributes);

};

export default useCommonProperties;