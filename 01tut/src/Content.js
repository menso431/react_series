import { useState } from 'react';

const Content = () => {
    const [name, setName] = useState('Dave');
    const [count, setCount] = useState(0);

    const handleNameChange = () => {
        const names = ['Bob', 'Kevin', 'Ray'];
        const int = Math.floor(Math.random() * 3 );
        setName(names[int]);
    }

    const handleClick = () => {
        setCount(count + 1)
        console.log(count)
    }
    const handleClick2 = (name) => {
        console.log(`${name} was clicked`)
    }
    const handleClick3 = (e) => {
        console.log(e.target.innerText)
    }
    return (
        <main>
            <p onDoubleClick={handleClick}>
                Hello {name}!
            </p>
            <button onClick={handleNameChange}>Change Name</button>
            <button onClick={handleClick}>Count Click</button>
            <button onClick={() => {handleClick2('Dave')}}>Click it Person</button>
            <button onClick={(e) => {handleClick3(e)}}>Click it Event</button>
        </main>
    )
}

export default Content
