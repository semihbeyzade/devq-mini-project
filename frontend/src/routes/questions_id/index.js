import './index.scss'
import { useParams } from 'react-router-dom'
import Layout from '../../Layout'

export default function Question () {
    const params = useParams()
    return (
        <Layout>
          <h1>Question [{params.id}]</h1>
        </Layout>
    )
}