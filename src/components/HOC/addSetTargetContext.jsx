import React from 'react';
import { RestApiServiceConsumer } from "../../services/RestApiServiceContext";

const AddSetTargetContext = Wrapped => {
    return props => {
        return <RestApiServiceConsumer>
            {setTarget => <Wrapped {...props} setTarget={setTarget}/>}
        </RestApiServiceConsumer>;
    };
};

export default AddSetTargetContext;