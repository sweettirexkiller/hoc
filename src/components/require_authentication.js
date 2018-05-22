import React, {Component} from 'react';


export default function(ComposedComponent){
    class Authentication extends Component{
        reder(){
            return <ComposedComponent {...this.props}/>
        }
    }

    return Authentication;
}