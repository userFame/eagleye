import React, { Component } from 'react'

class AllPostTypes extends Component {
  constructor() {
    super()
  }

  componentDidMount() {
    console.log(' we hit the stakeholder component', this.props)
  }

  renderList() {
    const list = this.props.list.map((k, i) => {
      return <div>k.slug</div>
    })
  }

  render() {
    return (
      <div>
        {/* {this.renderList.bind(this)} */}
        {this.props.list.map((item, index) => {
          return <div key={item.id}>{item.slug}</div>
        })}
      </div>
    )
  }
}

export default AllPostTypes
