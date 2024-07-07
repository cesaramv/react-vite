import { useState } from "react"

export const useCounter = (initialValue = 10) => {
    const [counter, setCouter] = useState(initialValue);

    const increment = (value = 1) => {
        setCouter(counter + value);
    }

    const reset = () => {
        setCouter(0);
    }

    const decrement = (value = 1) => {
        if(counter <= 0) return;
        setCouter(counter - value);
    }

    return {
        counter,
        increment,
        reset,
        decrement
    };
}