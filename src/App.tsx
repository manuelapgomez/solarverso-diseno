import { Header } from './components/common/Header'
import { SupplyLayout } from './components/logistica/SupplyLayout'

function App() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header />
      <SupplyLayout />
    </div>
  )
}

export default App
