import React, { useContext } from 'react'
import { firstname } from '../App'
// import CompC from './CompC'

const CompB = () => {
const fname = useContext(firstname)
  return (
    <div>
<h1>My name is {fname}</h1>
    </div>
  )
}

export default CompB
