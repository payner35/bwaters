import React, { Component } from 'react';
import Flexbox from 'flexbox-react';
import Helmet from 'react-helmet';
import { Grid, Row, Col } from 'react-bem-grid';

import MainNav from '../components/mainNav';
import Hero from '../components/hero';
import MainBlock from '../components/mainBlock';
import NiceButton from '../components/niceButton';
import NiceVideo from '../components/niceVideo';
import Gallery from '../containers/gallery';
import NiceMap from '../components/niceMap';


import LazyLoad from 'react-lazy-load';


class Home extends Component {
  render() {
    return (
      <Flexbox flexDirection="column">
          <Helmet 
            title="BLUEWATERS I Apartments, Penthouses & Townhouses, Dubai, UAE"
            meta={[
                      {name: "description", content: "Located off coast of JBR opposite THE BEACH, Bluewaters from Meraas offers residents & visitors an unparalleled waterfront living experience. Learn more."},
                      {property: "og:type", content: "article"}
                  ]}/>
          

          
          <MainNav />
          
          <Hero title="ENJOY ISLAND LIVING" />
          
          <MainBlock title="Bluewaters">
          
                <h2>Home to Ain Dubai, the world’s largest observation wheel</h2>
          
                <p>With an exclusive selection of premium apartments, penthouses, and townhouses available for the very first time, Bluewaters is a modern, family-oriented island destination with a pioneering spirit that blends waterfront living with the exhilaration of urban city life.</p>

                <p>A colourful beacon adorning Dubai’s spectacular coastline and skyline, residences offer those seeking a new life in the city a culture and an experience that extends beyond the home, not to mention unrivalled views of the world’s largest observation wheel – Ain Dubai.</p>

                <p>Bluewaters will also be a shoppers’ paradise with close to 150 retail and dining concepts, connected to the shore by a multi-mode transport system providing ease of access to and from the island.</p>

                <p>A purpose built bridge connects the island with Sheikh Zayed Road, while automated vehicles will transport passengers to Bluewaters from Dubai Metro’s Nakheel Harbour and Towers station.</p>

                <p>A leisurely walk across a 265-metre pedestrian bridge leads to even more experiences at THE BEACH.</p>
            
                <NiceButton title="LEARN MORE" />
                
          </MainBlock>
          
          
          <div 
            style={{
              backgroundColor: 'black',
              paddingTop: '25px',
              paddingBottom: '55px',
              width: '100%'
            }}>
            
            <Grid style={{
                paddingTop: '55px',
                paddingBottom: '55px',
                width: '85vw'
                }}>
                  <Row>
                    <Col xs={12}>
                      <h2 style={{
                        fontSize: '2.5em',
                        color: 'white',
                        lineHeight: '1.2',
                        marginBottom: '15px'
                      }}>Gallery</h2>
                     <Gallery />
                    </Col>
                  </Row>
            </Grid>
          </div>
          
          
          <MainBlock title="Explore">
            <LazyLoad height={287} offsetVertical={400}>
                 <NiceVideo url="https://www.youtube.com/watch?v=ykrUmXW4vVM"/>
              </LazyLoad>
          </MainBlock>
          
          <NiceMap
            title="Where the urban buzz meets island calm"
            buttonLabel="GOOGLE MAP"
            mapUrl="https://ucarecdn.com/0bc551b8-b719-4aca-a4fd-1595b55b20b6/map.jpg" />
          
          
          
          <MainBlock title="More about Meraas">
          
                <p>Bluewaters is just one example of how we’re combining creativity and engineering to deliver a unique portfolio of urban destinations.</p>

                <p>These destinations are reimagining what it means to live, work, and play in a modern city. Our destinations CITY WALK, THE BEACH, BOXPARK, Last Exit, and The Outlet Village have already become central to Dubai’s aspirations as a happy, creative, and sustainable city. We invite you explore the world of experiences we’re bringing to life in order to help people feel part of a community and enjoy more of the things they love.</p>
                
                <NiceButton title="MERAAS.COM" />
                
          </MainBlock>
          
          
               
          
          <MainBlock title="Our progress">
          
            <LazyLoad height={287} offsetVertical={400}>
               <NiceVideo url="https://www.youtube.com/watch?v=ue6fSyc2558"/>
            </LazyLoad>
           
          </MainBlock>
         
        
        
        
          <Flexbox element="footer" height="60px">
            Footer
          </Flexbox>

      </Flexbox>
    );
  }
}

export default Home;
