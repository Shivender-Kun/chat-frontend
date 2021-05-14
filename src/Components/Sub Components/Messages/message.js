const message = (i, index, currentUserName) => {
  const user =
    i.currentUserName === currentUserName ? "You" : i.currentUserName;

  return (
    <div
      key={index}
      id="parent-msg-container"
      className={user === "You" ? "Right" : "Left"}
    >
      <div id="messageContainer" className={user === "You" ? user : "Other"}>
        <span className="user">{user}</span>
        <p className="message">{i.message}</p>
      </div>
    </div>
  );
};

export default message;
