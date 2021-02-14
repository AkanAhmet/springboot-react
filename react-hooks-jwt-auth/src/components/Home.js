import React, { useState, useEffect } from "react";
import UserService from "../services/user.service";

 const Home = () => {

  const [content, setContent] = useState("");
  useEffect(() => {
    UserService.getPublicContent().then(
      (response) => {
        setContent(response.data);
      },
      (error) => {
        const _content =
          (error.response && error.response.data) ||
          error.message ||
          error.toString();

        setContent(_content);
      }
    );
  }, []);

  const [showResults, setShowResults] = React.useState(false)
  function toggle() {
    setShowResults(wasOpened => !wasOpened);
  }

  return (
    <div className="container" onClick={toggle}>
      <header className="jumbotron">
      { showResults ? <h3>{content}</h3> : "Anasayfa içeriğini okumak veya gizlemek için Buraya tıkla !" }
      </header>
    </div>
  );
};

export default Home;
