import { ADD_BLOG_SUCCESS, GET_BLOG_SUCCESS } from "./actionType"

const init = {
   data : []
}

export const writeBlogReducer = (store = init, {payload, type} ) => {

    switch(type){
        case ADD_BLOG_SUCCESS :
            return { ...store }
        case GET_BLOG_SUCCESS :
            return { ...store ,data : payload}
        default : 
        return { ...store}
    }
} 