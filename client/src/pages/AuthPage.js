import React, { useState, useEffect, useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import { useHttp } from '../hooks/http.hook'
import { useMessage } from '../hooks/msg.hook'

export const AuthPage = () => {
  const auth = useContext(AuthContext)
  const message = useMessage()
  const { loading, error, request, clearError } = useHttp()
  const [form, setForm] = useState({ email: '', password: '' })

  useEffect(() => {
    message(error)
    clearError()
  }, [error, message, clearError])

  useEffect(() => {
    window.M.updateTextFields()
  }, [])

  const changeHandler = event => {
    setForm({ ...form, [event.target.name]: event.target.value })
  }

  const registerHandler = async () => {
    try {
      await request('/api/auth/register', 'POST', { ...form })
      message(`User ${form.email} is created!`)
    } catch (e) {}
  }

  const loginHandler = async () => {
    try {
      const data = await request('/api/auth/login', 'POST', { ...form })
      auth.login(data.token, data.userId)
    } catch (e) {}
  }

  return (
    <div className='row'>
      <div className='col s6 offset-s3'>
        <h1>Welcome to Links MERN Project!</h1>
        <div className='card grey lighten-4 z-depth-3'>
          <div className='card-content black-text'>
            <span className='card-title' style={{ marginBottom: '3rem' }}>
              Authtorization
            </span>
            <div>
              <div className='input-field'>
                <input
                  placeholder='Email'
                  id='email'
                  type='text'
                  name='email'
                  className='validate'
                  value={form.email}
                  onChange={changeHandler}
                />
                <label htmlFor='email'>Email</label>
              </div>
              <div className='input-field'>
                <input
                  placeholder='Password'
                  id='password'
                  type='password'
                  name='password'
                  className='validate'
                  value={form.password}
                  onChange={changeHandler}
                />
                <label htmlFor='password'>Password</label>
              </div>
            </div>
          </div>
          <div className='card-action'>
            <button
              className='btn waves-effect waves-light green'
              disabled={loading}
              onClick={loginHandler}>
              Sign in
            </button>
            <button
              className='btn waves-effect waves-light blue'
              style={{ marginLeft: '1rem' }}
              onClick={registerHandler}
              disabled={loading}>
              Sign up
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
