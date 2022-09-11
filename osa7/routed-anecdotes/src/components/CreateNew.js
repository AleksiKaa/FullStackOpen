import {
    useNavigate
} from "react-router-dom"
import useField from '../hooks'

const CreateNew = (props) => {
    const content = useField('text')
    const author = useField('text')
    const info = useField('text')
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        if (e.nativeEvent.submitter.name === 'create') {
            props.addNew({
                content: content.value,
                author: author.value,
                info: info.value,
                votes: 0
            })
            navigate("/")
        }
        if (e.nativeEvent.submitter.name === 'reset') {
            content.reset()
            author.reset()
            info.reset()
        }
    }

    return (
        <div>
            <h2>create a new anecdote</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    content
                    <input {...content } reset='' />
                </div>
                <div>
                    author
                    <input {...author} reset='' />
                </div>
                <div>
                    url for more info
                    <input {...info} reset='' />
                </div>
                <button type='submit' name='create'>create</button>
                <button type='submit' name='reset'>reset</button>
            </form>
        </div>
    )
}

export default CreateNew