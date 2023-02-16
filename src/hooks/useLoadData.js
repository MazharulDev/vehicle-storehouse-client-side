import { useEffect, useState } from "react";

const useLoadData = () => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        fetch(`${process.env.REACT_APP_SERVER_LINK}/item`)
            .then(res => res.json())
            .then(data => setItems(data))
    }, [])
    return [items, setItems];
}
export default useLoadData;