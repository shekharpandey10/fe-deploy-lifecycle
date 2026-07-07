import { Button } from "@repo/ui"
import { formatCurrency } from '@repo/utils'

function App() {


  return (
    <>
      <h1>Dev and Deploayment lifecycle</h1>
      <Button onClick={() => alert(formatCurrency(1234))} />
      <h1>new feature</h1>
    </>
  )
}

export default App
