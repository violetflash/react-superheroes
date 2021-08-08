import { useState } from 'react';

const useProgressValue = () => {
    const [progressValue, setProgressValue] = useState(0);

    return { progressValue, setProgressValue };
};

export default useProgressValue;