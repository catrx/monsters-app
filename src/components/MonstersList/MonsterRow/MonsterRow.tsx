import { Monster } from '../../../types';

interface IMonsterRowProps {
  monster: Monster
}

const MonsterRow = ({ monster }: IMonsterRowProps) => {

  return(
    <tr className="bg-white border-b hover:bg-gray-50">
      <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap">
        {monster.name}
      </th>
      <td className="px-6 py-4 text-green-400">
        + {Object.keys(monster.skills).length} SKILLS | {monster.actions.length} ACTIONS
      </td>
    </tr>
  )
}

export default MonsterRow;