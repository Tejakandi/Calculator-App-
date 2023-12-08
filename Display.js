import react,{useState} from 'react'
const App=()=>{
  const[result,setResult]=useState("")

  const handler=(e)=>{
    setResult(result.concat(e.target.name))
  }
  const clear=()=>{
    setResult("");
  }
  const backspace=()=>{
    setResult(result.slice(0,result.length-1))
  }
  const calculate=()=>{
    try{
      setResult(eval(result).toString())
    }catch(err){
      setResult("error")
    }
  }
  return(
    <div className="container">
      <center>
      <form>
        <input type="text" value={result} name="result"
        />
        
      </form>
      </center>
      <div className="keypad">
        <button onClick={clear} id="clear">Clear</button>
        <button onClick={backspace}id="backspace">C</button>
        <button name="/"onClick={handler}>&divide;</button>
        <button name="7"onClick={handler}>7</button>
        <button name="8"onClick={handler}>8</button>
        <button name="9"onClick={handler}>9</button>
        <button name="*"onClick={handler}>&times;</button>
        <button name="4"onClick={handler}>4</button>
        <button name="5"onClick={handler}>5</button>
        <button name="6"onClick={handler}>6</button>
        <button name="-"onClick={handler}>&ndash;</button>
        <button name="1"onClick={handler}>1</button>
        <button name="2"onClick={handler}>2</button>
        <button name="3"onClick={handler}>3</button>
        <button name="+"onClick={handler}>+</button>
        <button name="0"onClick={handler}>0</button>
        <button name="."onClick={handler}>.</button>
        <button onClick={calculate} id="result">=</button>
      </div>

    </div>

  )
}
export default App