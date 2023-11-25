import React, { Component } from 'react'
import HigherOrderFunctions from './HigherOrderFunction'
 class Age extends React.Component {
    filterbyAge =()=>{
        const data = this.props.Age
        return data.filter(user => user.age>28 && user.age <= 50 )
    }

    getresult = (data) =>{
        const mapAge = data.map((item)=>(
            <React.Fragment key={item.id}>
                <li>
                <span>Id: {item.id}, </span>
                <span>Name: {item.name}, </span>
                <span>User type: {item.user_type}</span>
                </li>
            </React.Fragment>
        ))
        return mapAge
    }
    render(){
        const para = this.filterbyAge()
        return (
            <div>
              <h1>Filter all data based on age greater than 28 and less than or equal to 50</h1>
              <div>
                  <ul>{this.getresult(para)}</ul>
              </div>
            </div>
          )
        }
     }

export default Age