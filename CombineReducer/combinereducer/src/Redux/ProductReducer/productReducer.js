import { get_data_Failure, get_data_Request, get_data_Success } from "./ActionType";


const initialState = {
product:[],
isLoading:false,
isError: false

};


export const productReducer = (state= initialState,{type,payload})=>{
   console.log(payload)
   switch(type){
      case get_data_Request:{
         return { ...state,
                   isLoading:true
         }
      }

      case get_data_Success:{
         return { ...state,
                   isLoading:false,
                   product:payload
         }
      }
      

      case get_data_Failure:{
         return { ...state,
                   isLoading:false,
                   product:[],
                   isError:true
         }
      }
    default:{ return state;}
   }
}