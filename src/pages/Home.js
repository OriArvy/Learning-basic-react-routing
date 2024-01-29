import { Link, useNavigate } from 'react-router-dom'

function HomePage() {
  const navigate = useNavigate();

  function navigateHandler() {
    navigate('/products')
  }

  return (
    <div>
      <h1>My home page</h1>
      <p>
        Go to the list of <Link to="/products">products</Link>
      </p>
      <p>
        <button onClick={navigateHandler}>Navigate</button>
      </p>
    </div>)
}

export default HomePage