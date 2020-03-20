import styled from 'styled-components'
import React from 'react'
import Link from 'next/link'

const ViewBar = styled.div`
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

export default () => (
  <ViewBar>
    <Link href="/repeat">
      <ViewLinks>My Decks</ViewLinks>
    </Link>
    <Link href="/repeat">
      <ViewLinks>Browse Decks</ViewLinks>
    </Link>
  </ViewBar>
)
