import { Component } from "react";
import { CardDescription, CardImage, ContainerProductsBox, ProductCard, ShopPageContainer, ShopPagePriceParagraph } from "./style";
import { Link } from "react-router-dom";
import {ParagraphGeneral, TitleRalewayH1, TitleRalewayH2} from '../../common/foundation/typography';
import {ProductsContext} from "../../common/contexts/productsContext";
import {CurrencyContext} from "../../common/contexts/currencyContext";
import {ReactComponent as CartWhite} from "../../assets/images/cartWhite.svg"

class PageShop extends Component{
    static contextType = ProductsContext;

    addCartDataPreparation = async(id)=>{
        const newProduct = await this.context.products.find(product=>product.id === id)
        const attr = {};
        newProduct.attributes.map(attribute=> attr[attribute.name] = attribute.items[0].value)
        return {newProduct, attr}
    }

    render(){
        if(this.context.loading){
            return(
                <h1 style={{"marginTop": "10vh"}}>Loading...</h1>
            )
        }

        return(
            <ShopPageContainer>
                <TitleRalewayH1>{this.context.category.slice(0,1).toUpperCase()+this.context.category.slice(1)}</TitleRalewayH1>

                <ContainerProductsBox>
                {this.context.products.map((product, index)=>{
                    return(
                        <ProductCard
                        inStock={product.inStock} 
                        key={product.id+index}
                        category={product.category===this.context.category || this.context.category==="all"}
                        >
                            <Link to={`/${product.id}`}>
                            <span className="stock"> <TitleRalewayH2>OUT OF STOCK</TitleRalewayH2></span>
                            <CardImage>
                                <img src={product.gallery[0]} alt="product ilustrative representation"/>
                            </CardImage>

                            <CardDescription>
                                <ParagraphGeneral>{product.brand} {product.name}</ParagraphGeneral>
                                
                                <CurrencyContext.Consumer>
                                {currencyData=>{
                                    return(
                                    // eslint-disable-next-line array-callback-return
                                    product.prices.map((price, index)=>{
                                        if(price.currency.label === currencyData.currency.label){
                                            return(<ShopPagePriceParagraph key={price.label+index}>
                                                {price.currency.symbol + price.amount}
                                            </ShopPagePriceParagraph>)
                                        }
                                    }) 
                                    )
                                }}
                                </CurrencyContext.Consumer>

                            </CardDescription>
                            </Link>
                            
                            <button addCartDataPreparation
                                className="cartwhite"
                                onClick={async()=>{
                                    const {newProduct, attr} = await this.addCartDataPreparation(product.id)
                                    return this.context.handleCart(newProduct, attr)
                                }}
                            >
                                <CartWhite/> 
                            </button>
                        </ProductCard>
                    )
                })}
                </ContainerProductsBox>
            </ShopPageContainer>
        )
    }
}

export default PageShop;