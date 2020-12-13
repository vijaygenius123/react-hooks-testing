import React, {useState, useEffect} from "react";

const Counter = ({onCountChange}) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        onCountChange(count);
    })

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    )
}

export default Counter;
