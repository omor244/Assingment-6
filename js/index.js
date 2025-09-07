// catagory-section and btn

const loadcatetoryBtn = () => {
    fetch('https://openapi.programming-hero.com/api/categories')
        .then(res => res.json())
        .then(data => displaycategory(data.categories))
}


const loadcategorydata = (id) => {
    fetch(`https://openapi.programming-hero.com/api/category/${id}`)
        .then(res => res.json())
        .then(data => displayalldata(data.plants))
}

const displayalldata = (data) => {

    let cartContainer = document.getElementById('cart-container')
    cartContainer.innerHTML = ''

    data.forEach(deta => {
        console.log(deta)
        const div = document.createElement('div')
        div.innerHTML = `
        <h1> ${deta.name}</h1>
      `
        cartContainer.append(div)

    })
}

const displaycategory = (categori) => {
    const catagoryContainer = document.getElementById('category-btn')
    catagoryContainer.innerHTML = '';


    categori.forEach(btn => {

        const button = document.createElement('div')
        button.innerHTML = `
     <div onclick="loadcategorydata(${btn.id})"  class="mt-2 pr-10 pl-2 rounded py-1 bg-green-500 hover:bg-green-300">${btn.category_name
            }</div>
    `
        catagoryContainer.appendChild(button)
    })
}
// catagory-section and btn



loadcatetoryBtn()