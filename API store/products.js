
// let productgrid = document.getElementById(`product-grid`)
let grid = document.getElementById(`grid`)
let showingCount = document.getElementById(`showingCount`);
let sortSelect = document.getElementById(`sortSelect`);
let categoryRadios = document.querySelectorAll(`input[name="category"]`);
let resetBtn = document.getElementById(`resetFiltersBtn`);
let allproducts = []

fetch(`https://dummyjson.com/products`)
    .then((res) => {
        return res.json()
    })
    .then((data) => {

        allproducts = data.products
        renderproducts()
    })

function renderproducts() {
    let categorychecked = document.querySelector(`input[name="category"]:checked`).value
    let sortvalue = sortSelect.value

    let filtered;
    if (categorychecked === "all") {
        filtered = [...allproducts]
    }
    else {
        filtered = allproducts.filter(items => items.category === categorychecked)
    }

    if (sortvalue === "price-low") {
        filtered.sort((a, b) => a.price - b.price)
    }
    else if (sortvalue === "price-high") {
        filtered.sort((a, b) => b.price - a.price)
    }

    let returnhtml = filtered.map(items =>
        `<div class="product-card">
            <img src="${items.thumbnail}" alt="${items.title}">
            <div class="product-info">
                <h3>${items.title}</h3>
                <br>
                <h6>${items.description}</h6>
                <br>
                <p class="category">${items.category}</p>
                <p class="price">$${items.price}</p>
                <button class="add-to-cart" data-id="${items.id}">Add to Cart</button>
            </div>
        </div>`
    );

    grid.innerHTML = returnhtml.join(" ")
    showingCount.textContent = filtered.length
}

categoryRadios.forEach((radio) => {
    radio.addEventListener("change", renderproducts)
})
sortSelect.addEventListener("change", renderproducts)

resetBtn.addEventListener("click", () => {
    document.querySelector(`input[name="category"][value="all"]`).checked = true;

    sortSelect.value = "default";
    renderproducts()
})

grid.addEventListener("click", (e)=>{
    console.log(`js js js`);
    if (e.target.classList.contains("add-to-cart")) {
        let productid = e.target.dataset.id;
        console.log(`the selected product id is ${productid}`);

    }

})
