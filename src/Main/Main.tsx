import React from 'react'
import styled from 'styled-components'

const Main = () => {
  return (
    <div>
      <Test>Main</Test>
    </div>
  )
}

const Test = styled.h1`
  font-size: 100px;
  color: ${({ theme }) => theme.color.blue};
  ${({ theme }) => theme.media.tablet`
    font-size:80px;
    color:red
  `}
  /* ${({ theme }) => theme.flexMixIn('center', 'center')} */
  ${({ theme }) => theme.postionMixin('fixed', 50, 50)}
`

export default Main
