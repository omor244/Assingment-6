// catagory-section and btn

const loadalldata = () => {
    fetch('https://openapi.programming-hero.com/api/plants')
    .then(res => res.json())
    .then(data => {
        console.log(data)
        displayalldata(data.plants)
    })
}

const loadcatetoryBtn = () => {
    fetch('https://openapi.programming-hero.com/api/categories')
        .then(res => res.json())
        .then(data => displaycategory(data.categories))
}

const removeActive = () => {
    const removeactiveclass = document.querySelectorAll('.btn-class')
    removeactiveclass.forEach(btn => btn.classList.remove('active'))

}


const loadcategorydata = (id) => {
    fetch(`https://openapi.programming-hero.com/api/category/${id}`)
        .then(res => res.json())
        .then(data => {
            removeActive()
            const activebtn = document.getElementById(`active-btn-${id}`)
            activebtn.classList.add('active')

            displayalldata(data.plants)
        })
}

const displayalldata = (data) => {

    let cartContainer = document.getElementById('cart-container')
    cartContainer.innerHTML = ''

    data.forEach(deta => {
        console.log(deta)
        const {image, description, price,category, name} = deta
        const div = document.createElement('div')
        div.innerHTML = `
         <div class="card bg-base-100 max-w-96 shadow-sm p-4 h-[550px]">
                        <figure>
                            <img  class="h-[250px] rounded w-full" src="${image}"
                                alt="Not Found" />
                        </figure>
                        <div class="card-body p-4 space-y-2">
                            <h2 class="card-title">${name}</h2>
                            <p>${description}</p>
                                <div class=" flex justify-between">
                                    <div class="btn bg-green-200 rounded-full px-6 text-[#15803d]">${category}</div>
                                    <div class="font-medium text-lg">$<span>${price}</span></div>
                                </div>
                            <div class="card-actions justify-end ">
                                <button class="btn text-lg font-normal py-5 text-white w-full rounded-full bg-[#15803d]">Add to Cart</button>
                            </div>
                        </div>
                    </div>
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
     <div id='active-btn-${btn.id}' onclick="loadcategorydata(${btn.id})"  class="mt-2 pr-10 pl-2 rounded py-1  hover:bg-green-300 btn-class">${btn.category_name
            }</div>
    `
        catagoryContainer.appendChild(button)
    })
}
// catagory-section and btn



loadalldata()
loadcatetoryBtn()