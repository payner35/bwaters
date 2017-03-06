import React from 'react';
import Lightbox from 'react-images';
import Radium from 'radium';
import Planks from 'react-planks';


const media=[
    {
        thumb: "http://www.bluewatersdubai.ae/wp-content/uploads/2017/02/Render63.jpg",
        image: "http://www.bluewatersdubai.ae/wp-content/uploads/2017/02/Render63-300x300.jpg",
        type: "image"
    },
    {
        thumb: "https://images.unsplash.com/photo-1470619549108-b85c56fe5be8?dpr=2&auto=format&crop=faces&fit=crop&w=300&h=300",
        image: "https://images.unsplash.com/photo-1470619549108-b85c56fe5be8?dpr=2&auto=format&w=1024",
        type: "image"
    }
]

const Gallery = ({
            lightboxIsOpen,
            openGallery,
            closeGallery,
            gotoPrevious,
            gotoNext,
            currentImage,
            openVideo,
            }) => {


    let options = {
        'breakpoints': {
            '544': 1,
            '768': 2,
            '992': 3,
            '1200': 4,
            '1600': 4
        },
        'horizontalPadding': 1,
        'verticalPadding': 1,
        'unitType': 'rem'
    };

    const _getImages = ()=> {
        //get an array of images
        var imageMedia =[]; //we need to pull the images out of the media
        if(media){
            for (var i = 0, len = media.length; i < len; i++) {
                if(media[i].image){
                    let someImageIObject = {src: media[i].image};
                    imageMedia.push(someImageIObject); //needs to be an object
                }
            }
        }
        return imageMedia;
    };

    const _getThumbs = ()=> {
        //get an array of images
        var thumbMedia =[]; //we need to pull the images out of the media
        if(media){
            for (var i = 0, len = media.length; i < len; i++) {
                if(media[i].thumb){
                    let someImageIObject =
                        {
                            src: media[i].thumb,
                            type: media[i].type,
                            video: media[i].video || "",
                            audio: media[i].audio || ""
                        };
                    thumbMedia.push(someImageIObject); //needs to be an object
                }
            }
        }
        //sort the array and bring the images to the front..
        //makes it easier to pop up the images as they are base don index value
        //we can do this is a simple alphabetical sort  image | mp3 | video
        const finalList = thumbMedia.sort((a, b) => {
            return a.type.localeCompare(b.type)
        });

        return finalList;
    };

    const _openLightbox = (index, event)=> {
        openGallery();
    };

    const _closeLightbox = ()=> {
        closeGallery();
    };

    const _gotoPrevious = ()=> {
        gotoPrevious();
    };

    const _gotoNext = (index, e)=> {
        gotoNext();
    };


    const _goMedia = (tile, index)=> {
        switch(tile.type) {
            case "video/mp4":
                openVideo(tile.video, true);
                break;
            case "mp3":
                openVideo(tile.audio, false);
                break;
            case "image":
                console.log(tile);
                openGallery(index);
                break;
            default:
                break;    
        }
    };
    


    //media is an array...

    return (
        <div>
            <Planks options={options}>
                {_getThumbs() && _getThumbs().map((tile, i) => (
                    <img
                        role="presentation"
                        key={i}
                        src={tile.src}
                        onClick={_goMedia.bind(this, tile, i)}
                         style={{
                                width: '100%',
                                maxWidth: 350,
                                transition: "all 0.1s ease",
                                cursor: 'pointer',
                                ':hover': {
                                    transform:"scale(1.05)",
                                    boxShadow:"0px 7px 15px -5px rgba(26,25,26,0.52)"
                                 }
                    }}/>
                ))}
            </Planks>
            <Lightbox
                images={_getImages()}
                currentImage={currentImage}
                isOpen={lightboxIsOpen}
                onClickPrev={_gotoPrevious}
                onClickNext={_gotoNext}
                onClose={_closeLightbox}
            />

        </div>

    );
};



Gallery.propTypes = {
    openGallery: React.PropTypes.func,
    closeGallery: React.PropTypes.func,
    gotoPrevious: React.PropTypes.func,
    gotoNext: React.PropTypes.func,
    lightboxIsOpen: React.PropTypes.bool
};


export default Radium(Gallery);