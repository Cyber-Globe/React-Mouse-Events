import rider from "./assets/image/rider.jpg";
function App() {
  function handleClick() {
    console.log("Button clicked, its time to ride!");
  }

  function handonMouseOver() {
    console.log("wow just hover on the image");
  }
  return (
    <div className="app">
      <img src={rider} alt="riders bike" onMouseOver={handonMouseOver} />
      <button onMouseEnter={handleClick}>Click Me</button>
    </div>
  );
}

export default App;
