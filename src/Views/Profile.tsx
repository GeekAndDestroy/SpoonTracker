
import { UserType } from '../types';

type ProfileProps = {currentUser: UserType;}

export default function Profile({currentUser}: ProfileProps) {
  return (
    <div>Profile</div>
  )
}