import { configureStore } from "@reduxjs/toolkit";
import favoriteslice from "./slices/favorite";
import { movieReducer } from "./slices/People";



const store=configureStore({
    reducer:{
        favorite:favoriteslice,
        movie:movieReducer    
    }
})


///global state
// {
//     language:{language:'en'},
    //    loader:{loader:false}
// }




export default store