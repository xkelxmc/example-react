import {useState} from "react";

export const TextInput = () => {
  const [value, setValue] = useState('')

  const handleChange = (event) => {
    setValue(event.target.value)
  }

  return (
    <div style={{borderRadius: '10px', border: '1px solid #999999', padding: '10px', marginBottom: '10px'}}>
      <input type="text" value={value} onChange={handleChange} style={{marginBottom: '4px'}}/>
      <div style={{borderRadius: '4px', padding: '3px', backgroundColor: 'rgba(0,0,0,0.5)', minHeight: '24px'}}>
        {value}
      </div>
    </div>
  )
}
