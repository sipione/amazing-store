import { gql } from "@apollo/client";
import { Client } from "./apolloClientService";


export default async function queryProductById(productId){
    const response = await Client.query({
        query: gql`
        query{
            product(id: "${productId}"){
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
            currency{
              label 
              symbol
            } 
            amount}
          brand
        }}
      `
    })
    return response.data.product;
}