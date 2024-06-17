import React from 'react'

const StatsLabel = ({ props }) => {
    return (
        <div className='flex flex-col items-center max-w-fit'>
            <div className='flex items-center py-4 bg-[#31313c] rounded-lg text-center h-20 lg:h-24 border border-orange-700'>
                <div className='text-xs lg:text-base flex flex-col px-4 lg:px-8 border border-l-0 border-y-0 border-orange-700'>
                    <span>{props.rank}</span>
                    <span>Rank</span>
                </div>
                <div className='text-xs lg:text-base flex flex-col px-4 lg:px-8 border border-y-0 border-orange-700'>
                    <span>{props.tier}</span>
                    <span>Tier</span>
                </div>
                <div className='text-xs lg:text-base flex flex-col px-4 lg:px-8 border border-y-0 border-orange-700'>
                    <span>{props.winRate}%</span>
                    <span>Winrate</span>
                </div>
                <div className='text-xs lg:text-base flex flex-col px-4 lg:px-8 border border-y-0 border-orange-700'>
                    <span>{props.pickRate}%</span>
                    <span>Pickrate</span>
                </div>
                <div className='text-xs lg:text-base flex flex-col px-4 lg:px-8 border border-r-0 border-y-0 border-orange-700'>
                    <span>{props.banRate}%</span>
                    <span>Banrate</span>
                </div>
            </div>
        </div>
    )
}

export default StatsLabel