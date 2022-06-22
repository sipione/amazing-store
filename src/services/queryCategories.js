import { gql } from "@apollo/client";
import { Client } from "./apolloClientService";

export default async function queryCategories(){
    const response = await Client.query({
        query: gql`
            query{
                categories{
                    name
                }
            }
        `
    })
    return response.data.categories;
}