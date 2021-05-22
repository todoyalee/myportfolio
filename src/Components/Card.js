
import React,{useState} from 'react'

import styled from 'styled-components'

import {colorDict} from './Necessities'
import {darken} from 'polished'
import { useSpring,animated,config } from "react-spring";






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
        transition: background 300ms ease-in-out;
        &:hover{
            background: darkblue;
        }
    `
 
const StyledCard = styled.div`
    background:#5785bd;
    border:3px ${darken(0.15,colorDict.headColor)} solid ;
    height:300px;
    border-radius:5px;
    display:flex;
    flex-direction:column;
    align-items:center;
    color: white;
    overflow-y:hidden;
    position: relative;
    
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
    font-size: 1rem;
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

const StyledImg = styled.img`
    width: 75px; 
    height: 75px; 
    object-fit: cover;
    border-radius: 100px;
    margin-left: 30px;
`

const FlexTop= styled.div`
    display:flex;
    align-items: center;
    width: 100%;
    column-gap:20px;

`





function Card({cardData}){

    const [hovered,setHovered]=useState(false)

    const animation = useSpring({
        transform : hovered? 'translateY(0px)' : 'translateY(40px)',
        opacity: hovered ? 1 : 0,
        config:config.slow
    })

    const AnimatedButton = animated(StyledButton);

    return(
        
        <StyledCard className="Card"
            onMouseOver={()=>{setHovered(true)}}
            onMouseOut={()=>{setHovered(false)}}
        >
            <FlexTop>
                <StyledImg src={cardData.image}></StyledImg>
                <div>
                    <StyledH1>{cardData.title}</StyledH1>
                    <StyledSmall>{cardData.parenthesis}</StyledSmall>
                </div>  
            </FlexTop>
            <Line></Line>
            <StyledPara>{cardData.paragraph}</StyledPara>
            
            <div style={{width: '90%'}}>
            
            <AnimatedButton 
                style={animation}
                onClick={()=>{
                    window.open(cardData.link,'_blank')
                }}
            >View on github</AnimatedButton>
            
            </div>
            
        </StyledCard>
        
    )

}

export default Card