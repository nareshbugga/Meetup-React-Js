import React from 'react'

const RegisterContext = React.createContext({
  name: '',
  topic: 'Arts and Culture',
  condition: true,
  updateName: () => {},
  updateTopic: () => {},
  updateCondition: () => {},
  updateError: () => {},
})

export default RegisterContext
