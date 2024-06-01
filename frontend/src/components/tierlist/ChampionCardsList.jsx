import React from 'react'
import { allChampions } from '../../constants'
import ChampionCard from './ChampionCard'
import { BsExclamationCircle } from "react-icons/bs";

const ChampionCardsList = ({ props }) => {
    return (
        <div className='border-y border-[#1e1e1e] -mx-2'>
            <div className='m-1 ml-4 flex flex-wrap'>
                {
                props.filteredChampions.length > 0 ? 
                props.filteredChampions.map((item, index) => (
                    <ChampionCard
                        key={index}
                        props={{
                            imgSrc: `../../../public/assets/champion-icons/${item.label}.png`,
                            imgSrcAlt: '../../../public/assets/champion-icons/EMPTY_CHAMPION.png',
                            name: item.name
                        }} 
                    />
                )) :
                (<div className='h-[175px] grow flex flex-col justify-center items-center'>
                    <BsExclamationCircle className='h-10 w-10 fill-neutral-500' />
                    <h1 className='mt-1 text-neutral-500'>
                        <span>No Champions Avaliable...</span>
                    </h1>
                </div>)
                }
            </div>
        </div>
    )
}

export default ChampionCardsList