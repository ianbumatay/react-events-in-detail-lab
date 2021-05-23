// Code CoordinatesButton Component Here 

import React, {Component} from 'react' 

class CoordinatesButton extends Component {

    handleClick = (e) => { 
        console.log(this.props)
      this.props.onReceiveCoordinates([e.clientX, e.clientY])
    }

    render(){ 
        

        return( 
            <div>
                <button onClick={this.handleClick}>CLick</button>
            </div>

        )
    }
} 

export default CoordinatesButton 
