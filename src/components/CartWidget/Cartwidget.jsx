import cart from "./assets/cart.svg";

const CartWidget = () => {
  const itemCount = 0;
  return (
    <div style={{ position: "relative" }}>
      <img src={cart} alt="CartWidget"  />
      <span
        style={{
          position: "absolute",
          top: "19px",
          right: "45px",
          background: "red",
          borderRadius: "50%",
          color: "white",
          padding: "1px 6px",
          fontSize: "0.75rem",
          fontWeight: "bold",
        }}
      >
        {itemCount}
      </span>
    </div>
  );
};
export default CartWidget;
