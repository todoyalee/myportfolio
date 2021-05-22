
import React from 'react'

import styled from 'styled-components'

import {colorDict} from './Necessities'
import {darken} from 'polished'




const StyledButton= styled.button`
        position: relative;
        z-index: 1;
        cursor: pointer;
        background: blue ;
        border: none;
        margin-bottom: 15px;
        width: 100% ;
        font-size: 1.3rem;
        padding: 10px 0;
        color:inherit;
        border-radius: 5px;
        opacity: 0;
        transform : translateY(30px);
        transition: background 300ms ease-in-out, transform 300ms ease-in-out,
            opacity 300ms ease-in-out;
        &:hover{
            background: darkblue;
        }
    `
 
const StyledCard = styled.div`
    background:#5785bd;
    border:3px ${darken(0.15,colorDict.headColor)} solid ;
    height:400px;
    border-radius:5px;
    display:flex;
    flex-direction:column;
    align-items:center;
    color: white;
    overflow-y:hidden;
    position: relative;
    &:hover ${StyledButton}{
        transform : none;
        opacity: 1;
    }
    &::after{
        content:'';
        position: absolute; 
        top:0;right:0;left:0;bottom:0;
        background: rgba(0,0,0,0.1);
        opacity:0;
        z-index:0;
        transition: opacity 300ms ease-in-out;
    }
    &:hover::after{
        opacity:1;
    }
`

const StyledH1 = styled.h1`
    margin-top: 10px;
`

const Line = styled.div`
    height: 1px;
    width: 100%;
    background: white;
`

const StyledSmall = styled.small`
    font-size:0.7rem; 
`
const StyledPara= styled.p`
    width: 90%;
    text-align:left;
    font-size:15px;
    flex:1;
    overflow-y:scroll;
    &::-webkit-scrollbar{
        width: 5px;
    }

    ::-webkit-scrollbar-track {
        background: transparent;
        }

    /* Handle */
    ::-webkit-scrollbar-thumb {
        background: rgba(0, 0, 0, 0.482);
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
        background: rgba(0, 0, 0, 0.482);
    }
`





function Card(){

    return(
        
        <StyledCard className="Card">
            <StyledH1>This is a Title!</StyledH1>
            <StyledSmall>(reactjs/nodejs/mongodb)</StyledSmall>
            <Line></Line>
            <StyledPara>
                Dalideco ist eine groBe kartoffel. Er ist sehr intelligent und er  verstehen alles so gut.
                er kommt aus tunisia und er isst ein student auf insat
            </StyledPara>
            
            <div style={{width: '90%'}}>
            
            <StyledButton onClick={()=>{
                window.open('https://github.com','_blank')
            }}>View on github</StyledButton>
            
            </div>
            
        </StyledCard>
        
    )

}

export default Card