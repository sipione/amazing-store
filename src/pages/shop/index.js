import { Component } from "react";
import { CardDescription, CardImage, ContainerProductsBox, ProductCard, ShopPageContainer, ShopPagePriceParagraph } from "./style";
import queryAllProducts from "../../services/queryAllProducts";
import { Link } from "react-router-dom";
import {ParagraphGeneral, ParagraphRoboto, TitleRalewayH1, TitleRalewayH2, TitleRalewayH3} from '../../common/foundation/typography';
import {ProductsContext} from "../../common/contexts/productsContext";
import {CurrencyContext} from "../../common/contexts/currencyContext";
import {ReactComponent as CartWhite} from "../../assets/images/cartWhite.svg"

class PageShop extends Component{

    constructor({props}){
        super(props);
        this.state={
            products: []
        }
    }

    componentDidMount(){
        queryAllProducts().then(resp=>this.setState({products:[...resp.data.category.products]}))
    }

    render(){
        return(
            <ShopPageContainer>
            <ProductsContext.Consumer>
                {productsData=>{
                    return(
                    <>
                    <TitleRalewayH1>{productsData.category.slice(0,1).toUpperCase()+productsData.category.slice(1)}</TitleRalewayH1>

                    <ContainerProductsBox>
                    {this.state.products.map((product, index)=>{
                        return(
                            <ProductCard
                            inStock={product.inStock} 
                            key={product.id+index}
                            category={product.category===productsData.category || productsData.category==="all"}
                            >
                                <Link to={`/${product.id}`}>
                                <span className="stock"> <TitleRalewayH2>OUT OF STOCK</TitleRalewayH2></span>
                                <CardImage>
                                    <img src={product.gallery[0]} alt="product ilustrative representation"/>
                                </CardImage>

                                <CardDescription>
                                    <ParagraphGeneral>{product.name}</ParagraphGeneral>
                                    
                                    <CurrencyContext.Consumer>
                                    {currencyData=>{
                                        return(
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
                                
                                <span className="cartwhite">
                                    <CartWhite/> 
                                </span>
                            </ProductCard>
                        )
                    })}
                    </ContainerProductsBox>
                    </>
                    )
                }}
            </ProductsContext.Consumer>
            </ShopPageContainer>
        )
    }
}

export default PageShop;