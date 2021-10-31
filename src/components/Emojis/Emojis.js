import {React,useState} from 'react'
import styled from 'styled-components'
import {CopyToClipboard} from 'react-copy-to-clipboard'


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

@media screen and (max-width:468px){
    width: 120px;
    height: 150px;
}

`
const Emo=styled.span`
font-size:50px;

@media screen and (max-width:468px){
    font-size:40px
}
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
    const [copyText,setcopyText]=useState('copy')
    return (
        <>
           <EmojiContainer>
               <Emo>{symbol}</Emo>
               <CopyToClipboard text={symbol}>
               <Button onClick={()=>setcopyText('Copied')}>{copyText}</Button>
               </CopyToClipboard>
              </EmojiContainer>
        </>
    )
}

export default Emoji
