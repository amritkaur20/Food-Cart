export const ADD = (item)=>{
    return{
            type:"ADD_CART",
            payload:item

        }   
}

//DELETE items

export const DELETE = (id)=>{
    return{
            type:"DELETE_CART",
            payload:id

        }   
}

//decrement items

export const REMOVE = (iteam) => {
    return {
        type: "REMOVE_CART",
        payload: iteam
    }
}