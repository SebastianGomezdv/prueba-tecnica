import "./Home.css";
function Home() {
  return (
    <div>
      <form class="form">
        <p class="form-title">Registro</p>
        <div class="input-container">
          <input type="text" placeholder="Enter Name" />
        </div>
        <div class="input-container">
          <input type="text" placeholder="Enter Id" />
        </div>
        <div class="input-container">
          <input type="email" placeholder="Enter email" />
        </div>
        <div class="input-container">
          <input type="password" placeholder="Enter password" />
        </div>
        <button type="button" class="submit">
          Sign in
        </button>
      </form>
    </div>
  );
}

export default Home;
