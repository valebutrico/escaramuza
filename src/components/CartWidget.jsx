import canasto from "./assets/shopping-cart5929.jpg";

const CartWidget = () => {
  return (
    <div className="cart-widget has-text-centered">
      <img src={canasto} alt="canasto-widget" className="cart-image"/>
      (0)
    </div>
  )
}

export default CartWidget;