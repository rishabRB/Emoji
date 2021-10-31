import {React,useEffect,useState} from 'react'
import data from '../../Data/emojiList.json';
import Emoji from '../Emojis/Emojis'
import styled from 'styled-components';


const MainSectionContainer=styled.div`
width:100%;
height:100vh;
box-sizing: border-box;
background:#010606;
display: flex;
justify-content: center;
align-items: center;
`

const MainContainer=styled.div`
display: flex;
width:100%;
height:90%;
border-radius: 20px;
background: #111;
flex-direction: column;
justify-content: center;
align-items: center;
margin:100px;
box-sizing: border-box;
`

const Heading=styled.div`
font-size:40px;
margin: 40px 0;
color: #1b7;
font-weight:600;
text-transform: uppercase;
text-align:center;

@media screen and (max-width:468px){
    font-size: 35px;
}

`
const SearchContainer=styled.div`
position: relative;
display: flex;
height:3.2rem;
background: #010606;
border-radius: 20px;
padding:5px 40px ;


@media screen and (max-width:468px){
   box-sizing:border-box;
   margin: 0px 20px;
}

`



const Search=styled.input`
height: inherit;
width:20rem ;
height:3rem;
border: 0;
outline: none;
background: transparent;
color:#f7f7f7;
font-size: 1.4rem ;
text-indent:1rem;
transition: all 0.35s;

@media screen and (max-width:468px){
    width:13rem;
}

`



const HeadingSectionWrapper=styled.div`
width:100%;
height:40%;

display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`

const EmojiSectionWrapper=styled.div`
width: 100%;
height:700px;
display: flex;
flex-direction: row;
flex-wrap: wrap;
overflow-y: scroll;
justify-content: center;

`


const MainSection = () => {
   const [EmojiData,setEmojiData]=useState([]);
   const [searchQuery,setSearchQuery]=useState('');
   const [finalEmoji,setfinalEmoji]=useState([])
    
 useEffect(() =>{
        setEmojiData(data)
      },[])


 useEffect(()=>{
        setfinalEmoji(EmojiData.filter((emoji)=> emoji.title.toLowerCase().includes(searchQuery)))
    },[searchQuery])


    const handleChange=(e)=>{
        setSearchQuery(e.target.value.toLowerCase())

     }
 


 return (
        <>
            <MainSectionContainer>
                <MainContainer>
                 <HeadingSectionWrapper>
                   <Heading>Search Emoji</Heading>
                   <SearchContainer>
                   <Search value={searchQuery} placeholder="Search Here" onChange={handleChange} />
                   {/* <Lable>Search Here</Lable> */}
                   </SearchContainer>
                   </HeadingSectionWrapper> 
                   <EmojiSectionWrapper>
                       {finalEmoji.map((emoji)=><Emoji symbol={emoji.symbol} />)}
                   </EmojiSectionWrapper>        
                  </MainContainer>
            </MainSectionContainer>        
        </>
         )
}

export default MainSection