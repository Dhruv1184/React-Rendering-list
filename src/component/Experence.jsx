import React, { Component } from 'react'
import HigherOrderFunctions from './HigherOrderFunction'

 class Experence extends React.Component {
    filterbyExperence =()=>{
        const data = this.props.experience
        const type = data.filter(user => user.user_type === 'Designer' )
        const exp = type.map(type => type.years)
        const totalexp = exp.reduce((total,expe)=> total + expe, 0)
        return totalexp
    }
  render() {
    return (
      <div>
        <h1>Find the total years of the designer</h1>
        <p>{this.filterbyExperence()}</p>
      </div>
    )
  }
}

export default Experence