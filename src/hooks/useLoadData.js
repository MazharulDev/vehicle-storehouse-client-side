import { useEffect, useState } from "react";

const useLoadData = () => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        fetch('https://vehicle-storehouse.up.railway.app/item')
            .then(res => res.json())
            .then(data => setItems(data))
    }, [])
    return [items, setItems];
}
export default useLoadData;