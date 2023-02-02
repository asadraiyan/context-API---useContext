import React, {createContext} from 'react'
import CompA from './Components/CompA'

const firstname = createContext()

const App = () => {
 
  return (
    <div>
      <firstname.Provider value= {"Asad Raiyan"}>
      <CompA/>
      </firstname.Provider>
    </div>
  )
}

export default App
export {firstname}
