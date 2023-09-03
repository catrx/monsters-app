import { Monster } from '../../types';
import MonsterRow from './MonsterRow/MonsterRow';

interface IMonstersListProps {
  monsters: Monster[]
}

const MonstersList = ({ monsters }: IMonstersListProps) => {
  return(
    <div className="overflow-x-auto rounded border border-gray-200">
      <table className="w-full text-sm text-left text-gray-500">
        <tbody>
        {monsters.map(monster => (
          <MonsterRow monster={monster} />
        ))}
        </tbody>
      </table>
    </div>
  )
}

export default MonstersList;