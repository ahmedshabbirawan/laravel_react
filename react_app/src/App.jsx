import { useState } from 'react'
import Header from './components/Header'
import DeveloperCard from './components/DeveloperCard'
import MessageMe from './components/MessageMe'
import './App.css'
import TaskList from './components/TaskList'

function App() {
  const [count, setCount] = useState(0)

  const name = "Ahmed"

  return (
    <div>
      <Header title="Admin Dashboard" version="1.0" />
      <DeveloperCard
        name="Ahmed"
        role="Senior Laravel Developer"
        experience={10}
        skills="PHP, Laravel, MySQL, Vue.js, React"
      />
      <hr/>
      <MessageMe/>
      <hr/>
      <TaskList/>
    </div>
  )
}

export default App
