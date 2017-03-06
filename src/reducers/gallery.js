

const initialState = {
    //important to set defaults...,
    lightboxIsOpen: false,
    currentImage: 0
};


export function gallery(state = initialState, action = {}) {
    //picks up a dispatched event.. and updates the Redux State accordingly...
    switch (action.type) {
        case "GALLERY_OPEN":
            return {
                ...state,
                lightboxIsOpen: action.lightboxIsOpen,
                currentImage: action.currentImage
            };
        case "GALLERY_CLOSE":
            return {
                ...state,
                lightboxIsOpen: action.lightboxIsOpen,
                currentImage: 0
            };
        case "GALLERY_PREVIOUS":
            return {
                ...state,
                currentImage: (state.currentImage - 1)
            };
        case "GALLERY_NEXT":
            return {
                ...state,
                currentImage: (state.currentImage + 1)
            };
        default:
            return state;
    }
}


export default gallery;