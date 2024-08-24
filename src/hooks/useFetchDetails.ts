import axios from "axios"
import { useEffect, useState } from "react"

 

const useFetchDetails = (endpoint : string) : any =>{
    const [data,setData] = useState()
    const [loading,setLoading] = useState(false)
    const [error, setError] = useState(false)

    const fetchData = async()=>{
        try {
            setLoading(true)
            const response = await axios.get(endpoint)
            setLoading(false)
            setData(response.data)
        } catch (error) {
            setError(true)
       }
    }
     
    useEffect(()=>{
        fetchData()
    },[endpoint])
    
    return { data , loading , error}
}

export default useFetchDetails