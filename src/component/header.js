import React,{ Component} from 'react';

class Header extends Component{

    constructor(){
        super()

        this.state={
            title:'React App',
            userInput:'User text Here'
        }
        
    }

    inputChange(event){
        this.setState({userInput:event.target.value?event.target.value:'User text Here'})
    }

    render(){
        return(
            <div>
                <center>
                    <h1> Music Store</h1>
                </center>
                <hr/>
            </div>
        )
    }
}
    

export default Header;