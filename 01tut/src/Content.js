const Content = () => {
    const handleNameChange = () => {
        const names = ['Bob', 'Kevin', 'Ray'];
        const int = Math.floor(Math.random() * 3 );
        return names[int];
    }

    const handleClick = () => {
        console.log('You Clicked..it')
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
                Hello {handleNameChange()}!
            </p>
            <button onClick={handleClick}>Click it</button>
            <button onClick={() => {handleClick2('Dave')}}>Click it Person</button>
            <button onClick={(e) => {handleClick3(e)}}>Click it Event</button>
        </main>
    )
}

export default Content
