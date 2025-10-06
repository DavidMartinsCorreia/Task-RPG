import React from 'react'
import GrTasks from '../components/pages/grTasks';
import "../styles/ManagerTasks.css"
import CreateTasksPopup from '../components/CreateTaskPopup';
import {usePopup} from '../hooks/usePopup'
function ManagerTasks() {

    const { isOpen, openPopup, closePopup } = usePopup();
    return (
        <div style={{ padding: '20px' }}>

            <div className='fake-popup'>
                <div className='nave-bar'>
                    <button className='back' onClick={() => window.location.href = '/'}>
                        Menu Principal
                    </button>
                    <button className='create-task' onClick={openPopup}>
                        Create Task
                    </button>
                    <CreateTasksPopup isOpen={isOpen} onClose={closePopup} />
                </div>

                <div className='fake-popup2'>
                    <GrTasks />
                </div>
            </div>
        </div>
    )
}

export default ManagerTasks