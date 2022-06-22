import { Component, memo } from "react";
import {CurrencyContext} from "../../contexts/currencyContext";
import { ProductsContext } from "../../contexts/productsContext";
import { ParagraphRoboto, TitleRalewayH2, TitleRalewayH3 } from "../../foundation/typography";
import AttributesCart from "../attributesCart";
import { AreYouSureContainer, DetailsRightQuantity, ItemDetailsLeft, ItemDetailsRight, ItemDetailsRightGallery, ItemsCartListContainer } from "./style";
import {ReactComponent as Add} from '../../../assets/images/add.svg';
import {ReactComponent as Remove} from '../../../assets/images/remove.svg';


class ComponentItemsCartList extends Component{
    static contextType = ProductsContext;

    
    definePrice(prices){
        return(
            <CurrencyContext.Consumer>
                {data=>{
                    const price = prices.find(price=> price.currency.label === data.currency.label)
                    return(
                        <div>
                            <ParagraphRoboto>Price:</ParagraphRoboto>
                            <ParagraphRoboto>{price.currency.symbol} {price.amount}</ParagraphRoboto>
                        </div>
                    )
                }}
            </CurrencyContext.Consumer>
        )
    }

    handleImg(event, gallery){
        const img = event.target.parentElement.children[0];
        const back = event.target.parentElement.children[1];
        const next = event.target.parentElement.children[2];
        const currentIndex = gallery.indexOf(img.src);
        const len = gallery.length;

        if(event.target.className === "next"){
            back.classList.remove("hide");

            currentIndex + 1 === len - 1 ? next.classList.add("hide") : next.classList.remove("hide");

            img.src = gallery[currentIndex+1];

        }else{
            next.classList.remove("hide");
            img.src = gallery[currentIndex-1]

            currentIndex - 1 <= 0 ? back.classList.add("hide") : back.classList.remove("hide");
        }
    }

    areYouSure(product){
        const confirmation = window.confirm("Are you sure you want to dele this item from your cart?");
        confirmation ? this.context.quickremoveItem(product):alert("nice choice!"); 
    }

    render(){
        return(
            this.context.cart.map(product=>{
                return(
                <ItemsCartListContainer>
                    <ItemDetailsLeft>
                        <TitleRalewayH3>{product.brand}</TitleRalewayH3>
                        <TitleRalewayH3>{product.name}</TitleRalewayH3>
                        
                        {this.definePrice(product.prices)}

                        <AttributesCart
                            attributes={product.attributes}
                            selection={product.selectedAttr}
                        />
                    </ItemDetailsLeft>

                    <ItemDetailsRight>
                        <DetailsRightQuantity>
                            <Add
                                onClick={()=>this.context.quickAddItem(product)}
                            />

                            <p>{product.quantity}</p>

                            <Remove
                                onClick={()=>{
                                    product.quantity <= 1 ? this.areYouSure(product) : this.context.quickremoveItem(product)
                                }}
                            />
                        </DetailsRightQuantity>

                        <ItemDetailsRightGallery>
                        <img
                        src={product.gallery[0]} 
                        alt="product representation
                        "/>

                        <button 
                        className="back hide"
                        onClick={(event)=>this.handleImg(event, product.gallery)}
                        >{'<'}</button>

                        <button 
                        className={product.gallery.length <= 1 ? "next hide" : "next"}
                        onClick={(event)=>this.handleImg(event, product.gallery)}
                        >{'>'}</button>
                        </ItemDetailsRightGallery>
                    </ItemDetailsRight>
                </ItemsCartListContainer>
                )
            })
        )
    }
}

export default memo(ComponentItemsCartList);