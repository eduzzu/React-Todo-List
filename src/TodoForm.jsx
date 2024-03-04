import ListItem from '@mui/material/ListItem';
import TextField  from '@mui/material/TextField';
import { useState } from 'react';
import Create from "@mui/icons-material/Create"
import {InputAdornment} from "@mui/material";
import {IconButton} from "@mui/material";


export default function TodoForm({addTodo}){
    const [text, setText] = useState("");
    const handleChange = (evt) =>{
        setText(evt.target.value)
    }
    const handleSubmit = (evt) =>{
      evt.preventDefault();
      addTodo(text);
      setText("");
    }
    return(
        <ListItem>
          <form onSubmit={handleSubmit}>
        <TextField id="outlined-basic" l
        label="Add a todo" 
        variant="outlined" 
        onChange={handleChange} 
        value={text}
        InputProps={{
            endAdornment: (<InputAdornment position="end">
            <IconButton
              type='submit'
              aria-label="toggle password visibility"
              edge="end">
              <Create />
            </IconButton>
          </InputAdornment>
        ),
        }}

           />
           </form>
    </ListItem>
    );
   
}
