// Code DelayedButton Component Here
import React, {Component} from 'react' 

class DelayedButton extends Component { 


    handleOnClick = (e) => {
        e.persist()
        window.setTimeout( () => this.props.onDelayedClick(e), this.props.delay)
    
    }

    render(){
        return(
            <div>
                <button onClick={this.handleOnClick}> Delayed Click </button>
            </div>
        )
    }
} 

export default DelayedButton