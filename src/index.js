console.log('Hello world');

// ----Array.form
let array = [1,2,3];
Array.from(array).forEach(($item) => {
 console.log($item);
})
// ----includes api
const array2 = [1,2,3,4];
array2.includes(5)
// ----Promise
Promise.resolve(1).finally()
// ----map
const arr = [1, 2, 3];
const arr2 = arr.map(item => item ** 2);
console.log(arr2);

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