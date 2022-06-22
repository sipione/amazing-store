import { Component, createContext, memo } from "react";


export const ProductsContext = createContext();

class ProductsContextProvider extends Component{

    constructor({props}){
        super(props);
        this.state={
            cart: [],
            category: "all",
            totalItems: 0,
            tax: 0.21
        }
    }

    handleCategory = (newCategory)=>{
        this.setState({category: newCategory});
    }

    handleCart = (product, attributesSelected)=>{
        const cart = this.state.cart;
        const productToCart = {
            id: product.id,
            name: product.name,
            brand: product.brand,
            gallery: product.gallery,
            prices: product.prices,
            attributes: product.attributes,
            selectedAttr: attributesSelected,
            quantity: 1
        }

        for(let i = 0; i < cart.length; i++){
            if(cart[i].id === productToCart.id 
                && JSON.stringify(cart[i].selectedAttr) === JSON.stringify(productToCart.selectedAttr)){
                    cart[i].quantity += 1;
                    console.log(cart)
                    this.handleTotalItems(cart);
                    return this.setState({cart: cart})
            }
        }

        cart.push(productToCart);

        this.handleTotalItems(cart);
        
        return this.setState({cart: cart});
    }

    quickAddItem = (product)=>{
        const array = this.state.cart;
        array.map(item=> item.id === product.id 
            && JSON.stringify(item.selectedAttr)=== JSON.stringify(product.selectedAttr) 
            ? item.quantity += 1 : "");

        this.handleTotalItems(array);
        return this.setState({cart: array})
    }

    quickremoveItem = product=>{
        const array = this.state.cart;
        array.map((item, index)=> item.id === product.id 
            && JSON.stringify(item.selectedAttr)=== JSON.stringify(product.selectedAttr) 
            ? item.quantity <= 1 
            ? array.splice(index, 1) 
            : item.quantity -= 1 
            : ""
        );

        this.handleTotalItems(array);
        return this.setState({cart: array})
    }

    handleTotalItems = (cart)=>{
        let items = 0;

        cart.forEach(product => {
            return items += product.quantity
        });

        return this.setState({totalItems: items})
    }

    render(){
        const {cart, category, totalItems, tax} = this.state;
        const {handleCategory, handleCart, quickAddItem, quickremoveItem} = this;

        return(
            <ProductsContext.Provider value={{cart, category, totalItems, tax, handleCategory, handleCart, quickAddItem, quickremoveItem}}>
                {this.props.children}
            </ProductsContext.Provider>
        )
    }
}

export default memo(ProductsContextProvider);