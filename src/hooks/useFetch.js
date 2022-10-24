import { useState } from "react";

const useFetch =  () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const sendRequest = async (requestConfig, responseHandler) => {
        console.log(requestConfig.url);
        setLoading(true);
        try {
            const response = await fetch(requestConfig.url, {
                method: "POST",
                body: requestConfig.body,
                headers: {
                    'Content-Type': 'application/json',
                }
            });
            if(!response.ok) {
                throw new Error("there is something wrong")
            }
            const data = await response.json();
            responseHandler(data);
      } catch(e) {
        setError("there is something wrong");
        setLoading(false)
      }
    }
      
      return [loading, error, sendRequest]
}

export default useFetch;