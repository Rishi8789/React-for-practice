

const initialState={
    isAuth:false,
    token:null,
    isLoading:false,
    isError:false
}

export const authReducer =(state=initialState,{type,payload})=>{

    switch(type){
        default:{return state}
    }
}