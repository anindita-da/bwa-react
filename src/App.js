import './App.css';

function App() {
  return (
    <div className="Parentbox">
      <FotoProduk />
      <ProdukInfo category="SKATEBOARDING" name="ComfyCush Old Skool" />
    </div>
  );
}

function FotoProduk() {
  return (
      <div className="Foto">
        <img alt="sneaker" src="vans.png" />
      </div>
  );
}

function ProdukInfo(props) {
  const { category, name } = props;

  return (
    <div>
      <div className="Deskripsi">
        <p className="Oldskool">{category}</p>
        <h1 className="Title">{name}</h1>
        <p className="Price">IDR 999.999</p>
        <p className="Info">Vans has reinvigorated the classNameic Old Skool by introducing ComfyCush: a new softer, cushiony outsole that gives the ComfyCush Old Skool a first-className fit that feels like walking on a cloud. Newly constructed canvas and suede uppers house simplified one-piece interiors with added arch support and new moisture-wicking lining throughout, resulting in a lightweight experience that assures you’ll Keep It Comfy at all times.</p>
        <a onClick={(e) => TambahCart(name, e)} href="#">Add to cart </a>
      </div>
    </div>
  );

}

function TambahCart(e) {
  console.log("Membeli " + e);
}
export default App;
