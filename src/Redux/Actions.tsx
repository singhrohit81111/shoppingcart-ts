export const AddProduct=(e:any)=>{
    return {type:"Add",payload:e};
}

export const DeleteProduct=(e:any)=>{
    return {type:"Delete",payload:e}
}

export const Decrement=(e:any)=>{
    return {type:"decrement",payload:e}
}