import React, { Component, PureComponent } from 'react'
import styled from 'styled-components'

import MainList from './MainList'
import Title from './Title'
// import Footer from './Footer'

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-basis: 25%;
  margin-top: 100px;
`

const EagleEye = styled.div`
  margin-bottom: 100px;
`

class Wordpress extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
      description: '',
      allPostTypes: [],
      types: [],
      taxonomies: [],
      pages: [],
      posts: []
    }
  }

  componentDidMount() {
    console.log('componentdidmount working')
    fetch('http://127.0.0.1/wp-json/')
      .then(res => {
        return res.json()
      }).then(data => {
        this.setState({
          title: data.name,
          description: data.description,
        })
        console.log(data)
      }).catch(err => {
        console.log(err)
      })
  }

  getList(wp_list_type) {
    console.log('getlist', wp_list_type)
    fetch(`http://127.0.0.1/wp-json/wp/v2/${wp_list_type}?per_page=100`)
      .then(res => {
        return res.json()
      }).then(json => {
        this.setState({
          [wp_list_type]: json
        })
        console.log('the list', this.state)
        // return this.state.stakeholder;
      }).catch(err => {
        console.log('errrorrr', err)
      })
  }

  render() {
    console.log('wordpress component', this.state)
    return (
      <EagleEye id='eagleye'>
        <Title title={this.state.title} description={this.state.description} />
        <ButtonWrapper id="button-group">
          <div>
            <button onClick={this.getList.bind(this, 'types')} >Get All CPTS</button>
            {Object.keys(this.state.types).length > 0 ? <MainList list={this.state.types} getListFunc={this.getList} fromButton='types' /> :
              console.log('falseer brooosss', this.state.types)
            }
          </div>
          <div>
            <button onClick={this.getList.bind(this, 'taxonomies')}>Get All Taxonomies</button>
            {Object.keys(this.state.taxonomies).length > 0 ? <MainList list={this.state.taxonomies} getListFunc={this.getList} fromButton='taxonomies' /> :
              console.log('falseer brooosss', this.state.taxonomies)
            }

          </div>
          <div>
            <button onClick={this.getList.bind(this, 'posts')}>Get All Posts</button>
            {Object.keys(this.state.posts).length > 0 ? <MainList list={this.state.posts} getListFunc={this.getList} link={true} fromButton='posts' /> :
              console.log('falseer brooosss', this.state.types)
            }

          </div>
          <div>
            <button onClick={this.getList.bind(this, 'pages')}>Get All Pages</button>
            {Object.keys(this.state.pages).length > 0 ? <MainList list={this.state.pages} getListFunc={this.getList} link={true} fromButton='pages'/> :
              console.log('falseer brooosss', this.state.types)
            }
          </div>
        </ButtonWrapper>
        {/* <Footer /> */}
      </EagleEye>
    )
  }
}

export default Wordpress
