// catagory-section and btn

let AddtoCart = []
const loadalldata = () => {


    fetch('https://openapi.programming-hero.com/api/plants')
        .then(res => res.json())
        .then(data => {
          


            displayalldata(data.plants)
        })

        
}

const managesppiner = (status) => {
    if (status === true) {
        const sppiner = document.getElementById('spinnerContainer').classList.remove('hidden')
        let cartContainer = document.getElementById('cart-container').classList.add('hidden')
    }
    else {
        const sppiner = document.getElementById('spinnerContainer').classList.add('hidden')
        let cartContainer = document.getElementById('cart-container').classList.remove('hidden')
    }
}

const loadcatetoryBtn = () => {
    fetch('https://openapi.programming-hero.com/api/categories')
        .then(res => res.json())
        .then(data => displaycategory(data.categories))
}

const loacdAddTOcart = (id) => {
    fetch(`https://openapi.programming-hero.com/api/plants`)
        .then(res => res.json())
        .then(data => {
            const card = data.plants.find(cart => cart.id == id)
            alert(` adding:`)
            AddtoCart.push(card)
            
            displayAddToCart(AddtoCart)
           
        })
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

const loadmodal = (id) => {

    fetch(`https://openapi.programming-hero.com/api/plants`)
        .then(res => res.json())
        .then(data => {

            const details = data.plants.find(cart => cart.id == id)
            displaymodal(details)
           

        })
    my_modal_1.showModal()
}

const displaymodal = (data) => {
    const { image, description, price, category, id, name } = data
    console.log(data)
    const modalContainer = document.getElementById('modalContainer')
    modalContainer.innerHTML = ""


    const modal = document.createElement('div')
    modal.innerHTML = `
      <div class="max-w-4xl mx-auto ">

                    <!-- Product Card -->
                    <div class="bg-white shadow-lg rounded-2xl overflow-hidden">

                        <!-- Product Image -->
                        <img src="h${image}" alt="${name}"
                            class="w-full h-80 object-cover"/>

                        <!-- Product Details -->
                        <div class="p-6">
                            <p class="text-sm text-gray-500 uppercase tracking-wide">${category}</p>
                            <h1 class="text-3xl font-bold text-gray-800 mt-2">${name}</h1>

                            <p class="text-gray-600 mt-4 leading-relaxed">
                               ${description}
                            </p>

                            <!-- Price & Button -->
                            <div class="mt-6 flex items-center justify-between">
                                <span class="text-2xl font-semibold text-green-600">৳${price}</span>
                                <a href="#"
                                    class="bg-green-600 text-white px-6 py-2 rounded-xl shadow hover:bg-green-700 transition">
                                    Buy Now
                                </a>
                            </div>
                        </div>
                    </div>

                </div>
     
     `

    modalContainer.appendChild(modal)

}

const loaddeletefromaddCard = ( id) =>{
    
    const filteredcard = AddtoCart.filter(del => del.id != id )
    console.log(filteredcard)
    AddtoCart = filteredcard

    // filteredcard.forEach(data=> displayAddToCart(data))
    displayAddToCart(filteredcard)
}


let p = 0;
const displayAddToCart = (cart) => {
    
    const cartContainerdiv = document.getElementById('add-cartContainer')
    cartContainerdiv.innerHTML = ""
     
   cart.forEach(deta => {
     
   

    const { image, description, price, category, id, name } = deta
    const realprice = document.getElementById('add-price')
    let prices = parseInt(realprice.innerText)
    let cardPrice = price

    p++
    p = prices + cardPrice


    realprice.innerText = p

    // console.log(cardPrice)


    
     

    const add = document.createElement('div')
    add.innerHTML = `
        <div  class="flex justify-between items-center bg-gray-100 p-4 rounded mt-4">
                    <div class="space-y-2">
                        <h1>${name}</h1>
                        <p>৳<span id="addedPrice" >${price} </span>x 1 </p>
                    </div>
                    <div class="cartText">
                        <span onclick="loaddeletefromaddCard('${id}')" id="deletebtn" class="text-xl cursor-pointer text-[#8C8C8C]"> <i class="fa-solid fa-xmark"></i></span>
                    </div>
                </div>
    `

    cartContainerdiv.appendChild(add)

   
  } )



}

const displayalldata = (data) => {

    managesppiner(false)
    let cartContainer = document.getElementById('cart-container')
    cartContainer.innerHTML = ''


    data.forEach(deta => {

        const { image, description, price, category, id, name } = deta
        const div = document.createElement('div')
        div.innerHTML = `
         <div class="card bg-base-100 max-w-96 shadow-sm p-4 h-[550px]">
                        <figure>
                            <img  class="max-h-fit container rounded max-w-full" src="${image}"
                                alt="Not Found" />
                        </figure>
                        <div class="card-body p-4 space-y-2">
                            <h2 onclick="loadmodal('${id}')" class="card-title cursor-pointer">${name}</h2>
                            <p>${description}</p>
                                <div class=" flex justify-between items-center">
                                    <div class="btn bg-green-200 rounded-full px-6 text-[#15803d]">${category}</div>
                                    <div class="font-bold text-lg text-green-600">৳<span>${price}</span></div>
                                </div>
                            <div class="card-actions justify-end ">
                                <button onclick="loacdAddTOcart(${id})" class="btn text-lg font-normal py-5 text-white w-full rounded-full bg-[#15803d]">Add to Cart</button>
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