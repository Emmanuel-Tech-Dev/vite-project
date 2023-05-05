import { useState , useRef} from 'react';

import './App.css'

// Importating data from an external files
import LiveData from './LiveThread';
import movieData from './MovieData'
import Data2 from './LiveData2'

//importing components
import Hero from './components/Hero'
import Cards from './components/Cards'
import LiveCards from './components/LiveCards';
import PromoCards from './components/PromoCards';
import Jumbotron from './components/Jumbotron';
import Footer from './components/Footer';
import Controllers from './components/Controllers';
import SideNav from './components/SideNav';

function App() {


  const data = movieData.map((items, i) => {
    return (

      <Cards
        key={items.img + items.name}
        item={items}
      />
    )

  })




  const Livedata = LiveData.map((items, i) => {
    return (
      <LiveCards
        key={i}
        item={items}
      />
    )

  })

  // const Livedata2 = LiveData.map((items, i)
  //   => {
  //   return (
  //     <PromoCards
  //       key={i}
  //       item={items}
  //     />
  //   )

  // })

  const LData2 = Data2.map((items, i) => {
    return (
      <PromoCards
        key={i}
        item={items}
      />
    )

  })


const wrapperRef = useRef(null)

    const [scrollPosition , setScrollPosition] = useState(0);

    const handleScroll = (direction) =>{
    const newScroll = direction === 'left' ? scrollPosition - 100 : scrollPosition + 100
     setScrollPosition(newScroll)

     wrapperRef.current.scrollTo({
      left: newScroll,
      behavior: 'smooth'
     })
  
  }



  return (
    <div className="App">
      <Hero />

      <div className="md:bg-partt bg-left bg-no-repeat">
        <div className="conatainer md:w-[95%] md:mx-auto" >
          <Controllers title='Now showing' link='See more' handleClickLeft = {() => handleScroll('left')}  handleClickRight = {() => handleScroll('right')} />
          <div className='scrollbar-hide scrollbar-medium flex overflow-x-scroll cursor-pointer  md:scrollbar-thin scrollbar-thumb-rose-500' id='card-container'
         >

            {data}
          </div>
        </div>

        <div className="conatainer -mt-[10%] md:w-[95%] md:mx-auto">

          <Controllers title='Sportlight' link='See more' />
           <div className='scrollbar-hide scrollbar-medium flex overflow-x-scroll cursor-pointer  md:scrollbar-thin scrollbar-thumb-rose-500' id='card-container'
         >

            {data}
          </div>
        </div>


        <div className="conatainer -mt-[10%] md:w-[95%] md:mx-auto">
          <Controllers title='Coming soon' link='See more' />
          <div className='scrollbar-hide scrollbar-medium flex overflow-x-scroll cursor-pointer  scrollbar-thin scrollbar-thumb-rose-500 '>

            {Livedata}
          </div>
        </div>

        <div className="conatainer -mt-[10%] md:w-[95%] md:mx-auto">
          <Controllers title='Art & Indie' link='See more' />
          <div className='scrollbar-hide scrollbar-medium flex overflow-x-scroll  cursor-pointer  scrollbar-thin scrollbar-thumb-rose-500 '>

            {data}
          </div>
        </div>
      </div>
      <div className="md:bg-Bg bg-no-repeat bg-right">
        <div className="conatainer -mt-[10%] md:w-[95%] md:mx-auto">
          <Controllers title='Trailers' link='See more' />
          <div className='scrollbar-hide scrollbar-medium flex overflow-x-scroll cursor-pointer  scrollbar-thin scrollbar-thumb-rose-500 '>

            {Livedata}
          </div>
        </div>
        <div className="conatainer -mt-[10%] md:w-[95%] md:mx-auto">
          <Controllers title='Harkins Shorts' link='See more' />
          <div className='scrollbar-hide scrollbar-medium flex overflow-x-scroll cursor-pointer  scrollbar-thin scrollbar-thumb-rose-500 '>

            {LData2}
          </div>
        </div>
      </div>
      <SideNav />
      <Jumbotron />
      <Footer />




    </div>
  )
}

export default App
