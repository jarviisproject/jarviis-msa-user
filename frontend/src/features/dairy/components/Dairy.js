import React, { useEffect, useState } from "react";
import sunny from 'features/dairy/images/sunny.png'
import dairy from 'features/dairy/images/a.png'
import left from 'features/dairy/images/left.png'
import right from 'features/dairy/images/right.png'
import sketch from 'features/dairy/images/sketch.png'
import "features/common/font/font.scss"
import styled from 'styled-components'
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import StaticDatePicker from '@mui/lab/StaticDatePicker';
import {LayOut} from 'features/common'
import 'features/dairy/style/Dairy.scss'


export default function Dairy() {
    const [test, setTest] = useState(new Date())
    const today = new Date()
    const dateToString = (day) => day.toISOString().substring(0,10)
    return(
        <LayOut>
            <div class="dairy_wrapper">
            <div class="dairy_container">
            <div style={{width:'500px', float:'left'}}>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
            <StaticDatePicker
                orientation="landscape"
                openTo="day"
                value={test}
                maxDate={today}
                onChange={(newValue) => {
                setTest(newValue);
                }}
                renderInput={(params) => <TextField {...params} />}
            />
            </LocalizationProvider>
            </div>
            <Div>
            {/* <h1>Dairy test</h1> */}
        
                
                    
                    {/* <label><input type="date" id="start" value={dateToString(test)} max={dateToString(today)}/></label> */}
                    <button onClick={() => setTest(today)}>오늘 바로 가기 </button>
                    <table border='1px' style={{width:'100%', margin:'auto', padding:'10em', borderCollapse:'collapse', borderRadius:'30px'}}>
                        <tr>
                            <td style={{width:'15%'}}><img class='dairy-img' src={left} onClick={()=> setTest(new Date(test.setDate(test.getDate()-1)))}/></td>
                            <td style={{width:'50%'}}><DairySmallText>{test.toLocaleString('ko-KR', {
                                        year: 'numeric',
                                        month: 'long',
                                        day: 'numeric',
                                        weekday:'long'})}</DairySmallText></td> 
                            <td style={{width:'20%'}}><DairySmallText>날씨는 맑음 !</DairySmallText><img class='dairy-img' src={sunny}/></td>
                            <td style={{width:'15%'}}>{test.toISOString().substring(0, 10) < today.toISOString().substring(0, 10) 
                                ? <img class='dairy-img' src={right} onClick={()=> setTest(new Date(test.setDate(test.getDate()+1)))}/>
                                :<></>}</td>
                        </tr>
                        <tr>
                            <td colSpan='4'><DairySmallText>제목 : 안주현의 그림 일기</DairySmallText></td>
                        </tr>
                        <tr>
                            <td colSpan='4'><img class='dairy-img' src={dairy}/></td>
                        </tr>
                        <tr>
                            <td colSpan='4'><DairyText>안녕하세오. 안주현이에오 이건 그림일기에오</DairyText></td>
                        </tr>
                    </table>
                
    
    </Div>
    </div>
    </div>
    </LayOut>)
}

const DairyText = styled.div`
    font-family: 'UhBeeRami';
    font-size: 20px;
    font-weight: bold;
`
const DairySmallText = styled.div`
    font-family: 'UhBeeRami';
    font-size: 10px;
    font-weight: bold;
`
const Div = styled.div`
    text-align: center;
    float:right;
`