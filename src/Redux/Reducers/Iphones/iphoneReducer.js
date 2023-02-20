import {GET_IPHONE} from "../../Actions/appleAction";
import iphone14 from "../../../Img/Iphones/i14.jpg";
import iphone14plus from "../../../Img/Iphones/i14plus.jpg";
import iphone14pro from "../../../Img/Iphones/i14pro.jpg";


const initialState={
    iphone:[
        {id:1, name:"Iphone 13", price:700, img:iphone14},
        {id:2, name:"Iphone 14", price:800, img:iphone14},
        {id:3, name:"Iphone 14 plus", price:1000, img:iphone14plus},
        {id:4, name:"Iphone 14 pro", price:1500, img:iphone14pro},
    ]
}

const iphoneReducer = (state=initialState,action)=>{
    switch (action.type){
        case GET_IPHONE:
            return {
                ...state
            }
        default : return state
    }
}

export default iphoneReducer