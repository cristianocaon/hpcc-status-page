import { useState } from 'react';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from '@material-ui/core/styles';

// Change later for partition field filtering
import requestSummary from '../service/requestSummary';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const Filter = ({ category, onClick }) => {
  const classes = useStyles();
  const [item, setItem] = useState('');

  const handleChange = (event) => {
    setItem(event.target.value);
  };

  let items = undefined;
  if (category === 'partition') {
    items = Object.keys(requestSummary()).filter(key => {
      return key !== 'error' && key !== 'total';
    });
  } else if (category === 'status') {
    items = Object.keys(requestSummary().nocona.jobs).filter(key => {
      return key.charAt(0) === '%';
    }).map(key => (key.slice(1)));
  }

  return (
    <FormControl variant="filled" className={classes.formControl}>
      <InputLabel id="demo-simple-select-filled-label">{category.charAt(0).toUpperCase() + category.slice(1)}</InputLabel>
      <Select
        labelId="demo-simple-select-filled-label"
        id="demo-simple-select-filled"
        value={item}
        onChange={handleChange}
      >
        <MenuItem value="none">
          <em>None</em>
        </MenuItem>
        {items.map(item => {
          return (
            <MenuItem value={item} onClick={onClick}>{item.charAt(0).toUpperCase() + item.slice(1)}</MenuItem>
          )
        })}
      </Select>
    </FormControl>
  )
}

export default Filter;