export const name=(state = "fikir",action)=>{
    switch(action.type){
        case "FNAME":
            return action.payload
        default:
            return state
    }
}


export const Lname=(state = "getu",action)=>{
    switch(action.type){
        case "LNAME":
            return action.payload
        default:
            return state
    }
}
export const Age=(state = 0,action)=>{
    switch(action.type){
        case "AGE":
            return action.payload
        default:
            return state
    }
}
export const Gender=(state = "Female",action)=>{
    switch(action.type){
        case "GENDER":
            return action.payload
        default:
            return state
    }
}
export const Profession=(state = "student",action)=>{
    switch(action.type){
        case "PROFESSION":
            return action.payload
        default:
            return state
    }
}


//name:"John"

//to display the value ===> useSelector
//t make an action    =====> useDispatch