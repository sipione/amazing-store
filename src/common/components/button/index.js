import { Component } from "react";
import { ButtonComponent } from "./style";


class ComponentButton extends Component{

    constructor({props, variant=false}){
        super(props);
        this.variant = variant;
    }

    render(){
        return(
            <ButtonComponent variant={this.variant}>{this.props.children}</ButtonComponent>
        )
    }
}

export default ComponentButton;