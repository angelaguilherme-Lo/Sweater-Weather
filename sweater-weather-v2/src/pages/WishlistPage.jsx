import { useShop } from '../context/ShopContext'

export default function WishlistPage() {
  const { wishlist } = useShop()

  return (
    <section className="container pageBlock">
      <div className="topGap sectionIntro">
        <p className="miniLabel tealText">Wishlist</p>
        <h1 className="pageTitle">Your saved favorites</h1>
      </div>
      <div className="glassPanel infoPane">
        {wishlist.length === 0 ? (
          <p>Your wishlist is empty right now. Save your favorite sweaters, tunics and knits as you browse.</p>
        ) : (
          <div className="savedGrid">
            {wishlist.map((item) => (
              <article key={item.id} className="savedItem">
                <img src={item.image} alt={item.name} />
                <div>
                  <h3>{item.name}</h3>
                  <p>{item.category}</p>
                </div>
                <strong>€{item.price}</strong>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}