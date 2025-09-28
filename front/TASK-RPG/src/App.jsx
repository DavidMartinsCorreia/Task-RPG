
import '../styles/App.css'
import { useNavigate } from 'react-router-dom'
import Navebar from '../components/Navebar'
import Life from '../components/Life'
import Attributes from '../components/attributes'
function App() {

  const navigate = useNavigate()

  const handleManagerTasksClick = () => {
    navigate('/manager-tasks') // Navega para a nova página
  }


  return (
    <>
      <div className='fake-popup'>
      <div className='top-nav'>
          <button 
            className='M-tasks'
            onClick={handleManagerTasksClick}
          >
            Manager-Tasks
          </button>
        </div>
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
