import TwitterCard from '../components/TwitterCard'
import './App.css'

export default function App() {

  return (
    <section className='app'>
      <TwitterCard name='Oscar Zamora' user='ozamgal' initialIsFollowing />
      <TwitterCard name='Olga Martin' user='olmava' formatUser={(user) => `#${user}`} />
    </section>
  )
}