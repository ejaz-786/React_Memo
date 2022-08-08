import React, { Component } from 'react'
import ChildComponent from './ChildComponent';

class ParentComponent extends Component {

    state ={
        counter:0
    }

 
    componentDidMount(){

        setInterval(()=>{

            this.setState({
               counter:this.state.counter+1
            })

        },2000)

    }
      

  render() {
    return (
      <div>

        {console.log(this.state.counter)}
        <ChildComponent/>

      </div>
    )
  }
}

export default ParentComponent
