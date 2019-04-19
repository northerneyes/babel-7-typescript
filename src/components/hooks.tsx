import React, { useState, useCallback } from 'react'

const someComponent = () => {
  const [name, setName] = useState('')
  const [count, setCount] = useState(0)

  const changeName = useCallback(() => {
    setName('New name')
  }, [])

  const changeCount = useCallback(() => {
    setCount(10)
  }, [])

  return (
    <>
      <div>{name}</div>
      <div>{count}</div>
      <button onClick={changeName}>Change name</button>
      <button onClick={changeCount}>Change count</button>
    </>
  )
}

export default someComponent
