import React from 'react'
import SmallCardContainer from './SmallMiddleContainer/SmallCardContainer'
import LastContainer from './LastContainer/LastContainer'
import { Col } from 'react-bootstrap'

const RightTopHeaderConatiner = () => {
  return (
    <>
      <Col id="column2" lg={2} sm={12} xs={12} md={4}>
        <SmallCardContainer/>             
      </Col>

      <Col id="column3" lg={4} sm={12} xs={12} md={12}>
          {/* xs=6 md=4 */}
        <LastContainer/>
      </Col>
        
    </>
  )
}

export default RightTopHeaderConatiner