import { gql } from "@apollo/client";
import { Client } from "./apolloClientService";

export default async function queryAllProducts(){
    const response = await Client.query({
        query: gql`
        query{
            category{
            name 
            products{id
            name
            inStock
            gallery
            category
            prices{
              currency {
                label
                symbol
              } 
              amount}
            brand}
          }}
        `
    })
    return response
}