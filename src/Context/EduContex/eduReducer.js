
function eduReducer(eduState,action){
    switch(action.type){
       case "ADD_ITEM_TO_EDUCATION" :{
          return {
            ...eduState,
           eduData:[action.payload]
          }
       }
       default: return eduState;
    }
    
}
export default eduReducer;