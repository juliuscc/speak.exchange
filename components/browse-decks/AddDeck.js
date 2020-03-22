import DeckBox from './DeckBox'
import { RelativeSpinner } from '../ui-fragments/Spinner'

export default ({ loading, onClick }) => (
  <DeckBox hollow as="button" onClick={onClick} disabled={loading}>
    {loading ? <RelativeSpinner /> : '+'}
  </DeckBox>
)
