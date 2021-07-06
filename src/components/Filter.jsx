import { useState } from 'react';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const Filter = ({ title, partitions, onClick }) => {
  const classes = useStyles();
  const [item, setItem] = useState('');

  const handleChange = (event) => {
    setItem(event.target.value);
  };

  let items = partitions || ['None', 'Running', 'Completing', 'Pending', 'Other'];

  return (
    <FormControl variant="filled" className={classes.formControl}>
      <InputLabel id="demo-simple-select-filled-label">{title}</InputLabel>
      <Select
        labelId="demo-simple-select-filled-label"
        id="demo-simple-select-filled"
        value={item}
        onChange={handleChange}
      >
        {items.map(item => {
          return (
            <MenuItem value={item}
              onClick={onClick}>
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </MenuItem>
          )
        })}
      </Select>
    </FormControl>
  )
}

export default Filter;