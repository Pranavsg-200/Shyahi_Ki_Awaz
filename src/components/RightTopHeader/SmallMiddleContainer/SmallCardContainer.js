import React from 'react'
import SmallCard from './SmallCard'
import { smallCardData } from '../../../constants'

const SmallCardContainer = () => {
  return (
    <div>
       {
        smallCardData.map((element,index)=>(
          <SmallCard {...element} key={index}/>
        ))
       }

    </div>
  )
}

export default SmallCardContainer