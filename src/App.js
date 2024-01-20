
import './App.css';
import {useState,useEffect,useRef} from 'react'

function App() {
  const [length,setlength] = useState(10);
  const [char,setchar] = useState(false)
  const [num,setnum]=useState(false)
  const[input,setinput] = useState("")
 const refd = useRef(null);
    const passgene=useEffect(() => {
      let string = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
      let number = "123456789"
      let symbol = "!@#$%^&*()"
        let pass =""
        if(char){
          string = string+symbol
        }
        if(num){
          string =string + number
        }
      for(let i  = 1; i<=length;i++){
            pass = pass +string.charAt( Math.floor((Math.random() * string.length) +1))
      }
      setinput(pass)
  },[char,num,length])
 const copytext=()=>{
  refd.current.select();
    navigator.clipboard.writeText(input);
 }
  return (
   <div>
     <input type ="text"placeholder='Password' value={input}  ref={refd}></input>
      <button onClick={copytext}> Copy Text</button>
      <br></br>
      <input type="range" min ="8" max="100" onChangeCapture={(e)=>{setlength(e.target.value)}} value = {length}/> length :{length} 
            <br></br>
      <input type="checkbox" defaultChecked={num} onClick={()=>{setnum((pre)=> !pre)}}/>Number
      <input type="checkbox" defaultChecked={char} onClick={()=>{setchar((pre)=> !pre)}}/>Char
   </div>
  );
}

export default App;
