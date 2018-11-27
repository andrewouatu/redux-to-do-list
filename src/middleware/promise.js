export default (store) => (next) => async (action) => {

    if (!action.payload || !action.payload.then) {
        //No payload property
        // - OR -
        // Not a promise

        return next(action);
    }

    //Has a promise on the payload property

    //With Async08
    const response = await action.payload;

    const newAction = {
        ...action,
        payload: response
    };

    store.dispatch(newAction);

    return response;
}

//     action.payload.then((response) => {
//         const newAction = {
//             ...action,
//             payload: response
//         };
//
//         store.dispatch(newAction);
//     });
//
//     return action.payload;
// }

//Long version of the same export above
// export default function(store){
//     return function(next){
//         return function(action){
//             //Code goes here
//         }
//     }
// }