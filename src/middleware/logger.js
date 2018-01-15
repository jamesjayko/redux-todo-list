export default store => next => action => {
  console.log("logger:", action);
    next(action);
    console.log('next state:', store.getState());
  return action;
};

// ********* above is a shorthand of below code ********
// export default function(store){
//     return function (next){
//         return function (action){
//             // code here
//         }
//     }
// }
// *****************************************************
