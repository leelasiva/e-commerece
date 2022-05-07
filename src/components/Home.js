import {Link} from 'react-router-dom'
function Home() {
    return (
      <div>
        <main>
          <h2>Welcome to the homepage!</h2>
          <p>Shopping makes you happy about youself</p>
        </main>
        <nav>
          <Link to="/login">Login</Link>
        </nav>

      </div>
    );
  }
  export default Home;