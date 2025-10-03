import React from 'react'
import GrTasks from '../components/pages/grTasks';
import "../styles/ManagerTasks.css"
function ManagerTasks() {
    return (
        <div style={{ padding: '20px' }}>

            <div className='fake-popup'>
                <div className='nave-bar'>
                    <button className='back' onClick={() => window.location.href = '/'}>
                        menu pricipal
                    </button>
                    

                </div>

                <div className='fake-popup2'>
                    <GrTasks />
                </div>
            </div>
        </div>
    )
}

export default ManagerTasks