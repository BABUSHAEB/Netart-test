import React from 'react'
import styled from 'styled-components'


let FooterContainer = styled.div`

  background-color: #ff0000b8;
  margin: 3px;
  // height: 40px;
  color: white;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding:2rem;
  width:100%

.icon{
  margin: 4px;
}

 @media( min-width:0px) and (max-width: 680px){

        flex-direction: column;
        justify-content: center;
        // align-items:start;
      
.contact-footer{
  padding: 0.8rem 0;
}
.icon{
  margin-right: 4px;
}
}
`;
export default function Footer() {
  return (
    <>
      <FooterContainer >
        <div className='contact-footer'>
          <i className="icon fa-solid fa-phone" />
          Toll free <strong>18002001234</strong>
        </div>
        <div className='contact-footer'>
          <i className="icon fa-brands fa-facebook" />
          www.facebook.com/cripumps
        </div>
        <div className='contact-footer'>
          <i class="icon fa-brands fa-chrome" />
          www.crigroups.com
        </div>

      </FooterContainer>

    </>
  )
}
