import './App.css'
import Card from './components/Card'

function App({username}) {

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'> Tailwind Test</h1>
      <Card username="Aditya" description="An aspiring coder!!"/>
      <Card username="Sunaina" description="A business girl!!"/>
    </>
  )
}

export default App
