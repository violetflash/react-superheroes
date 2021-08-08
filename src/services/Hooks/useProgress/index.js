import { useState } from 'react';

const useProgress = () => {
    const [progress, setProgress] = useState(0);

    return { progress, setProgress };
};

export default useProgress;