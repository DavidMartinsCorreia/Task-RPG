import React from 'react'

function ManagerTasks() {
    return (
        <div style={{ padding: '20px' }}>
            <div className='fake-popup'>
                <div className='fake-popup2'>
                    <button onClick={() => window.location.href = '/'}>
                        Voltar para início
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ManagerTasks