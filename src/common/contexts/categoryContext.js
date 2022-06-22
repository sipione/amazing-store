import { Component, createContext } from "react";


export const CategoryContex = createContext();

class CategoryContexProvider extends Component{

    constructor({props}){
        super(props);
        this.state = {
            category: "all"
        }
    }

    handleCategory = (newCategory)=>{
        this.setState({category: newCategory});
    }

    render(){
        return(
            <CategoryContex.Provider>
                {this.props.children}
            </CategoryContex.Provider>
        )
    }
}

export default CategoryContexProvider;