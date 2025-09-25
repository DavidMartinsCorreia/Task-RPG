import React from 'react'
import { HeartIcon } from '@heroicons/react/24/outline'

import '../styles/Life.css'

function Life() {
    const currentHp = 100;
    const maxHp = 100;
    const percentage = (currentHp / maxHp) * 100;

    return (
        <div className="life-container">
            <div className="life">
                <div className='heart-hp'>
                    <HeartIcon className='heart' />
                    <span className="hp-label">HP</span>

                </div>

                <div className="hp-bar">
                    <div className="bar-background">
                        <div
                            className="bar-fill"
                            style={{ width: `${percentage}%` }}
                        ></div>
                    </div>
                </div>
                <span className="hp-text">{currentHp}/{maxHp}</span>
            </div>
        </div>
    )
}

export default Life