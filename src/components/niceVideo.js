import React, { Component } from 'react';
import ReactPlayer from 'react-player'


//a nive resposive Youtube video...

class NiceVideo extends Component {
  
  render() {
      
    const {url} = this.props;
    
    return (
         <div style={{ //a wrapper to make the video responsive..
                position: "relative",
                paddingTop: "56.25%" //suits the 16:9 aspect ratio
              }}>
               <ReactPlayer 
                  url={url}
                  youtubeConfig={{
                    "playerVars": {
                       //origin: 'https://bluewaters-gavinpayne.c9users.io',
                       enablejsapi: '1',
                       showinfo: '0'
                    }
                   
                  }}
                  width="100%"
                  height="100%"
                  style={{
                    position: 'absolute',
                    top: '0px',
                    left: '0px'
                  }}
                  controls={true} />
              </div>
    );
  }
}

export default NiceVideo;
