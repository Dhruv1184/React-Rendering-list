import React, { Component } from 'react'
import HigherOrderFunctions from './HigherOrderFunction'
 class NameStartWthj extends React.Component {

    StartwithJ = () =>{
        const name = this.props.j
        return name.filter(user => user.name[0]==='J')
    }

    namewithJ =(data) =>{
        const output = data.map((item)=>(
            <React.Fragment key={item.id}>
                <li>
                    <span>Id : {item.id} ;</span>
                    <span>Name : {item.name} ;</span>
                    <span>User-Type : {item.user_type} </span>
                </li>
            </React.Fragment>
        ))
        return output
    }

  render() {
    const para = this.StartwithJ()
    return (
        <div>
            <h1>Filter all data starting with j</h1>
            <div>
                <ul>{this.namewithJ(para)}</ul>
            </div>
        </div>
     
    )
  }
}
export default NameStartWthj