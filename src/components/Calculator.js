import { Fragment, useState } from 'react'
import classes from './Calculator.module.css'
import * as math from 'mathjs';

const Calculator=function(){
    const[value,setValue]=useState('');
    const[result,setResult]=useState('');
    const equationMaker=(event)=>{
        const content = event.target.textContent;
        setValue(prev=>prev+content
            )      
    }
    const calculateResult=()=>{
       
        try {
            const res=math.evaluate(value)
            setResult(res)
        }
        catch(error){
            setResult("Nan")
        }
        
        setValue("")
    }
    const ResetCalc=()=>{
        setResult("")
        setValue("")
    }
    return(
    <Fragment>
        <div className={classes["main-container"]}>
        <div className={classes['grid-container1']}>
    <div className={classes['grid-item0']}><p>{value}</p></div> 
    <div className={classes['grid-item']}><p>{result}</p></div>
  </div>
  <div className={classes['grid-container']}>

      <div className={`${classes['grid-item1']} ${classes['column-span-2']} ${classes.clear}`}onClick={ResetCalc}>AC</div>
      <div className={`${classes['grid-item1']} ${classes.operator}` } onClick={equationMaker}>/</div> 
      <div className={`${classes['grid-item1']} ${classes.operator}` }onClick={equationMaker}>*</div>

      <div className={`${classes['grid-item1']} ${classes.number}`}onClick={equationMaker}>7</div> 
      <div className={`${classes['grid-item1']} ${classes.number}`}onClick={equationMaker}>8</div>
      <div className={`${classes['grid-item1']} ${classes.number}`}onClick={equationMaker}>9</div> 
      <div className={`${classes['grid-item1']} ${classes.operator}`}onClick={equationMaker}>-</div>
 
      <div className={`${classes['grid-item1']} ${classes.number}`}onClick={equationMaker}>4</div> 
      <div className={`${classes['grid-item1']} ${classes.number}`}onClick={equationMaker}>5</div>
      <div className={`${classes['grid-item1']} ${classes.number}`}onClick={equationMaker}>6</div> 
      <div className={`${classes['grid-item1']} ${classes.operator}`}onClick={equationMaker}>+</div>
    
      <div className={`${classes['grid-item1']} ${classes.number}`}onClick={equationMaker}>1</div> 
      <div className={`${classes['grid-item1']} ${classes.number}`}onClick={equationMaker}>2</div>
      <div className={`${classes['grid-item1']} ${classes.number}`}onClick={equationMaker}>3</div> 
      <div className={`${classes['grid-item1']} ${classes['row-span-2']} ${classes.equal}`} onClick={calculateResult}>=</div> 
    

      <div className={`${classes['grid-item1']} ${classes['column-span-2']} ${classes.number}`}onClick={equationMaker}>0</div> 
      <div className={`${classes['grid-item1']}  ${classes.number}`}onClick={equationMaker}>.</div>
     
     
    
    </div>
    </div>
    </Fragment>
    )
}
export default Calculator