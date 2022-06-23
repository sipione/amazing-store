import { Component, memo } from "react";
import { ProductsContext } from "../../contexts/productsContext";
import { ParagraphGeneral, ParagraphRoboto } from "../../foundation/typography";
import { AttributesContainer, AttributesItemBox, ItemBoxValues } from "./styled";


class AttributesCart extends Component{

    static contextType = ProductsContext

    constructor({props, minicart, index}){
        super(props);
        this.state={
            minicart: minicart, 
            index: index
        } 
    }

    render(){
        const product = this.context.cart[this.state.index];
        
        return(
        product.attributes.map((attribute, index)=>{
            
            return(
                <AttributesContainer key={attribute.id+index}>
                    <ParagraphRoboto>{attribute.name}:</ParagraphRoboto>
                
                    <AttributesItemBox minicart={this.state.minicart} text={attribute.type === "text"}>
                        {attribute.items.map((attributeItem, index)=>{
                            
                            return(
                                <ItemBoxValues
                                key={attributeItem.value+index}
                                bg={attribute.type === "text" ? "#fff" : attributeItem.value}
                                text={attribute.type === "text"}
                                className={product.selectedAttr[attribute.name] === attributeItem.value ? "selected": ""}
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