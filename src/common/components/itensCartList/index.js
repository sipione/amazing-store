import { Component, memo } from "react";
import {CurrencyContext} from "../../contexts/currencyContext";
import { ProductsContext } from "../../contexts/productsContext";
import AttributesCart from "../attributesCart";
import { DetailsRightQuantity, ItemBrandText, ItemDetailsLeft, ItemDetailsRight, ItemDetailsRightGallery, ItemNameText, ItemPriceText, ItemsCartListContainer } from "./style";
import {ReactComponent as Add} from '../../../assets/images/add.svg';
import {ReactComponent as Remove} from '../../../assets/images/remove.svg';


class ComponentItemsCartList extends Component{
    static contextType = ProductsContext;

    constructor({props, minicart=false}){
        super(props);
        this.minicart = minicart;
    }

    
    definePrice(prices){
        return(
            <CurrencyContext.Consumer>
                {data=>{
                    const price = prices.find(price=> price.currency.label === data.currency.label)
                    return(
                        <div>
                            <ItemPriceText minicart={this.minicart}>{price.currency.symbol} {price.amount}</ItemPriceText>
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
            this.context.cart.map((product, index)=>{
                return(
                <ItemsCartListContainer>
                    <ItemDetailsLeft minicart={this.minicart}>
                        <ItemBrandText minicart={this.minicart}>{product.brand}</ItemBrandText>
                        <ItemNameText minicart={this.minicart}>{product.name}</ItemNameText>
                        
                        {this.definePrice(product.prices)}

                        <AttributesCart
                            index = {index}
                            minicart={this.minicart}
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

                        <ItemDetailsRightGallery minicart={this.minicart}>
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