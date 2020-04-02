import styled from 'styled-components'
import { withRouter } from 'next/router'
import React from 'react'
import Link from 'next/link'
import StyledLink from '../ui-fragments/StyledLink'

const ViewBarBox = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  flex-direction: row;
  background-color: ${({ theme }) => theme.colors.focusBackground};
  justify-content: flex-end;
  align-items: center;
`

const ViewLinks = styled.button`
  background-color: ${({ theme }) => theme.colors.focusBackground};
  border: none;
  width: 100px;
  height: 50px;
  color: ${({ theme }) => theme.colors.black};
  font-family: ${({ theme }) => theme.fonts.text};
  font-size: 15px;
  font-weight: 300;
  cursor: pointer;
`

const ViewBar = ({ router: { pathname } }) => {
  return (
    <ViewBarBox>
      <Link href="/repeat">
        <StyledLink active={pathname === '/repeat'}>
          <ViewLinks>My Decks</ViewLinks>
        </StyledLink>
      </Link>

      <Link href="/all-decks">
        <StyledLink active={pathname === '/all-decks'}>
          <ViewLinks>Browse Decks</ViewLinks>
        </StyledLink>
      </Link>
    </ViewBarBox>
  )
}

export default withRouter(ViewBar)