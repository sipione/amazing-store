import { gql } from "@apollo/client";
import { Client } from "./apolloClientService";

export default async function queryAllProducts(category){
    const response = await Client.query({
        query: gql`
        query{category(input:{title: "${category}"}){
          name
          products{
            id
            name
            inStock
            gallery
            description
            category
            attributes{
              id
              name
              type
              items{
                displayValue
                id
                value
              }
            }
            prices{
              amount
              currency{
                label 
                symbol
              }
            }
            brand
          }
        }}
      `
    })
    
    return response.data.category.products
}