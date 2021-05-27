import Axios from "axios";

export default class AlignClient {
    static align(request){
        return Axios.post('/Align',request,{
            headers: { 'Content-Type': 'application/json' }
        })
    }
    static getGene(){
        return Axios.get('/Gene',{

        })
    }
}
