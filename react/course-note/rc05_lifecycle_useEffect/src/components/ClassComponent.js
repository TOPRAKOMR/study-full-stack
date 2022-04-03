import React from 'react'


 class ClassComponent extends React.Component {
  //  constructor(){
  //    super(props)
  //    this.state={count:0}
  //  }

  state={ count : 0}
  increase=()=>this.setState({count: this.state.count+1})

  //* component oluştuktan sonra gerçekleşek eylem..
  componentDidMount(){

    console.log("class comp Mounted")
    // this.increase()
  }

componentDidUpdate(prevProps, prevState){
  console.log("class comp updated!!")
  console.log(prevState.count)
  prevState.count!==this.state.count && console.log("Class compent Update!!")

}

//* component kaldırılacağı zaman gerçekleşek eylem
componentWillUnmount(){

  alert("Class Comp will unmount Bye bye..")
}

  render() {
    console.log("Comp rendered!!")
    return (
      <div className="class">
        <h2>ClassComponent</h2>
        <h3> Count: {this.state.count}</h3>
        <button onClick={this.increase}>Increase</button>

      </div>
    )
  }
}

export default ClassComponent

