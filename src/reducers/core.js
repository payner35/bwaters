

const initialState = {
    //important to set defaults...
    message: ""
};


export function core(state = initialState, action = {}) {
    //picks up a dispatched event.. and updates the Redux State accordingly...
    switch (action.type) {
        default:
            return state;
    }
}


export default core;
