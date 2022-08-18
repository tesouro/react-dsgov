let alreadySettuped = false;

if(typeof self !== 'undefined' && typeof window !== 'undefined' && !alreadySettuped) {
    if(typeof require !== 'undefined') {
        require('@govbr-ds/core/dist/core-init');
        alreadySettuped = true;
    }
}

export const getDSGovCoreInit = () =>
    import('@govbr-ds/core/dist/core-init');
