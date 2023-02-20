import {GET_CATEGORIES} from "../../Actions/categoriesAction";


const initialState={
    categories:[
        {id:1, name:"Iphone",},
        {id:2, name:"MacBook",},
        {id:3, name:"Samsung"},
        {id:4, name:"Xiaomi",},
    ]
}

const categoriesReducer = (state=initialState,action)=>{
    switch (action.type){
        case GET_CATEGORIES:
            return {
                ...state
            }
        default : return state
    }
}

export default categoriesReducer