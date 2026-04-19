import { useState } from 'react'
import IntroPage from './IntroPage'
import SorryPage from './SorryPage'
import FinalPage from './FinalPage'
import MeantToBePage from './MeantToBePage'
import LastEmotionalPage from './LastEmotionalPage'
import FinalSuccessPage from './FinalSuccessPage'

function App() {
  const [page, setPage] = useState('intro');

  return (
    <>
      {page === 'intro' && <IntroPage onNext={() => setPage('sorry')} />}
      {page === 'sorry' && <SorryPage onNext={() => setPage('final')} onReject={() => setPage('meantToBe')} />}
      {page === 'final' && <FinalPage />}
      {page === 'meantToBe' && <MeantToBePage onAccept={() => setPage('final')} onReject={() => setPage('lastEmotional')} />}
      {page === 'lastEmotional' && <LastEmotionalPage onAccept={() => setPage('finalSuccess')} />}
      {page === 'finalSuccess' && <FinalSuccessPage />}
    </>
  )
}

export default App
