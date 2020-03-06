import styled from 'styled-components'

const ListHeader = styled.div`
  font: ${({ theme }) => theme.fonts.title};
  color: ${({ theme }) => theme.colors.primaryMuted};
  margin-left: 90px;
`
const ListBody = styled.p``
const ListButton = styled.button``

export default ({ title, content, link }) => (
  <>
    <ListHeader>{title}</ListHeader>
    <ListBody>{content}</ListBody>
    <ListButton>{link}</ListButton>
  </>
)
