
import '../styles/App.css'
import Navebar from '../components/Navebar'
import Life from '../components/Life'
import Attributes from '../components/attributes'
function App() {

  return (
    <>
      <div className='fake-popup'>
        <div className='fake-popup2'>
           <Navebar/>
           <Life/>
           <Attributes />
        </div>
      </div>
    </>
  )
}

export default App
