import { Component } from "react";
import ComponentButton from "../../common/components/button";
import {ProductsContext} from "../../common/contexts/productsContext";
import { ParagraphGeneral, ParagraphRoboto, TitleRalewayH2, TitleRalewayH3 } from "../../common/foundation/typography";
import queryProductById from "../../services/queryProductById";
import Page404 from "../404";
import { AttributesItemsBox, ContainerMainImg, ContainerMiniaturesBox, ContainerProductDetail, DetailButtonBox, DetailPrice, DetailsAttributes, DetailsDescription, DetailsTitles, ItemBoxValues, ProductPageContainer } from "./style";
import {CurrencyContext} from '../../common/contexts/currencyContext.js';


class pageProduct extends Component{

    static contextType = ProductsContext;

    constructor({props}){
        super(props)
        this.state={
            product:false,
            mainImgSrc: "",
        }
    }

    componentDidMount(){
        const id = window.location.pathname.replace("/", "");
        queryProductById(id)
        .then(resp=>this.setState({
            product:resp,
            mainImgSrc: resp.gallery[0]
        }))
    }

    handleMainImgSrc(newSrc){
        this.setState({mainImgSrc: newSrc})
    }

    handleProduct(attributeName, attributeValue){
        this.selectedAttr[attributeName]=attributeValue;
    }

    handleSubmit(){
        const inputs = [... document.querySelectorAll("input:checked")]
        
        let attributes = {};
        
        inputs.map(input=> {
            const key = input.getAttribute("attributeName");
            const value = input.value;
            attributes[key]= value;
        })

        this.state.product.attributes.length === Object.keys(attributes).length
        ? this.context.handleCart(this.state.product, attributes) : alert("Hello! How are you doing? I just came here to say you should choose the attributes of you product before add it to the cart");
    }
    
    render(){
        //in case of something get wrong in the request from database
        if(this.state.product === null){
            
            return <Page404/>

        }else if(!this.state.product){

            return(
                <h1>Loading...</h1>
            )
        }

        //in case when everuthing is ok
        return(
            <ProductPageContainer>
                <ContainerMiniaturesBox>
                {this.state.product.gallery.map((imageSrc, index) =>{
                    return(
                        <img 
                            key={imageSrc+index} 
                            src={imageSrc}
                            onClick={()=>this.handleMainImgSrc(imageSrc)}
                            alt="product ilustrative model"
                        />
                    ) 
                })}
                </ContainerMiniaturesBox>

                <ContainerMainImg>
                    <img src={this.state.mainImgSrc}/>
                </ContainerMainImg>

                <ContainerProductDetail>
                    <DetailsTitles>
                        <TitleRalewayH2>{this.state.product.brand}</TitleRalewayH2>
                        <TitleRalewayH3>{this.state.product.name}</TitleRalewayH3>
                    </DetailsTitles>

                    <DetailsAttributes>
                        {this.state.product.attributes.map((attribute, index)=>{
                            const customRandomInputName = Math.floor(Math.random()*1000);
                            return(
                                <div key={attribute.id+index}>
                                <ParagraphRoboto >{attribute.name}:</ParagraphRoboto>
                                
                                <AttributesItemsBox>
                                    {attribute.items.map((attributeItem, index)=>{
                                        return(
                                            <ItemBoxValues
                                            key={attributeItem.value+index}
                                            bg={attribute.type === "text" ? "#fff" : attributeItem.value}
                                            text={attribute.type === "text"}
                                            >
                                                <input type="radio"
                                                    id={attribute.id+attributeItem.value}
                                                    name={customRandomInputName}
                                                    value={attributeItem.value}
                                                    attributeName={attribute.name}
                                                />
                                                <label htmlFor={attribute.id+attributeItem.value}><ParagraphGeneral>{attributeItem.value}</ParagraphGeneral></label>
                                            </ItemBoxValues>
                                        )
                                    })}
                                </AttributesItemsBox>
                                </div>
                            )
                        })}
                    </DetailsAttributes>

                    <DetailPrice>
                        <ParagraphRoboto>
                            Price:
                        </ParagraphRoboto>

                        <CurrencyContext.Consumer>
                            {currencyData=>{
                                    const price = this.state.product.prices.find(price=> price.currency.label == currencyData.currency.label)
                                return(
                                    <div>
                                    <ParagraphRoboto>{price.currency.symbol} {price.amount}</ParagraphRoboto>

                                    </div>
                                )
                            }}
                        </CurrencyContext.Consumer>
                    </DetailPrice>

                    
                    <DetailButtonBox
                    onClick={(event)=>{
                        event.preventDefault();

                        this.handleSubmit();
                    }}
                    >
                    <ComponentButton>ADD TO CART</ComponentButton>
                    </DetailButtonBox>


                    <DetailsDescription dangerouslySetInnerHTML={{__html: this.state.product.description}}/>
                </ContainerProductDetail>
            </ProductPageContainer>
        )
    }
}



export default pageProduct;