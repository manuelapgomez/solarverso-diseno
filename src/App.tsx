import { Header } from './components/common/Header'
import { ShipDashboard } from './components/logistica/ShipDashboard'

function App() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header />
      <ShipDashboard />
    </div>
  )
}

export default App
