import { useState } from "react";
import "./App.css";
import Navbar from "./components/Menu";
import "./style/menu.css";

function App() {
  const [spanVisible, setspanVisible] = useState(false);
  const [coOrdinate, setcoOrdinate] = useState({
    height: "100px",
    width: "100px",
  });
  return (
    <>
      <Navbar setspanVisible={setspanVisible} setcoOrdinate={setcoOrdinate} />
      <div className="wrapper">
        <p>
          Lorem ipsum dolor sit amet, <a href="">consectetur</a> adipisicing
          elit. Est <a href="">explicabo</a> unde natus necessitatibus esse
          obcaecati distinctio, aut itaque, qui vitae!
        </p>
        <p>
          Aspernatur sapiente quae sint <a href="">soluta</a> modi, atque
          praesentium laborum pariatur earum <a href="">quaerat</a> cupiditate
          consequuntur facilis ullam dignissimos, aperiam quam veniam.
        </p>
        <p>
          Cum ipsam quod, incidunt sit ex <a href="">tempore</a> placeat maxime{" "}
          <a href="">corrupti</a> possimus <a href="">veritatis</a> ipsum fugit
          recusandae est doloremque? Hic, <a href="">quibusdam</a>, nulla.
        </p>
        <p>
          Esse quibusdam, ad, ducimus cupiditate <a href="">nulla</a>, quae
          magni odit <a href="">totam</a> ut consequatur eveniet sunt quam
          provident sapiente dicta neque quod.
        </p>
        <p>
          Aliquam <a href="">dicta</a> sequi culpa fugiat{" "}
          <a href="">consequuntur</a> pariatur optio ad minima, maxime{" "}
          <a href="">odio</a>, distinctio magni impedit tempore enim repellendus{" "}
          <a href="">repudiandae</a> quas!
        </p>
      </div>
      {spanVisible && <span className="highlight" style={coOrdinate}></span>}
    </>
  );
}

export default App;
