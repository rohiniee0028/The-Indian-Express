
function sportsReducer(sportsState,action){
    switch(action.type){
       case "ADD_ITEM_TO_SPORTS" :{
          return {
            ...sportsState,
           sportsData:[action.payload]
          }
       }
       default: return sportsState;
    }
    
}
export default sportsReducer;