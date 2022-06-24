import { Component, createContext, memo } from "react";
import queryCurrency from "../../services/queryCurrency";

export const CurrencyContext = createContext();


class CurrencyContextProvider extends Component{

    constructor({props}){
        super(props);
        this.state = {
            currency:{}
        };
    }

    componentDidMount(){
        if(window.sessionStorage.getItem("currency")){
            const object = JSON.parse(window.sessionStorage.getItem("currency"));
            return this.setState({currency: object})
        }
        queryCurrency()
        .then(resp=>this.setState({
            currency: {
                label: resp[0].label,
                symbol: resp[0].symbol
            }
        }))
    }

    handleCurrency = (newCurrency)=>{
        this.setState({currency: newCurrency});
        window.sessionStorage.setItem("currency", JSON.stringify(newCurrency))
    }

    render(){
        const {currency} = this.state;
        const {handleCurrency} = this;
        return(
            <CurrencyContext.Provider value={{currency, handleCurrency}}>
                {this.props.children}
            </CurrencyContext.Provider>
        )
    }
}

export default memo(CurrencyContextProvider);