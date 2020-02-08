import React, { Component } from 'react'
import styled from 'styled-components'

const UnorderedList = styled.div`
    list-style-type: none;
    padding: 20px;
`

const SubListWrap = styled.div`
  list-style-type: none;
  border: 1px solid black;
  box-shadow: -9px 1px 20px 1px lightgray;
  margin-top: 20px;
`

class SubList extends Component {
  constructor(props) {
    super()

    if (!Array.isArray(props.subList)) {
      this.listArray = Object.values(props.subList)
    } else if (Array.isArray(props.subList)) {
      this.listArray = props.subList
    }

    this.state = {}
  }

  componentDidMount() {
    console.log(this.listArray);
  }

  render() {
    return (
      <SubListWrap>
        <UnorderedList>
          {this.listArray.map((item, index) => {
            return <li><a key={item.id} href={item.link} target='_blank'>{item.name || item.title.rendered}</a></li>
          })}
        </UnorderedList>
      </SubListWrap>
    )
  }
}

export default SubList
