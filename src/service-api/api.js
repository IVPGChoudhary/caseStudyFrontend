import axios from 'axios'

const BONDAPI="http://localhost:5129/api/Bond";
const EquityAPI="http://localhost:5129/api/Equities";

export const addBond = async(Data1) => {
    try{
    console.log(Data1);
        return await axios.post("http://localhost:5129/api/Bond", Data1);
    }catch(error){
        window.alert(error.message)
    }
}


    export const allbond= async() => {
        try{
            return await axios.get(BONDAPI);
        }catch(error){
            window.alert(error.message)
        }
    }


    export const getbond= async(data) => {
        try{
            return await axios.get(`${BONDAPI}/${data }`);
        }catch(error){
            window.alert(error.message)
        }
    }
    
    export const editbond= async(data,id) => {
        try{
            return await axios.put(`${BONDAPI}/${id }`,data);
        }catch(error){
            window.alert(error.message)
        }
    }
    
    export const deletebonddata= async(id) => {
        console.log(id);
        try{
            return await axios.delete(`${BONDAPI}/${id}`)
        }catch(error){
            window.alert(error.message)
        }
    }


    export const addEquity = async(Data) => {
            try{
                console.log(Data);
                 return await axios.post( EquityAPI,Data);
            }catch(error){
            console.log(error)
                window.alert(error.response.data)
            }
        }

        



        export const allequity= async() => {
            try{
                return await axios.get(EquityAPI);
            }catch(error){
                window.alert(error.message)
            }
        }
    
    
        export const getequity= async(data) => {
            try{
                return await axios.get(`${EquityAPI}/${data }`);
            }catch(error){
                window.alert(error.message)
            }
        }
        
        export const editequity= async(data,id) => {
            try{
                return await axios.put(`${EquityAPI}/${id }`,data);
            }catch(error){
                window.alert(error.message)
            }
        }
        
        export const deleteequtiydata= async(id) => {
            console.log(id);
            try{
                return await axios.delete(`${EquityAPI}/${id}`)
            }catch(error){
                window.alert(error.message)
            }
        }