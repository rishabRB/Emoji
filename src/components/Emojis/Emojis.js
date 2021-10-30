import React from 'react'
import styled from 'styled-components'

const EmojiContainer=styled.div`
width:150px;
height:200px;
border-radius:20px;
background:#010606 ;
margin:20px;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;

`
const Emo=styled.span`
font-size:50px;
`

const Button=styled.button`
width:80px;
height:30px;
box-sizing: border-box;
margin:20px;
margin-bottom:-30px;
padding: 0 5px;
background:#111;
color:#1b7;
font-weight: 600;
border-radius: 20px;
border: 0;
text-transform: uppercase;

&:hover{
    color:#fff
}

`

const Emoji = ({symbol}) => {
    return (
        <>
           <EmojiContainer>
               <Emo>{symbol}</Emo>
               <Button>Copy</Button>
           </EmojiContainer>
        </>
    )
}

export default Emoji
