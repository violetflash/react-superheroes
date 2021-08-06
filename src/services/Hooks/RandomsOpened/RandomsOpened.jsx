import { useState } from 'react';

const RandomsOpened = () => {
    const [randomsOpened, setRandomsOpened] = useState(false);

    return { randomsOpened, setRandomsOpened };
};

export default RandomsOpened;
