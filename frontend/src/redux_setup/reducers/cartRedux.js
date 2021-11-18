import {createSlice} from "@reduxjs/toolkit"

const slice= createSlice({
    name:"cart",
    initialState:{
        products:[],
        quantity:0,
        total:0,
    },
    reducers:{

        addProducts:(state,action)=>{ 
          
            
            state.products.push(action.payload);
            state.total=state.products.reduce((total,item)=>{
                return total+=item.price*item.quantity
            },0);
         
            state.quantity=state.products.length;
        },
       deleteProducts:(state,action)=>{
           state.products=state.products.filter(item=>item._id!==action.payload.id)
           state.total=state.products.reduce((total,item)=>{
            return total+=item.price*item.quantity
        },0);
           state.quantity=state.products.length;
       },
       clearCartItems:(state,action)=>{
        state.products=state.products.filter(item=>item===0)
        
        state.quantity=state.products.length;
    },
       initializeCart:(state,action)=>{
  
           action.payload.products.map(item=>
           state.products.push(item)
           
           )
           state.total=state.products.reduce((total,item)=>{
            return total+=item.price*item.quantity
        },0);
           state.quantity=state.products.length
       }
    }
})

export const {addProducts,deleteProducts,initializeCart,clearCartItems} = slice.actions

export default slice.reducer;