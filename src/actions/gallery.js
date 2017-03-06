
/*
 * action creators
 */

export function openGallery(currentImage) {
    return {
        type: 'GALLERY_OPEN',
        lightboxIsOpen: true,
        currentImage
    };
}


export function closeGallery(currentImage) {
    return {
        type: 'GALLERY_CLOSE',
        lightboxIsOpen: false
    };
}

export function gotoPrevious() {
    return {
         type: 'GALLERY_PREVIOUS'
    };
}

export function gotoNext() {
    return {
         type: 'GALLERY_NEXT'
    };
}

//https://github.com/jossmac/react-images/blob/master/examples/src/components/Gallery.js
  
  