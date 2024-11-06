import './App.css'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import ImageSlider from './ImageSlider'

function App() {
  const slides=[
    {url:'https://www.rekoforest.org/wp-content/uploads/2019/07/sumatran-tiger-1.jpg',title:'img1'},
    {url:'https://www.pixel4k.com/wp-content/uploads/2018/03/Wild%20Sumatran%20Tiger9352915391.jpg',title:'img2'},
    {url:'https://www.pixel4k.com/wp-content/uploads/2018/03/Wild%20Sumatran%20Tiger%204K362722478.jpg',title:'img3'},
    {url:'https://images3.alphacoders.com/249/249585.jpg',title:'img4'}
  ]


  return (
    <>
      <div className='App'>
        <nav className="navbar">
           <ul className="navbar-list"> 
            <li className="navbar-item">Facts</li> 
            <li className="navbar-item">Timeline</li> 
            <li className="navbar-item">Threats</li> 
           </ul> 
        </nav>
        <Parallax horizontal={true} pages={1.252} style={{ top: "0px", left: "0px" }} className='animation'>
          <ParallaxLayer offset={0} speed={3.5}>
            <div className='animation_layer parallax' id='rightLightTree'></div>
          </ParallaxLayer>

          <ParallaxLayer offset={0} speed={3.5}>
            <div className='animation_layer parallax' id='leftbrown'></div>
          </ParallaxLayer>
          <ParallaxLayer offset={0} speed={2.5}>
            <div className='animation_layer parallax' id='leftmiddle'></div>
          </ParallaxLayer>
          <ParallaxLayer offset={0} speed={1.5}>
            <div className='animation_layer parallax' id='leftTree'></div>
          </ParallaxLayer>
          <ParallaxLayer offset={0} speed={2.5}>
            <div className='animation_layer parallax' id='text'></div>
          </ParallaxLayer>

          <ParallaxLayer offset={0} speed={2.8}>
            <div className='animation_layer parallax' id='rightBack'></div>
          </ParallaxLayer>
          <ParallaxLayer offset={0} speed={2.76}>
            <div className='animation_layer parallax' id='rightTree'></div>
          </ParallaxLayer>
          <ParallaxLayer offset={0} speed={2.9}>
            <div className='animation_layer parallax' id='rightBase'></div>
          </ParallaxLayer>

          <ParallaxLayer offset={0} speed={3}>
            <div className='animation_layer parallax' id='tiger'></div>
          </ParallaxLayer>
          <ParallaxLayer offset={0} speed={3}>
            <div className='animation_layer parallax' id='bottomLeaf'></div>
          </ParallaxLayer>
          <ParallaxLayer offset={0} speed={3}>
            <div className='animation_layer parallax' id='topLeaf'></div>
          </ParallaxLayer>
          <ParallaxLayer offset={0} speed={3}>
           <div id='slider'>
              <div style={{ width: '100vw', height: '100vh', margin: '0 auto' }}>
                   <ImageSlider slides={slides} />
              </div>
           </div>
          </ParallaxLayer>
        </Parallax>
      </div>
    </>
  )
}

export default App
