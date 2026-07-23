import { useState } from "react";

function Button() {

    const [count, setCount] = useState(0);

    return (
        <div>
            <button onClick={() => setCount(count + 1)}>
                Click Me
            </button>

            <p>Button clicked {count} times.</p>
        </div>
    );
}

export default Button;