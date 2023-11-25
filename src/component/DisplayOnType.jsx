import React, { Component } from 'react'
import HigherOrderFunctions from './HigherOrderFunction'
class DisplayOnType extends React.Component {

    DisplayonType = () =>{
    const Data = this.props.type
        return Data.filter(user => user.user_type === 'Designer')
    }

    DisplayData = (data) =>{
        // const value  = this.DisplayonType()
        const result = data.map((item)=>(
            <React.Fragment key = {item.id}>
                <li>
                    <span>Id : {item.id}</span>
                    <span>Name : {item.name}</span>
                    <span>User-Type : {item.user_type}</span>
                </li>
            </React.Fragment>
        ))
        return result
    }
  render() {
    const parameter = this.DisplayonType()
    return (
      <div>
        <h1>Display based on user type</h1>
        <div>
            <ul>{this.DisplayData(parameter)}</ul>
        </div>
      </div>
    )
  }
}
export default DisplayOnType

