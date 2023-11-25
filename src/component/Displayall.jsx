import React from 'react'
import HigherOrderFunctions from './HigherOrderFunction'

class Displayall extends React.Component{
    AlluserData = (Data) =>{
        const AllData = Data.map((item)=>(
            <React.Fragment key={item.id}>
                <li>
                <span>Id: {item.id}, </span>
                <span>Name: {item.name}, </span>
                <span>User type: {item.user_type}</span>
                </li>
                
            </React.Fragment>
        ))
        return AllData
    }
    render(props){
        const value = this.props.All
        console.log(value)
        return(
            <>
                 <h1>Display all items</h1>
                 <div>
                    <ul>{this.AlluserData(value)}</ul>
                 </div>
            </>
           
        )
    }

}
export default Displayall
