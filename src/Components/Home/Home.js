import React from "react";
import { useSelector } from "react-redux";
import { Login, Chat } from "../Components";
function Home() {
  const user = useSelector((state) => state.loginReducer);

  return (
    <div style={styles.home} className="bg-warning">
      {user.loggedIn ? <Chat currentUserName={user.username} /> : <Login />}
    </div>
  );
}

export default Home;

const styles = {
  home: {
    flex: "1",
    maxWidth: "70vw",
    height: "85vh",
  },
};
