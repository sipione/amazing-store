import { gql } from "@apollo/client";
import { Client } from "./apolloClientService";


export default async function queryCurrency(){
    const response = await Client.query({
        query: gql`
        query{
            currencies{
                label 
                symbol
            }
        }
        `
    })
    return response.data.currencies;
}