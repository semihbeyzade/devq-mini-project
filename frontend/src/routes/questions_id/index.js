import * as React from 'react'
import './index.scss'
import { useParams } from 'react-router-dom'
import Layout from '../../Layout'

export default function Question () {
    const params = useParams()
    const [question, setQuestion] = React.useState(null)
    const [answer, setAnswer] = React.useState('')

    React.useEffect(() => {
      fetch('http://localhost:3003/questions/' + params.id, {
        method: 'GET',
        credentials: 'include'
      })
      .then(async res => {
        const result = await res.json()
  
        if(res.status === 200) {
          setQuestion(result)
        }
      })
    }, [params.id])

    const handleAnswerSubmit = e => {
      e.preventDefault()
      alert('answer')
    }

   
    if(!question) {
      return (
        <Layout>
          <h2>fetching...</h2>
        </Layout>
      )
    }

    return (
        <Layout>
          <div className='QuestionId'>
            <div className='title'>
             <h1>{question.title}</h1>
             <div className='name'>{question.user.name}</div>
            </div>
            <p className='description'>{question.description}</p>

            <hr />

            <form onSubmit={handleAnswerSubmit}>
            <h2>Meine Antwort</h2>
            <textarea rows={10} onChange={e => setAnswer(e.target.value)} />
            <button>Abschicken</button>
            </form>
          </div>
        </Layout>
    )
}