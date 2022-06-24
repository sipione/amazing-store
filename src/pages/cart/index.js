import { Component } from "react";
import {ProductsContext} from "../../common/contexts/productsContext";
import ComponentButton from '../../common/components/button/index';
import { CartButtonBox, CartFinelly, CartPageContainer, CartProductsList, FinellyValues } from "./style";
import {TitleRalewayH1, TitleRalewayH2, TitleRalewayH3} from '../../common/foundation/typography';
import {CurrencyContext} from '../../common/contexts/currencyContext';
import ComponentItemsCartList from '../../common/components/itensCartList/index.js';

class PageCart extends Component{

    static contextType = ProductsContext;

    getTotalValue(){
        return(
            <CurrencyContext.Consumer>
                {data=>{
                    let total = 0;
                    this.context.cart.forEach(product=>{
                        const price = product.prices.find(price => price.currency.label === data.currency.label);
                        total += price.amount * product.quantity
                    })
                    return(
                    <TitleRalewayH3>{data.currency.symbol} {total.toFixed(2)}</TitleRalewayH3>
                    )
                }}
            </CurrencyContext.Consumer>
        )  
    }

    getTaxlValue(){
        return(
            <CurrencyContext.Consumer>
                {data=>{
                    let total = 0;
                    this.context.cart.forEach(product=>{
                        const price = product.prices.find(price => price.currency.label === data.currency.label);
                        total += price.amount * product.quantity;
                    })
                    total = total*this.context.tax;
                    return(
                    <TitleRalewayH3>{data.currency.symbol} {total.toFixed(2)}</TitleRalewayH3>
                    )
                }}
            </CurrencyContext.Consumer>
        )  
    }

    render(){
        return(
            <CartPageContainer>
                <TitleRalewayH1>Cart</TitleRalewayH1>
                
                <CartProductsList>
                    <ComponentItemsCartList/>
                </CartProductsList>
                
                <CartFinelly>
                    <FinellyValues>
                        <TitleRalewayH2>Tax {this.context.tax*100}%:</TitleRalewayH2>
                        {this.getTaxlValue()}
                    </FinellyValues>

                    <FinellyValues>
                        <TitleRalewayH2>Quantity: </TitleRalewayH2>
                        <TitleRalewayH3>{this.context.totalItems}</TitleRalewayH3>
                    </FinellyValues>

                    <FinellyValues>
                        <TitleRalewayH2>Total: </TitleRalewayH2>
                        {this.getTotalValue()}
                    </FinellyValues>
                </CartFinelly>

                <CartButtonBox>
                    <ComponentButton>ORDER</ComponentButton>
                </CartButtonBox>
            </CartPageContainer>
        )
    }
}

export default PageCart;