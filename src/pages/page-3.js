import React from 'react'

function Page3() {
  const [count, setCount] = React.useState(0)
  return (
    <div>
      Clicked {count} many times.
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  )
}

export default Page3
