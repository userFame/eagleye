import React, { Component, PureComponent } from 'react'
import { render } from '@testing-library/react'
import styled from 'styled-components'

const TitleWrap = styled.div`
  color: red;
`

function Title({ title, description }) {

  console.log(title, description)
  return (
    <TitleWrap id="title">
      <h1>{title}</h1>
      <p>{description}</p>
    </TitleWrap>
  )

}

export default Title
