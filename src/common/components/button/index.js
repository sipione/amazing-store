import { Component, memo } from "react";
import { ButtonComponent } from "./style";


class ComponentButton extends Component{

    constructor({props, variant=false, desable=false}){
        super(props);
        this.variant = variant;
        this.desable = desable;
    }

    render(){
        return(
            <ButtonComponent desable={this.desable} variant={this.variant}>{this.props.children}</ButtonComponent>
        )
    }
}

export default memo(ComponentButton);