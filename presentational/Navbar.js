import Link from 'next/link'
import { withRouter } from 'next/router'
import styled from 'styled-components'
import LogInContainer from '../container/LogInContainer'

const NavWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  justify-content: center;
  align-items: center;
`
const TitleWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 40px;
`

const Title = styled.span`
  font-size: 30px;
  font-family: ${({ theme }) => theme.fonts.title};
  color: ${({ theme, muted }) =>
    muted ? theme.colors.primaryMuted : theme.colors.primary};
`

const Subtitle = styled.span`
  color: ${({ theme }) => theme.colors.black};
  font-family: ${({ theme }) => theme.fonts.text};
  font-weight: 600;
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
        <StyledLink active={pathname !== '/'}>
          <div>
            <Title>speak.</Title>
            <Title muted>repeat</Title>
          </div>
          <Subtitle>vocabulary trainer</Subtitle>
        </StyledLink>
      </Link>
    </TitleWrapper>
    <LogInContainer />
  </NavWrapper>
)

export default withRouter(Navbar)
