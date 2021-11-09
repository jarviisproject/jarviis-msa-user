import React from "react";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { LayOut } from "features/common";
// userjoin 페이지 아래 추가
export default function cheacklist(){
    return(<>
        <FormControl component="fieldset">
        <FormLabel component="legend">What's your Job?</FormLabel>
        <RadioGroup
            aria-label="gender"
            defaultValue="female"
            name="radio-buttons-group"
        >
            <FormControlLabel value="teacher" control={<Radio />} label="teacher" />
            <FormControlLabel value="doctor" control={<Radio />} label="doctor" />
            <FormControlLabel value="student" control={<Radio />} label="student" />
            <FormControlLabel value="companyman" control={<Radio />} label="companyman" />
            <FormControlLabel value="developer" control={<Radio />} label="developer" />
        </RadioGroup>
        </FormControl>
        <FormControl component="fieldset">
        <FormLabel component="legend">What are you interested in?</FormLabel>
        <RadioGroup
            aria-label="gender"
            defaultValue="female"
            name="radio-buttons-group"
        >
            <FormControlLabel value="exercise" control={<Radio />} label="exercise" />
            <FormControlLabel value="diet" control={<Radio  />} label="diet" />
            <FormControlLabel value="movie" control={<Radio />} label="movie" />
            <FormControlLabel value="book" control={<Radio />} label="book" />
            <FormControlLabel value="computergame" control={<Radio />} label="computergame" />
      </RadioGroup>
        </FormControl>
</>
    )
}