import React from 'react'
import { firstname } from '../App'

const CompC = () => {
  return (
    <div>
        <firstname.Consumer>{(fname) =>{
         return<h1>Hello This is {fname}</h1>
        }}</firstname.Consumer>
        
    </div>
  )
}

export default CompC
