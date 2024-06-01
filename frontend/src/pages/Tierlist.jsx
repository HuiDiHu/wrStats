import React from 'react'
import { useState } from 'react'
import Navbar from '../components/tierlist/Navbar'
import { regionRankPatch } from '../constants'
import Footer from '../components/Footer'
import SideSearchbar from '../components/tierlist/SideSearchbar'
import RoleSelection from '../components/tierlist/RoleSelection'
import ChampionCardsList from '../components/tierlist/ChampionCardsList'
import { allChampions } from '../constants'

const Tierlist = () => {
    const [filteredChampions, setFilteredChampions] = useState(allChampions);
    const [roleFilteredChampions, setRoleFilteredChampions] = useState(allChampions);
    const [roleIndex, setRoleIndex] = useState(0);
    const [input, setInput] = useState("");

    return (
        <div>
            <Navbar />
            <div className='flex flex-col items-center'>
                <div className='flex flex-col w-3/4'>
                    <div className='h-[125px] my-2 rounded-xl bg-[#31313c]' />
                    <div className='flex'>
                        <div className='flex flex-col flex-shrink-0 w-1/3 bg-[#31313c] rounded-md px-2'>
                            <SideSearchbar props={{ roleIndex, filteredChampions, setFilteredChampions, setInput }} />
                            <RoleSelection props={{ input, roleIndex, setRoleIndex, setFilteredChampions, setRoleFilteredChampions }} />
                            <ChampionCardsList props={{ filteredChampions }} />
                        </div>
                        <div className='flex flex-col flex-shrink-0 bg-[#31313c] grow ml-2 rounded-md'>
                            <ul className='flex justify-center space-x-12 mx-5 mt-2 mb-3'>
                                {regionRankPatch.map((item, index) =>
                                    <li key={index}>
                                        <div className='flex border border-neutral-500 hover:bg-neutral-800 rounded-md justify-center items-center'>
                                            <div className='flex items-center my-2 mx-3'>
                                                <img className={item.imgSrc === "/" ? "hidden" : "h-6 w-6"} src={item.imgSrc} />
                                                <div className='flex h-6 items-center'>
                                                    <h5 className='text-center text-sm ml-1'>
                                                        <span className='text-center'>{item.label}</span>
                                                    </h5>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                )}
                            </ul>
                            
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Tierlist