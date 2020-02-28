import Link from 'next/link'
import React from 'react'
import { withRouter } from 'next/router'
import styled from 'styled-components'

const NavWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  justify-content: center;
  align-items: center;
`

const LogInWrapper = styled.div`
  padding-right: 30px;
  display: flex;
  position: absolute;
  top: 0;
  right: 0;
  font-family: ${({ theme }) => theme.fonts.text};
  font-size: 20px;
  font-weight: 600;
  height: 100%;
  align-items: center;
`

const StyledLink = styled.a`
  text-decoration: none;
  margin: 20px;
  align-items: center;
  display: flex;
  flex-direction: column;
  opacity: ${({ active, theme }) =>
    active ? 1 : theme.transparencies.inactive};

  :hover {
    opacity: 1;
  }
`

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-right: 20px;
  margin-left: 20px;
`

const Title = styled.span`
  font-size: 30px;
  font-family: ${({ theme }) => theme.fonts.title};
  color: ${({ theme, muted }) =>
    muted ? theme.colors.primaryMuted : theme.colors.primary};
`

const Subtitle = styled.span`
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.text};
  font-weight: 600;
`

const Navbar = ({ router: { pathname } }) => (
  <NavWrapper>
    <TitleWrapper>
      <Link href="/" passHref>
        <StyledLink active={pathname === '/'}>
          <div>
            <Title>speak.</Title>
            <Title muted>exchange</Title>
          </div>
          <Subtitle>bilingual dictionary</Subtitle>
        </StyledLink>
      </Link>
      <Link href="/repeat" passHref>
        <StyledLink active={pathname === '/repeat'}>
          <div>
            <Title>speak.</Title>
            <Title muted>repeat</Title>
          </div>
          <Subtitle>vocabulary trainer</Subtitle>
        </StyledLink>
      </Link>
    </TitleWrapper>
    <LogInWrapper>Log in</LogInWrapper>
  </NavWrapper>
)

export default withRouter(Navbar)
