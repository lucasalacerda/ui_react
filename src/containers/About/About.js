import React from "react";
import Paralax from '../../components/Paralax/Paralax'

class About extends React.Component {

    state = {
        title: 'About us',
        desc: 'We help you to find some nice places',
    }

    render(){
        return (
            <div>
                <Paralax {...this.state}/> 
            </div>
        )
    }       
}

export default About