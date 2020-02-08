import React, { Component } from 'react'
import SubList from './SubList'
import styled from 'styled-components'

const MainListWrap = styled.div`
  margin-top: 20px;
`

class MainList extends Component {
  constructor(props) {
    super()

    this.state = {
      links: props.link
    }

    this.listArray = Object.values(props.list)

  }

  componentWillMount() {
    console.log('main list state', this.props)
  }

  render() {
    return (
      <MainListWrap>
        {this.listArray.map((item, index) => {
          return (
            <div key={index}>
              {!this.props.link ?
                <button key={index} onClick={this.props.getListFunc.bind(this, item.slug)}>{item.slug}</button> :
                <div>
                  <a key={index} href={item.guid.rendered || item.link} onClick={this.props.getListFunc.bind(this, item.slug)} target="_blank">{item.slug}</a>
                </div>
              }
              {this.state[`${item.slug}`] && this.state[`${item.slug}`].length > 0 ? <SubList subList={this.state[`${item.slug}`]} getListFunc={this.props.getListFunc} /> : <div />}
            </div>
          )
        })}
      </MainListWrap>
    )
  }
}

export default MainList
