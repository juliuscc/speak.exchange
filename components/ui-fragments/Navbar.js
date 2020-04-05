import Link from 'next/link'
import { withRouter } from 'next/router'
import styled from 'styled-components'
import LogInButton from './LogInButton'
import screenSizes from '../../utils/screen-sizes'
import StyledLink from './StyledLink'

const NavWrapper = styled.nav`
  display: flex;
  flex-direction: column;
  position: relative;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: ${screenSizes.smallPhone.max}) {
    display: block;
  }
`
const TitleWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 40px;

  @media screen and (max-width: ${screenSizes.smallPhone.max}) {
    grid-template-columns: 1fr;
    align-items: start;
    margin: 20px;
  }
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
  @media screen and (max-width: ${screenSizes.smallPhone.max}) {
    display: none;
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
    <LogInButton />
  </NavWrapper>
)

export default withRouter(Navbar)
