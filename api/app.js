const getData = async () => {
  try {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    console.log(data);
    const productList = document.getElementById("container");
    // const naslov = document.createElement("h1");
    // naslov.innerHTML=`Fake Store`
    data.forEach((product) => {
      const productElement = document.createElement("div");
      productList.className = "productList";
      productElement.innerHTML = `<img src='${product.image}'/> <h1>${product.title}</h1> <p class="kategorija">'${product.category}'</p> <p class="pd>${product.description}</p> <p>${product.price}</p>`;
      productList.appendChild(productElement);
      productElement.className = "p";
    });
  } catch (error) {
    console.log(error);
  }
};

getData();

const url = "https://fakestoreapi.com/products";

const getProducts = async () => {
  try {
    const response = await fetch(url);
    const products = await response.json();
    products.forEach((product) => {
      console.log(product.description);
    });
    return products;
  } catch (error) {
    console.log(error);
  }
};

// getProducts();

const uzmi = async () => {
  try {
    const odgovor = await fetch(url);
    const produkt = await odgovor.json();
    produkt.forEach((product) => {
      console.log(product.title);
    });
    return produkt;
  } catch (error) {
    console.log("Greskica gajz");
  }
};

uzmi();

const akica = async () => {
  try {
    const zuzu = await fetch(url);
    const lisnatou = await zuzu.json();
    lisnatou.forEach((nst) => {
      console.log(nst.price);
    });
    return lisnatou;
  } catch (error) {
    console.log("E brt nes ti ovo nece?!??!?!!");
  }
};

akica();

const ajlica = async () => {
  try {
    const rec = await fetch(url);
    const glupaca = await rec.json();
    glupaca.forEach((nesto) => {
      console.log(nesto.category);
    });
    return glupaca;
  } catch (error) {
    console.log("Hey grl!!!!!");
  }
};

ajlica();
