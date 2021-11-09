import React from "react";
import { BarChart, BarData, LineChart, LineData, LogChart, PieChart, PieData } from "features/admin/index";
import styled from 'styled-components'

export default function AdminPage (){
    return(<>
        <div>
        <h1>admin Page</h1>
    </div>
    <ChartDiv>
        <BarChart data= {BarData}/>
    </ChartDiv>
    <ChartDiv>
        <LineChart data= {LineData}/>
    </ChartDiv>
    <ChartDiv>
        <PieChart data= {PieData}/>
    </ChartDiv>
    <ChartDiv>
        <LogChart/>
    </ChartDiv>
    <a class="gradient-btn" href="#">로그아웃</a>


</>
    )
}
const ChartDiv = styled.div`
    margin: 0 auto;
    height: 400px;
    width: 850px;
`