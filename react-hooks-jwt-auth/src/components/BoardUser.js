import React, { useState, useEffect } from "react";

import UserService from "../services/user.service";

const BoardUser = () => {
  const [content, setContent] = useState("");

  useEffect(() => {
    UserService.getUserBoard().then(
      (response) => {
        setContent(response.data);
      },
      (error) => {
        const _content =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
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
    <div className="container">
      <header className="jumbotron" onClick={toggle}>
      { showResults ? <h3>{content}</h3> : "Profilin içeriğini okumak veya gizlemek için Buraya tıkla !" }
      </header>
    </div>
  );
};

export default BoardUser;
