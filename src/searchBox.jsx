import TextField from '@mui/material/TextField';
import './searchBox.css';

const SearchBox = () => {
  return (
    <div className="searchBox">
      <h1 className='font-bold text-xl m-2'>Search the weather</h1>
      <form>
        <TextField className='bg-zinc-200' id="city" label="City" variant="outlined" margin="normal" required  sx={{
    "& .MuiOutlinedInput-root": {
      backgroundColor: "rgba(0,0,0,0.1)",
      color: "black",

      "& fieldset": {
        borderColor: "rgba(0,0,0,0.8)",
      },

      "&:hover fieldset": {
        borderColor: "#000",
      },

      "&.Mui-focused fieldset": {
        borderColor: "#000",
        borderWidth: "2px",
      },
    },

    "& .MuiInputLabel-root": {
      color: "rgba(0,0,0,0.8)",
    },

    "& .MuiInputLabel-root.Mui-focused": {
      color: "#000",
    },
  }}
   />
      </form>
      
    </div>
  );
};

export default SearchBox;



