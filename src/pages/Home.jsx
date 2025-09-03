import "./Home.css";
function Home() {
  return (
    <div>
      <form className="form">
        <p className="form-title">Registro</p>
        <div className="input-container">
          <input type="text" placeholder="Enter Name" />
        </div>
        <div className="input-container">
          <input type="text" placeholder="Enter Id" />
        </div>
        <div className="input-container">
          <input type="email" placeholder="Enter email" />
        </div>
        <div className="input-container">
          <input type="password" placeholder="Enter password" />
        </div>
        <button type="button" className="submit">
          Sign in
        </button>
      </form>
    </div>
  );
}

export default Home;
