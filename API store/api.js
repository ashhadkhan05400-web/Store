
let productgrid = document.getElementById(`product-grid`)
let grid = document.getElementById(`grid`)
fetch(`https://dummyjson.com/products?limit=10`)
    .then((res) => {
        return res.json()
    })
    .then((data) => {
        console.log(data);
        let returnhtml = data.products.map(items =>
            `<div class="product-card">
                <img src="${items.thumbnail}" alt="${items.title}">
                    <div class="product-info">
                        <h3>${items.title}</h3> 
                        <br>
                      <h6>${items.description}</h6>
                    <br>
                        <p class="category">${items.category}</p>
                        <p class="price">$${items.price}</p>
                        <button class="add-to-cart" data-category=${items.category} data-id="${items.id}">Add to Cart</button>
                    </div>
                </div>
                `

        )


        grid.innerHTML = returnhtml.join(" ")
        console.log(returnhtml);
        
    })

