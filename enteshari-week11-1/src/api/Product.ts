import apiClient from "@/api/config/ApiClient";
import {ProductType} from "@/types/api/Product";
import {ApiResponseType} from "@/types";


interface  Props{
    populate?: Array<'categories' | 'thumbnail' | 'gallery'>,
    filters?:{
        is_popular?:boolean,
    }
}
interface Filters{
    is_popular?:{
        $eq:boolean
    }

}


export function getAllProductsApiCall ({populate,filters}:Props):Promise<ApiResponseType<ProductType>>{
    const customFilter:Filters ={}
    if(filters?.is_popular){
        customFilter.is_popular ={
            $eq:filters.is_popular,
        }
    }
    return  apiClient.get('/products',{
        params:{
            populate:populate?.join(','),

            filters: customFilter,
        }
    })
}