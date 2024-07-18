import React from 'react'
import Leftmenu from './components/screens/Leftmenu'
import Topmenu from './components/screens/Topmenu'
import Maindash from './components/screens/Maindash'
import Explore from './components/screens/Explore'
const App = () => {

  return (
    <div className=' *:font-open-sans laptop:mx-auto phone:w-[100vw] h-[1090px] phone:h-[90vh] tablet:h-[100vh] tablet:max-w-[100vw] mx-auto w-[1440px] laptop:h-[100vh] laptop:w-[100%] '>
      <div className=' flex laptop:mx-auto laptop:w-[65vw] '>
        <Leftmenu />
        <div className=' p-[10px] w-[1096px] '>
          <Topmenu />
          <Explore />
        </div>
      </div>
    </div>
  )
}

export default App