import React from 'react'

function Input({handleChange, textValue}) {
  return (
    <div>
        <form>
            <div className="form-group">
                <input 
                       value={textValue}
                       onChange = {(e) => {
                         console.log(e.target.value);
                         handleChange(e.target.value);
                       }}
                       type="text" 
                       className="form-control" 
                       id="exampleInputEmail1" 
                       aria-describedby="emailHelp" 
                       placeholder="Type shit"/>
            </div>
        </form>

    </div>
  )
}


export default Input;