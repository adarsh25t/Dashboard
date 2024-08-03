import * as React from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

export default function SelectBarchart() {
    const [select, setSelect] = React.useState<string>("10");

    const handleChange = (event: SelectChangeEvent) => {
        setSelect(event.target.value);
    };

    return (
        <FormControl sx={{ m: 1, minWidth: 120 }} size="small">

            <Select
                labelId="demo-select-small-label"
                id="demo-select-small"
                value={select}
                onChange={handleChange}
                sx={{
                    color: 'white',
                    '& .MuiOutlinedInput-notchedOutline': { borderColor: 'white' },
                    '&:hover .MuiOutlinedInput-notchedOutline': { borderColor: 'white' },
                    '& .MuiSvgIcon-root': { fill: 'white' },
                    borderRadius: '50px',
                    backgroundColor: 'secondary.main',
                    padding: '0px 10px'
                }}
            >
                <MenuItem value={"10"} selected>Weekly</MenuItem>
                <MenuItem value={"20"}>Monthly</MenuItem>
                <MenuItem value={"30"}>Yearly</MenuItem>
            </Select>
        </FormControl>
    );
}
