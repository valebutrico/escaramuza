const ItemListContainer = ({ greeting }) => {
  return (
    <section className="section">
      <div className="container has-text-centered">
        <h1 className="title">{greeting}</h1>
      </div>
    </section>
  );
};

export default ItemListContainer;
