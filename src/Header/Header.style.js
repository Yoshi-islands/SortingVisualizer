/*Using the style components extension to introduce some css 
properties for certain components*/
import styled from 'styled-components';


/*Each of the style sets correlate to the CONTAINER OR HEADER
for example or some general in-depth styling that can be abstracted */

/* 
padding : top, right, bottom and left in this order 
*/
export const Container = styled.div `

    height: 100px;
    width: 100%;
    background-color: black; 
    align-content:center;
    display:flex; 
    flex-direction: row;
    justify-content:space-around;

`;


export const ButtonLabel = styled.p `

    Color:${ (props) => props.disableColor ? "#ff1100" : "white" };
    font-size:120%; 
    padding-bottom:10px;
    text-align:center;
    disabled:
 

`;

export const Button = styled.button `

    Color:${ (props) => props.disableColor ? "#ff1100" : "white"  };
    font-size:120%;
    border:none;
    background:none;

`;

export const SliderContainer = styled.div `

    width: 15%;
    padding-top: 1%;
    display: inline-block;

`;