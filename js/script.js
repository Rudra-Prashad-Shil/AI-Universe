// Loading Home Data
const loadHome = async() => {
    const url = 'https://openapi.programming-hero.com/api/ai/tools';
    try {
        const res = await fetch(url);
        const data = await res.json();
        displayHome(data.data.tools);
    } catch (error) {
        console.log(error);
    }
}

//Displaying the Data
const displayHome = (items) => {
    const cardContainer = document.getElementById('cards-container');
    items.forEach(item => {
        // console.log(item);
        const card = document.createElement('div');
        card.classList.add('block', 'w-full', 'p-6', 'bg-white', 'border', 'border-gray-200', 'rounded-lg', 'shadow', 'hover:bg-gray-100', 'dark:bg-gray-800', 'dark:border-gray-700', 'dark:hover:bg-gray-700', 'mx-auto');
        card.innerHTML = `
        <img class="rounded-lg h-2/5 w-full" src="${item?.image}" alt="image">
                <h6 class="my-2 tracking-tight text-gray-900 dark:text-white">Features</h6>
                <div class="font-normal text-gray-700 dark:text-gray-400">
                    <ul class="list-inside list-decimal">
                        <li>${item?.features[0] ? item.features[0] : 'null'}</li>
                        <li>${item?.features[1] ? item.features[1] : 'null'}</li>
                        <li>${item?.features[2] ? item.features[2] : 'null'}</li>
                    </ul>
                </div>
    
                <hr class="w-10/11 mx-auto border-black dark:border-blue-500 my-4">

                <!-- card-footer -->
                <div class="grid grid-cols-6 gap-4">
                    <div class="col-span-5">
                        <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">${item?.name}</h5>
                        <p class="font-normal text-gray-700 dark:text-gray-400">Published: ${item?.published_in ? item.published_in : 'Publishing date not Found'}</p>
                    </div>
                    <!-- card-detail -->
                    <div class="content-center">
                        <!-- modal button start -->
                        <button onclick="loadModalDet('${item?.id}')">
                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                                version="1.1" width="15" height="15" viewBox="0 0 256 256" xml:space="preserve">
                                <defs></defs>
                                <g style="stroke: none; stroke-width: 0; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: none; fill-rule: nonzero; opacity: 1;"
                                    transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)">
                                    <linearGradient id="SVGID_2" gradientUnits="userSpaceOnUse" x1="34.5269" y1="33.94"
                                        x2="62.7893" y2="54.8751">
                                        <stop offset="0%" style="stop-color:rgb(245,29,29);stop-opacity: 1" />
                                        <stop offset="99.51%" style="stop-color:rgb(172,22,22);stop-opacity: 1" />
                                    </linearGradient>
                                    <path
                                        d="M 86.328 38.568 L 51.526 3.767 c -2.526 -2.526 -6.62 -2.526 -9.146 0 l -4.187 4.187 c -2.526 2.526 -2.526 6.62 0 9.146 l 18.472 18.472 h -0.981 H 20.502 H 6.467 C 2.895 35.572 0 38.467 0 42.039 v 5.922 c 0 3.572 2.895 6.467 6.467 6.467 h 14.035 h 25.422 h 31.03 V 45 h 6.71 C 87.021 45 88.702 40.942 86.328 38.568 z"
                                        style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: url(#SVGID_2); fill-rule: nonzero; opacity: 1;"
                                        transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
                                    <linearGradient id="SVGID_3" gradientUnits="userSpaceOnUse" x1="73.4354"
                                        y1="39.2442" x2="38.3172" y2="73.1749">
                                        <stop offset="0%" style="stop-color:rgb(245,29,29);stop-opacity: 1" />
                                        <stop offset="99.51%" style="stop-color:rgb(172,22,22);stop-opacity: 1" />
                                    </linearGradient>
                                    <path
                                        d="M 88.049 49.711 L 51.526 86.233 c -2.526 2.526 -6.62 2.526 -9.146 0 l -4.187 -4.187 c -2.526 -2.526 -2.526 -6.62 0 -9.146 l 27.9 -27.9 c 5.593 -5.593 9.622 -17.044 1.11 -25.557 l 20.845 20.845 C 90.65 42.891 90.65 47.109 88.049 49.711 z"
                                        style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: url(#SVGID_3); fill-rule: nonzero; opacity: 1;"
                                        transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
                                </g>
                            </svg>
                        </button>
                        <!-- modal button end  -->
                        
                    </div>
                </div>
        `;
        cardContainer.appendChild(card);
    });
}

//Loading Details for Modals
const loadModalDet = async (id) => {
    const url = `https://openapi.programming-hero.com/api/ai/tool/${id}`;
    console.log(url);
    try {
        const res = await fetch(url);
        const data = await res.json();
        showModalDet(data.data);
    } catch (error) {
        console.log(error);
    }
}

//Displaying details for modals
const showModalDet = (giant) => {
    // console.log(giant);
    const showDetCont = document.getElementById('modal-inner-details');
    showDetCont.innerHTML = `
    <!-- modal detail section left -->
        <div class="w-full md:w-7/12 border dark:border-0 border-red-600 bg-red-50 dark:bg-gray-800 rounded-lg p-5">
            <h3 class="text-lg font-bold">${giant?.description}</h3>
            <!-- prices section -->
            <div class="flex flex-col md:flex-row gap-2 pt-4">
                <p class="bg-white rounded-lg text-center text-green-600 font-bold w-3/5 p-2  mx-auto">${giant?.pricing[0].price == 0 ? 'Free of Cost' : giant.pricing[0].price}<br>${giant?.pricing[0].plan ? giant.pricing[0].plan : 'Null'}</p>
                                
                <p class="bg-white rounded-lg text-center text-orange-500 font-bold w-3/5 p-2 mx-auto">${giant?.pricing[1].price == 0 ? 'Free of Cost' : giant.pricing[1].price}<br>${giant?.pricing[1].plan ? giant.pricing[1].plan : 'Null'}</p>
                                
                <p class="bg-white rounded-lg text-center text-red-600 font-bold w-3/5 p-2 mx-auto">${giant?.pricing[2].price == 0 ? 'Free of Cost' : giant.pricing[2].price}<br>${giant?.pricing[2].plan ? giant.pricing[2].plan : 'Null'}  </p>
            </div>
            <!-- modal detail Features -->
            <div class="py-4 flex flex-col md:flex-row gap-2">
                <ul class="w-1/2 md:w-3/5 list-inside list-disc mx-auto">
                    <h3 class="text-lg font-bold">Features</h3>
                    <li>${giant?.features[1].feature_name ? giant.features[1].feature_name : 'N/A'}</li>
                    <li>${giant?.features[2].feature_name ? giant.features[2].feature_name : 'N/A'}</li>
                    <li>${giant?.features[3].feature_name ? giant.features[3].feature_name : 'N/A'}</li>
                </ul>
                <ul class="w-1/2 md:w-2/5 list-inside list-disc mx-auto">
                    <h3 class="text-lg font-bold">Integrations</h3>
                    <li>${giant?.integrations[0] ? giant.integrations[0] : 'N/A'}</li>
                    <li>${giant?.integrations[1] ? giant.integrations[1] : 'N/A'}</li>
                    <li>${giant?.integrations[2] ? giant.integrations[2] : 'N/A'}</li>
                </ul>
            </div>
        </div>
                        
        <!-- modal detail section right -->
        <div class="w-full md:w-5/12 border border-gray-200 dark:border-gray-700 rounded-lg p-5 relative">
            <div>
                <img class="rounded-lg w-full max-w-sm" src=${giant?.image_link[0] ? giant.image_link[0] : 'No Image'} alt="Image">
                <p id="accuracy-sec" class="bg-red-500 rounded-lg text-center text-sm text-white  p-1 absolute top-6 right-6 ">${giant.accuracy.score*100}% Accuracy</p>
            </div>
            <h3 class="text-lg font-bold text-center pt-4">${giant?.input_output_examples[0].input ? giant.input_output_examples[0].input : ''}</h3>
            <h3 class="text-gray-500 text-center">${giant?.input_output_examples[0].output ? giant.input_output_examples[0].output : ''}</h3>
        </div>
    `;
    if(0 >= giant.accuracy.score*100 || giant.accuracy.score*100 > 100){
        document.getElementById("accuracy-sec").classList.add('hidden');
    };
    my_modal_det.showModal();
}

loadHome(); //top