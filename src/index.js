console.log('Hello world');
[1, 2, 3].map(n => n + 1);
function DiceRoll(){
    const getRandomNumber = () => {
        return Math.ceil(Math.random() * 6);
    };

    const [num, setNum] = useState(getRandomNumber());

    const handleClick = () => {
        const newNum = getRandomNumber();
        setNum(newNum);
    };

    return (
        <div>
            Your dice roll: {num}.
            <button onClick={handleClick}>Click to get a new number</button>
        </div>
    );
};