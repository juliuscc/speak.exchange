import styled from 'styled-components'
import { withRouter } from 'next/router'
import React from 'react'
import Link from 'next/link'

const ViewBarBox = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  flex-direction: row;
  background-color: ${({ theme }) => theme.colors.focusBackground};
  justify-content: flex-start;
  align-items: center;
`

const ViewLinks = styled.a`
  color: ${({ theme }) => theme.colors.black};
  font-family: ${({ theme }) => theme.fonts.text};
  font-size: 15px;
  height: 100%;
  padding: 0 20px;
  cursor: pointer;
  text-decoration: none;
  align-items: center;
  display: flex;
  justify-content: center;
  background-color: ${({ active, theme }) =>
    active ? theme.colors.lightgrey : null};
  font-weight: ${({ active }) => (active ? '600' : '300')};
  flex-direction: column;
  opacity: ${({ active, theme }) =>
    active ? 1 : theme.transparencies.inactive};

  :hover {
    opacity: 1;
  }
`

const ViewBar = ({ router: { pathname } }) => {
  return (
    <ViewBarBox>
      <Link href="/repeat">
        <ViewLinks active={pathname === '/repeat'}>My Decks</ViewLinks>
      </Link>

      <Link href="/all-decks">
        <ViewLinks active={pathname === '/all-decks'}>
          Browse Community Decks
        </ViewLinks>
      </Link>
    </ViewBarBox>
  )
}

export default withRouter(ViewBar)
