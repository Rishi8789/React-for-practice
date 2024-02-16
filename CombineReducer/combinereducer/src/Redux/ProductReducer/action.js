import { get_data_Failure, get_data_Request, get_data_Success } from "./ActionType"



export const getDataRequest=()=>{
    return {type:get_data_Request}
}
export const getDataSuccess=()=>{
    return {type:get_data_Success}
}
export const getDataFailure=()=>{
    return {type:get_data_Failure}
}