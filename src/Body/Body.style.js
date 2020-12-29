import styled from 'styled-components';

/*
props.change refers to the prop "change" being called when 
the bar element is mapped too in Body.js 



*/
export const Bar = styled.div `

    width:4%; 
    background-color: black;
    height:${(props) => props.height}; 
    background-color: ${ (props) => props.change ? "#eb4034" : "#a29b99" };
    margin-left:5px;
    
`;

export const BarLabel = styled.p ` 

    font-size:100%; 
    font-weight:600;
    Color:black; 
    text-align:center;
    padding-top:10px;
`;


export const Container = styled.div `

    display:flex;
    flex-direction:row; 
    justify-content:center;
    width: 78%; 
    margin-left:11%;

`;