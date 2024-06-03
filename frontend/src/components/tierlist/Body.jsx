import { useMemo } from 'react'
import { useState } from 'react'
import { regionRankPatch } from 'src/constants'
import SideSearchbar from 'src/components/tierlist/SideSearchbar'
import RoleSelection from 'src/components/tierlist/RoleSelection'
import ChampionCardsList from 'src/components/tierlist/ChampionCardsList'
import { allChampions } from 'src/constants'

const Body = () => {
    const [roleIndex, setRoleIndex] = useState(0);
    const [input, setInput] = useState("");

    const roleFilteredChampions = useMemo(() => {
        return roleIndex === 0 ? allChampions : allChampions.filter((champion) => {
            return champion && champion.label && champion.role.find((element) => element === roleIndex);
        })
    }, [roleIndex]) || allChampions;

    const filteredChampions = useMemo(() => {
        return input === "" ? roleFilteredChampions : roleFilteredChampions.filter((champion) => {
            return champion && champion.label && champion.name.toLowerCase().startsWith(input.toLowerCase().trim());
        });
    }, [input, roleIndex]) || allChampions;

    return (
        <div className='flex'>
            <div className='flex flex-col flex-shrink-0 w-1/3 bg-[#31313c] rounded-md px-2'>
                <SideSearchbar props={{ filteredChampions, setInput }} />
                <RoleSelection props={{ roleIndex, setRoleIndex }} />
                <ChampionCardsList props={{ filteredChampions }} />
            </div>
            <div className='flex flex-1 flex-col flex-shrink-0 bg-[#31313c] grow ml-2 rounded-md'>
                <ul className='flex flex-wrap md:justify-center md:space-x-6 lg:space-x-12 mx-2 lg:mx-5'>
                    {regionRankPatch.map((item, index) =>
                        <li key={index}>
                            <div className='flex border border-neutral-500 hover:bg-neutral-800 rounded-md justify-center items-center mt-2 mb-3 mx-3 mr-4 md:mx-0 md:mr-0'>
                                <div className='flex items-center my-2 mx-3'>
                                    <img className={item.imgSrc === "/" ? "hidden" : "h-4 w-4 lg:h-6 lg:w-6"} src={item.imgSrc} />
                                    <div className='flex h-4 lg:h-6 items-center'>
                                        <h5 className='text-center text-xs lg:text-sm ml-1'>
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
    )
}

export default Body