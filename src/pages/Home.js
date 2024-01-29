import { Link } from 'react-router-dom'

function HomePage() {
  return (
    <div>
      <h1>My home page</h1>
      <p>
        Go to the list of <Link to="/products">products</Link>
      </p>
    </div>)
}

export default HomePage