
const Calculator = () => {
    const [input, setInput] = useState('');

    const handleClick = (value) => {
      if (value === '=') {
        try {
          setInput(eval(input).toString());
        } catch (error) {
          setInput('Error');
        }
      } else if (value === 'AC') {
        setInput('');
      } else {
        setInput(input + value);
      }
}
}
export default Calculator