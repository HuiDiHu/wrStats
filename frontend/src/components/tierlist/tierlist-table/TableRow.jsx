import { useNavigate } from "react-router-dom";
const rolesTable = ['baron', 'jungle', 'mid', 'bottom', 'support'];

const TableRow = ({ props }) => {
    const navigate = useNavigate()
    const handleRedirect = (label, role) => {
        if (!label || label === 'CHAMPION NOT FOUND') {
            alert('CHAMPION NOT FOUND')
            return;
        }
        navigate(`/champion/${label}`, { state: { retAddr: '/tierlist', champLabel: label, role: role } });
    }

    return (
        <tr
            className='border border-x-0 border-y-1 border-[#1e1e1e] py-1 hover:bg-zinc-800 hover:border hover:border-y-0 hover:border-r-0 hover:border-orange-700 group'
            onClick={(e) => handleRedirect(props.label, props.role)}
        >
            <td className='text-sm text-center py-2 group-hover:text-orange-500'>
                <span>{props.rank}</span>
            </td>
            <td className="py-1">
                <div className='flex max-md:flex-col md:items-center max-md:max-w-20'>
                    <img
                        className='h-8 w-8 rounded-sm'
                        src={`assets/champion-icons/${props.label}.png`}
                        alt='assets/champion-icons/EMPTY_CHAMPION.png'
                    />
                    <span className="md:pl-2 md:text-center max-md:truncate text-xs font-semibold group-hover:text-orange-500">{props.name}</span>
                </div>
            </td>
            <td>
                <h5 className="text-center text-lg">{props.tier}</h5>
            </td>
            <td className="py-2 flex justify-center">
                <img
                    className="h-6 w-6"
                    src={`assets/role-icons/${rolesTable[props.role - 1]}-role-icon.png`}
                />
            </td>
            <td className={`${props.focusSection === 'winRate' && 'bg-zinc-800'}`}>
                <h5 className="text-center text-sm text-neutral-400 pl-1">{props.gameplayData.winRate}%</h5>
            </td>
            <td className={`${props.focusSection === 'pickRate' && 'bg-zinc-800'}`}>
                <h5 className="text-center text-sm text-neutral-400 pl-1 max-md:hidden">{props.gameplayData.pickRate}%</h5>
            </td>
            <td className={`${props.focusSection === 'banRate' && 'bg-zinc-800'}`}>
                <h5 className="text-center text-sm text-neutral-400 pl-1 max-md:hidden">{props.gameplayData.banRate}%</h5>
            </td>
        </tr>
    )
}

export default TableRow