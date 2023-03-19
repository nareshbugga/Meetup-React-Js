import {Component} from 'react'
import Header from '../Header'
import RegisterContext from '../../Context/RegisterContext'
import {
  RegisterContainer,
  RegisterImage,
  FormContainer,
  RegisterHeading,
  RegisterLabel,
  RegisterNowButton,
  Input,
  Select,
  ErrorMsg,
} from './StyledComponent'

const topicsList = [
  {
    id: 'ARTS_AND_CULTURE',
    displayText: 'Arts and Culture',
  },
  {
    id: 'CAREER_AND_BUSINESS',
    displayText: 'Career and Business',
  },
  {
    id: 'EDUCATION_AND_LEARNING',
    displayText: 'Education and Learning',
  },
  {
    id: 'FASHION_AND_BEAUTY',
    displayText: 'Fashion and Learning',
  },
  {
    id: 'GAMES',
    displayText: 'Games',
  },
]

class Register extends Component {
  render() {
    return (
      <RegisterContext.Consumer>
        {value => {
          const {
            name,
            topic,
            errorMsg,
            updateCondition,
            updateError,
            updateName,
            updateTopic,
          } = value

          const Topic = topicsList.filter(each => each.displayText === topic)

          const onChangeName = event => {
            updateName(event.target.value)
          }

          const onChangeTopic = event => {
            const id = event.target.value
            const item = topicsList.filter(each => each.id === id)
            updateTopic(item[0].displayText)
          }

          const onSubmitForm = event => {
            event.preventDefault()
            if (name !== '' && topic !== '') {
              const {history} = this.props
              history.replace('/')
              updateCondition()
            } else {
              updateError('Please enter your name')
            }
          }

          return (
            <>
              <Header />
              <RegisterContainer>
                <RegisterImage
                  src="https://assets.ccbp.in/frontend/react-js/meetup/website-register-img.png"
                  alt="website register"
                />
                <div>
                  <FormContainer onSubmit={onSubmitForm}>
                    <RegisterHeading>Let us join</RegisterHeading>
                    <div>
                      <RegisterLabel htmlFor="name">NAME</RegisterLabel>
                      <br />
                      <Input
                        type="text"
                        placeholder="Your name"
                        value={name}
                        onChange={onChangeName}
                        id="name"
                      />
                    </div>
                    <div>
                      <RegisterLabel htmlFor="topic">Topics</RegisterLabel>
                      <br />
                      <Select
                        value={Topic[0].id}
                        id="topic"
                        onChange={onChangeTopic}
                      >
                        {topicsList.map(eachList => (
                          <option value={eachList.id} key={eachList.id}>
                            {eachList.displayText}
                          </option>
                        ))}
                      </Select>
                    </div>
                    <RegisterNowButton type="submit">
                      Register Now
                    </RegisterNowButton>
                    {errorMsg.length === 0 ? null : (
                      <ErrorMsg>{errorMsg}</ErrorMsg>
                    )}
                  </FormContainer>
                </div>
              </RegisterContainer>
            </>
          )
        }}
      </RegisterContext.Consumer>
    )
  }
}

export default Register
