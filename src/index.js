window.onload = setCurrentDate;

//Set the defult value for searching date



setValuePrice();

function setCurrentDate() {
    const currentDate = new Date();
    const dateInput = document.getElementById("Date");
    dateInput.value = currentDate.toISOString().slice(0, 10);
    defultPriceValue();
}



//Set the value of current Price
function setValuePrice(){
    const currentPrice = document.getElementById("currentPrice");
    const Price = document.getElementById("Price");
    
    Price.addEventListener("input",(e)=>{
        const currentValue = e.target.value;
        // console.log(currentValue);
        let CVstr = currentValue.toString();
        currentPrice.innerHTML = "$"+CVstr;
    })
}

function defultPriceValue(){
    const currentPrice = document.getElementById("currentPrice");
    currentPrice.innerHTML = "$2500";
}

//Asign the information about the tourist place 

const Location = [
    {
        name:"Japan",
        img:"/tourist pic/jezael-melgoza-alY6_OpdwRQ-unsplash.jpg",
        price:850,
        title:"Discover the captivating blend of ancient tradition and modern innovation in Japan. Explore the serene temples of Kyoto, the bustling streets of Tokyo, and the breathtaking beauty of Mount Fuji. Immerse yourself in rich cultural experiences, from tea ceremonies to vibrant festivals. Japan promises an unforgettable journey through its diverse and enchanting landscapes."
    },
    {
        name:"Thailand",
        img:"/tourist pic/sumit-chinchane-jWKk-0ZBUyg-unsplash.jpg",
        price: 700,
        title: "Experience the vibrant charm of Thailand, where golden temples and bustling markets meet stunning beaches and lush jungles. Wander through the historic grandeur of Bangkok's Grand Palace, relax on the pristine shores of Phuket, and explore the ancient ruins of Ayutthaya. Delight in the rich flavors of Thai cuisine and the warm hospitality of its people. Thailand offers an unforgettable adventure in every corner.",
    },
    {
        name:"China",
        img:"/tourist pic/hanson-lu-Q36BvLGdOAg-unsplash.jpg",
        price: 830,
        title: "Explore the rich tapestry of China's history and culture through its stunning attractions. Walk along the majestic Great Wall, delve into the ancient wonders of the Forbidden City, and admire the intricate Terracotta Army. Experience the modern vibrancy of Shanghai and the picturesque landscapes of Guilin. China offers a captivating journey through its timeless heritage and dynamic present.",
    },
    {
        name:"Italy",
        img:"/tourist pic/dan-novac-1naE8177_bI-unsplash.jpg",
        price: 980,
        title: "Delve into the enchanting allure of Italy, where history, art, and culinary delights abound. Wander through Rome's ancient ruins, marvel at Florence's Renaissance masterpieces, and experience the romantic canals of Venice. Savor the flavors of Italian cuisine in charming villages and bustling cities alike. Italy promises an unforgettable journey through its rich cultural and scenic landscapes."
    },
    {
        name:"England",
        img:"/tourist pic/aron-van-de-pol-tZDtyUrYrFU-unsplash.jpg",
        price: 1299,
        title:"Experience the rich history and vibrant culture of England. Visit the iconic landmarks of London, including the Tower of London and Buckingham Palace, and explore the charming streets of Oxford and Cambridge. Marvel at the scenic beauty of the Lake District and the historic grandeur of Stonehenge. England promises a captivating journey through its timeless heritage and picturesque landscapes."
    },
    {
        name:"Singapore",
        img:"/tourist pic/mike-enerio-7ryPpZK1qV8-unsplash.jpg",
        price: 920,
        title:"Explore the dynamic cityscape of Singapore, where modern marvels meet lush greenery. Marvel at the futuristic architecture of Marina Bay Sands and the Gardens by the Bay, and stroll through the vibrant streets of Chinatown and Little India. Discover the rich biodiversity at the Singapore Botanic Gardens and the thrilling attractions on Sentosa Island. Singapore offers a unique blend of cultural diversity and cutting-edge attractions."
    },
    {
        name:"Spain",
        img:"/tourist pic/jorge-fernandez-salas-ChSZETOal-I-unsplash.jpg",
        price: 1300,
        title:"Immerse yourself in the vibrant spirit of Spain, where history, art, and culture come alive. Marvel at the stunning architecture of Gaudí in Barcelona, explore the majestic Alhambra in Granada, and relax on the sun-kissed beaches of Costa del Sol. Savor the rich flavors of Spanish cuisine and experience the lively atmosphere of traditional flamenco. Spain promises an unforgettable journey through its diverse and enchanting landscapes."
    },
    {
        name:"Switzerland",
        img:"/tourist pic/omer-faruk-bekdemir-5BuxuWIJF1Q-unsplash.jpg",
        price: 990,
        title:"Discover the breathtaking beauty of Switzerland, where majestic mountains and pristine lakes create a stunning landscape. Explore the charming streets of Zurich and Geneva, and experience the historic charm of Lucerne. Enjoy world-class skiing in the Swiss Alps and take in the panoramic views from the Matterhorn. Switzerland offers an unforgettable adventure through its picturesque scenery and vibrant cities."
    },
    {
        name:"Netherland",
        img:"/tourist pic/azhar-j-t2hgHV1R7_g-unsplash.jpg",
        price: 1080,
        title:"Explore the charming Netherlands, known for its picturesque canals, historic windmills, and vibrant tulip fields. Wander through the iconic streets of Amsterdam, with its world-class museums like the Rijksmuseum and Van Gogh Museum. Visit the medieval city of Utrecht and the picturesque village of Giethoorn, known as the 'Venice of the North'. The Netherlands offers a delightful blend of cultural heritage, artistic treasures, and scenic landscapes."
    }
]

const categories_location = [...new Set(Location)];


document.getElementById("Location").addEventListener("keyup",(e)=>{
    const searchData = e.target.value.toLowerCase();
    const filterData = categories_location.filter((item)=>{
        return(
            item.title.toLocaleLowerCase().includes(searchData)
        )
    })

    disPlayItem(filterData);
})




function disPlayItem(items){
    document.getElementById("reconmendLocation").innerHTML = items.map((item,index)=>{
        let {name,img,price,title} = item;

        return(`<div class="relative flex flex-col py-12  shadow-md  my-5 rounded-lg">
                    <img src="${img}" class="absolute  w-full object-cover inset-0" alt="">
                    <br>
                    <div class="relative p-1 mt-44 container flex justify-center items-center">
                        <span class=""><i class="fa-solid fa-location-dot mr-1 text-sky-500"></i>${name}</span>
                    </div>
                    <hr class="relative mx-auto w-3/4 border-gray-400">
                    <div class="relative my-3"><span class="text-sm ml-3 p-2 bg-yellow-300 rounded-lg text-slate-500 cursor-default">recommend</span> <span class="absolute right-0 mr-4 font-bold text-lg">$${price}</span></div>
                    <hr class="relative mx-auto w-3/4 border-gray-400">
                    <div class="relative px-4 overflow-hidden h-[20vh]">
                        <p>${title}</p>
                        <div class="absolute inset-x-0 bottom-0 h-8 bg-gradient-to-t from-white to-transparent"></div>
                    </div>
                    <hr class="relative mx-auto w-3/4 border-gray-400">
                    <button class="p-3 bg-sky-300 rounded-lg shadow-md mx-auto hover:text-gray-200 hover:bg-sky-400">Details</button>
                </div>`)
    }).join('');

};

disPlayItem(categories_location);


document.querySelectorAll(".icon-toggle").forEach(icon=>{
    icon.addEventListener("click",(e)=>{
        e.preventDefault();
        icon.querySelector(".fa-solid").classList.toggle("rotate-90");
        const nextel = icon.nextElementSibling;
        nextel.classList.toggle("show");
    })
})

