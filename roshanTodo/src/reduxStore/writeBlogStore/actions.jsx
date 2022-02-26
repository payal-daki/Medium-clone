import { ADD_BLOG_SUCCESS } from "./actionType";

export const addBlogSuccess = () => (
  {
      type : ADD_BLOG_SUCCESS
  }
) 

export const getBlogSuccess = (payload) => (
   {
     payload,
     type : payload
   }
)