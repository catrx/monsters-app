import { Monster } from '../../types';
import MonsterRow from './MonsterRow/MonsterRow';
import Toast from '../Toast/Toast';

interface IMonstersListProps {
  monsters: Monster[] | null
}

const MonstersList = ({ monsters }: IMonstersListProps) => {

  if(monsters?.length === 0) return <Toast message='Oups il semble que votre monstre ne soit pas dans notre liste.' />

  if(!monsters) return null;

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