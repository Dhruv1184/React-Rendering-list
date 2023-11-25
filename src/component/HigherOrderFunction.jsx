import React from 'react';
import Displayall from './Displayall';
import DisplayOnType from './DisplayOnType';
import NameStartWthj from './NameStartWth-J';
import Age from './Age';
import Experence from './Experence';
class HigherOrderFunctions extends React.Component{
    constructor(){
        super()
        this.state = {
            userData: [
                { id: '1', name: 'Joe', user_type: 'Developer', age:31, years:11 },
                { id: '2', name: 'Hill', user_type: 'Designer', age:26, years:4 },
                { id: '3', name: 'John', user_type: 'Teacher', age:24, years: 2},
                { id: '4', name: 'Sam', user_type: 'Entreprenuer', age:58,years:25},
                { id: '5', name: 'Jack', user_type: 'Designer', age:43, years: 18}

            ]
        }
    }


    render(){
        return(
            <>
            <div>
                <Displayall All ={this.state.userData}/>
            </div>
            <div>
                <DisplayOnType type ={this.state.userData}/>
            </div>
            <div>
                <NameStartWthj j = {this.state.userData}/>
            </div>
            <div>
                <Age Age = {this.state.userData}/>
            </div>
            <div>
                <Experence experience = {this.state.userData} />
            </div>
            </>
        )
    }

}

export default HigherOrderFunctions
