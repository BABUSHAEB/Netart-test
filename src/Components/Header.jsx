import React from 'react'
import styled from 'styled-components'

let HeaderBlock = styled.div`
text-align: center;

.image-logo{
  width:460px;
  height:100px;
}

@media (min-width:0px) and (max-width: 680px){
  .image-logo{
    width:360px;
    height:100px;
  }

`;



export default function Header() {
    return (
    <>
    <HeaderBlock>

    <header className='header-block' >
        <img className='image-logo'  src="Images/logo.png" alt="Logo" srcset="" />
    </header>
    </HeaderBlock>
    </>
  )
}
