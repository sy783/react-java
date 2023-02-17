import { Component } from "react";

class Demo4 extends Component {
    state = { showMessage: false  } 

    renderMessage(show){
        if(show)
            return <p>Hello World</p>
        else
            return null;
    }

    
    // () => this is to skip the bind
    doToggle = () =>{

        let isShow = !this.state.showMessage;
        this.setState({showMessage: isShow});
    }

    render() {
        
        const showMessage = true;

        return (

            <div>
                <button onClick={this.doToggle}>Click me to show the rest</button>
                <div>
                    {/* if true then it will show, if false then it will hide */}
                    { this.state.showMessage && <p> I am the content that should be hidden by default </p>}
                </div>
                <div>
                        { this.renderMessage(false)}
                </div>
            </div>
            
        );
    }
}
 
export default Demo4;