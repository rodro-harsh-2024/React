import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
    const [data, setData] = useState({});

    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-03-06/v1/currencies/${currency}.json`)
            .then(res => res.json())  // ✅ Corrected return of JSON
            .then(res => {
                setData(res[currency]);  // ✅ Updating state correctly
                console.log("Fetched data:", res[currency]);  // Debugging
            })
            .catch(err => console.error("Fetch error:", err));  // ✅ Catching errors

    }, [currency]);

    return data;
}

export default useCurrencyInfo;
