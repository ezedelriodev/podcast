const Home = () => {
  return (
    <div data-testid="home_container">
      <div className="card">
        <img
          src={
            "https://is1-ssl.mzstatic.com/image/thumb/Podcasts122/v4/f1/91/58/f1915829-0639-3bd9-8e3f-8c2ac747acec/mza_14652512068862442143.jpeg/170x170bb.png"
          }
          alt={"title"}
        />
        <p>{"title"}</p>
      </div>
    </div>
  );
};

export default Home;
