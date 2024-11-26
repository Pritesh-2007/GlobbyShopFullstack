import { createSlice } from "@reduxjs/toolkit";
    const initialState =
        { 
        value: 5, 
        items: [
        ], 
        cartcount: 0, // Initialize to 0 
        grandtotal:0,
        nettotal:0,
        totoaldiscount:0
        }; 
        initialState.cartcount = initialState.items.length;
        const CartSlice = createSlice(
        { 
        name: 'cart',     
        initialState,
        reducers: {
            cartcount: (state) => { state.value += 1; },
            addtocart: (state,action) => { 
                state.items.push(action.payload);
                state.cartcount=state.items.length;
                state.items.forEach((i)=>{
                   state.grandtotal+=i.price;
                   state.totoaldiscount+=i.discountPercentage;
                   
                } )
                state.grandtotal.toFixed(2)
                state.nettotal=(state.grandtotal-(state.grandtotal*state.totoaldiscount)/100).toFixed(2)
                console.log("Grandtotal:",state.grandtotal);

                console.log("nettotal:",state.nettotal);
                console.log(state.items.length)

            },
            removefromcart: (state,action) => { 
                 const index = state.items.findIndex(item => item.id === action.payload); 
                 console.log("index is :",index)
                 if (index !== -1)
                 { 
                    let {price, discountPercentage}=state.items[index];
                    console.log("price object",price)
                    state.grandtotal-=price;
                    state.totoaldiscount-=discountPercentage;
                    state.nettotal=(state.grandtotal-(state.grandtotal*state.totoaldiscount)/100).toFixed(2)
                    state.items.splice(index, 1); 
                    state.cartcount = state.items.length; 
                    console.log("all calculations",state.grandtotal)
                } 
                console.log("After remove",state.items.length);
                }, 
            }, 
        });
        export const{cartcount,addtocart,removefromcart}=CartSlice.actions;
        export default CartSlice.reducer;