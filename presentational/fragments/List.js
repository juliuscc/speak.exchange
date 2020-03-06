import styled from 'styled-components'

const ListContainer = styled.div`
  padding: 0 20px 20px 20px;
`
const ListHeader = styled.h1`
  color: ${({ theme }) => theme.colors.primaryMuted};
`
const ListBody = styled.p``
const ListButton = styled.button``

export default ({ title, content, link }) => (
  <ListContainer>
    <ListHeader>{title}</ListHeader>
    <ListBody>{content}</ListBody>
    <ListButton>{link}</ListButton>
  </ListContainer>
)
