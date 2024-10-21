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
const displayHome = (items) => {
    const cardContainer = document.getElementById('cards-container');
    items.forEach(item => {
        // console.log(item);
        const card = document.createElement('div');
        card.classList.add('block', 'max-w-sm', 'p-6', 'bg-white', 'border', 'border-gray-200', 'rounded-lg', 'shadow', 'hover:bg-gray-100', 'dark:bg-gray-800', 'dark:border-gray-700', 'dark:hover:bg-gray-700', 'mx-auto');
        card.innerHTML = `
        <img class="rounded-lg h-2/5" src="${item?.image}" alt="image">
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
                        <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">${item.name}</h5>
                        <p class="font-normal text-gray-700 dark:text-gray-400">Published: ${item?.published_in ? item.published_in : 'Publishing date not Found'}</p>
                    </div>
                    <!-- card-detail -->
                    <div class="content-center">
                        <!-- modal button start -->
                        <button onclick="loadModalDet('${item.id}')">
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

const loadModalDet = async (id) => {
    const url = `https://openapi.programming-hero.com/api/ai/tool/${id}`;
    const res = await fetch(url);
    const data = await res.json()
    showModalDet(data.data);
}
const showModalDet = (giant) => {
    console.log(giant);
    const showDetCont = document.getElementById('modal-inner-details');
    showDetCont.innerHTML = `
    <!-- modal detail section left -->
                        <div class="w-full md:w-1/2 border dark:border-0 border-red-600 bg-red-50 dark:bg-gray-800 rounded-lg p-5">
                            <h3 class="text-lg font-bold">ChatGPT is an AI-powered chatbot platform that uses OpenAI's GPT technology to simulate human conversation.</h3>
                            <!-- prices section -->
                            <div class="flex flex-col md:flex-row gap-2 pt-4">
                                <p class="bg-white rounded-lg text-center text-green-600 font-bold w-3/5 p-2  mx-auto">10 <br>month<br>Basic</p>
                                
                                <p class="bg-white rounded-lg text-center text-orange-500 font-bold w-3/5 p-2 mx-auto">50/<br>month<br>Pro</p>
                                
                                <p class="bg-white rounded-lg text-center text-red-600 font-bold w-3/5 p-2 mx-auto">Contact<br>Us<br>Enterprise</p>
                            </div>
                            <!-- modal detail Features -->
                            <div class="py-4 flex flex-col md:flex-row gap-2">
                                <ul class="w-1/2 md:w-3/5 list-inside list-disc mx-auto">
                                    <h3 class="text-lg font-bold">Click the</h3>
                                    <li>1</li>
                                    <li>2</li>
                                    <li>3</li>
                                </ul>
                                <ul class="w-1/2 md:w-2/5 list-inside list-disc mx-auto">
                                    <h3 class="text-lg font-bold">Click the</h3>
                                    <li>1</li>
                                    <li>2</li>
                                    <li>3</li>
                                </ul>
                            </div>
                        </div>
                        <!-- modal detail section right -->
                        <div class="w-full md:w-1/2 border border-gray-200 dark:border-gray-700 rounded-lg p-5">
                            <div>
                                <img class="rounded-lg w-full max-w-sm" src="https://img.freepik.com/free-psdgoogle-icon-isolated-3d-render-illustration_47987-9777.jpg?size=338&ext=jpg" alt="">
                            <p class="bg-red-500 rounded-lg text-center text-sm text-white w-1/6 p-1 absolute top-20 right-20 sm:top-24 sm:right-24">94% Accuracy</p>
                            </div>
                            <h3 class="text-lg font-bold text-center">Click the button below to close</h3>
                            <h3 class="text-gray-500 text-center">Click the button below to close</h3>
                        </div>
    `;
    my_modal_det.showModal();
}

loadHome();