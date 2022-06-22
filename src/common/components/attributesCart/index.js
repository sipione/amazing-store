import { Component, memo } from "react";
import { ParagraphGeneral, ParagraphRoboto } from "../../foundation/typography";
import { AttributesContainer, AttributesItemBox, ItemBoxValues } from "./styled";


class AttributesCart extends Component{

    constructor({props, attributes, selection}){
        super(props);
        this.attributes= attributes;
        this.selection = selection;
    }

    render(){
        return(
        this.attributes.map((attribute, index)=>{
            
            return(
                <AttributesContainer key={attribute.id+index}>
                    <ParagraphRoboto>{attribute.name}:</ParagraphRoboto>
                
                    <AttributesItemBox text={attribute.type === "text"}>
                        {attribute.items.map((attributeItem, index)=>{
                            
                            return(
                                <ItemBoxValues
                                key={attributeItem.value+index}
                                bg={attribute.type === "text" ? "#fff" : attributeItem.value}
                                text={attribute.type === "text"}
                                className={this.selection[attribute.name] === attributeItem.value ? "selected": ""}
                                >
                                <ParagraphGeneral>{attributeItem.value}</ParagraphGeneral>
                                </ItemBoxValues>
                            )
                        })}
                    </AttributesItemBox>
                </AttributesContainer>
            )
        }))
    }
}

export default memo(AttributesCart);