import uniqueId from 'lodash.uniqueid';
import { useEffect, useState } from 'react';

const useUniqueId = (id: string | undefined, prefix : string) => {
    const [uId, setUid] = useState(uniqueId(prefix));
    const [fId, setFid] = useState(id || uId);

    useEffect(() => {
        if (id) {
            setFid(id);
        } else {
            setFid(uId);
        }
    }, [id, uId]);

    return fId;
};

export default useUniqueId;