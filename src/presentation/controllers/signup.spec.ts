import SignupController from './signup'

describe('Signup Controller', () => {
  test('Should return 400 if no name is provided', () => {
    const sut = new SignupController()

    const httpRequest = {
      body: {
        email: 'any',
        password: 'any',
        passwordConfirmation: 'any'
      }
    }

    const httpResponse = sut.handler(httpRequest)

    expect(httpResponse.statusCode).toBe(400)
  })
})
