import { useState, useEffect } from 'react'
import axios from 'axios'
import IconAndRoles from './IconAndRoles'
import StatsLabel from './StatsLabel'
import Graphs from './Graphs'

const Body = ({ props }) => {
  const [loading, setLoading] = useState(false)
  const [championData, setChampionData] = useState([])
  const [info, setInfo] = useState({})

  useEffect(() => {
    window.scrollTo(0,0)
    setLoading(true)
    axios
      .get(`http://localhost:5555/api/v1/champions/${props.label}`)
      .then((res) => {
        setChampionData(res.data.champion)
        setInfo({
          name: res.data.champion[0].name,
          label: props.label,
          role: props.defaultRole ? props.defaultRole : res.data.champion[0].role,
          gameplayData: (props.defaultRole ? res.data.champion.find((item) => item.role === props.defaultRole).gameplayData : res.data.champion[0].gameplayData)[0],
          tier: props.defaultRole ? res.data.champion.find((item) => item.role === props.defaultRole).tier : res.data.champion[0].tier,
        })
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false)
        console.log(error)
      })
  }, [props.label])

  return (
    <div className='w-[70%] min-h-[1000px] bg-blue-700'>
      {!loading &&
        <div className='flex flex-col items-center'>
          <IconAndRoles props={{
            label: props.label,
            defaultRole: props.defaultRole,
            name: info.name
          }} />
          <StatsLabel props={{
            tier: info.tier ? info.tier : '',
            winRate: info.gameplayData ? info.gameplayData['winRate'] : '',
            pickRate: info.gameplayData ? info.gameplayData['pickRate'] : '',
            banRate: info.gameplayData ? info.gameplayData['banRate'] : '',
            rank: '1/0',

          }} />
          <Graphs />
        </div>
      }
    </div>
  )
}

export default Body