export const InlineStyle = () => {
  const containerStlye = {
    border: "solid 2px #392eff",
    borderRadius: "20px",
    padding: "8px",
    margin: "8px",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center"
  };
  const titleStye = {
    margin: 0,
    color: "#3d84a8"
  };
  const buttonStye = {
    backgroundColor: "#abedd8",
    border: "none",
    padding: "8px",
    borderRadius: "8px"
  };

  return (
    <div style={containerStlye}>
      <p style={titleStye}>-Inline Styles-</p>
      <button style={buttonStye}>FIGHT!!!</button>
    </div>
  );
};
