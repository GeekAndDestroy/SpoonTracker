import { UserType } from "../types";


type HomeProps = {currentUser: UserType;}

export default function Home({currentUser}: HomeProps) {
  return (
    <div>Home</div>
  )
}