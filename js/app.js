const loadData = async () => {
    const url = `https://openapi.programming-hero.com/api/ai/tools`
    const res = await fetch(url);
    const data = await res.json();
    displayData(data.data.tools);
}

const displayData = universeAI => {
    const universeContainer = document.getElementById('AI-container');
    const showAll = document.getElementById('show-all');
    if (universeAI.length > 6) {
        universeAI = universeAI.slice(0, 6);
        showAll.classList.remove('d-none');
    }

    universeAI.forEach(AI => {
        const AiDiv = document.createElement('div');
        AiDiv.classList.add('col');
        AiDiv.innerHTML = `
        <div class="card h-100 p-4">
                        <img src="${AI.image}" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">Features</h5>
                            <ol type="1">
                            <li>${AI.features[0]}</li>
                            <li>${AI.features[1]}</li>
                            <li>${AI.features[2]}</li>
                          </ol>
                        </div>
                        <div class="card-footer">
                        <h5 class="card-title">${AI.name}</h5>
                        </div>
                        
                        <input class ="border border-0 mt-2" type="date" value="2022-06-11" />
                        <button style="width: 120px;" onclick ="loadAiDetails('${AI.id}')"class="btn btn-primary mt-3"data-bs-toggle="modal" data-bs-target="#AIdetailsModal" >Show more</button>

                    </div>
        `;
        universeContainer.appendChild(AiDiv);
    })
}
//  btn show all

document.getElementById('btn-show-all').addEventListener('click', function () {
    const loadData2 = async () => {
        const url = `https://openapi.programming-hero.com/api/ai/tools`
        const res = await fetch(url);
        const data = await res.json();
        displayData2(data.data.tools);
    }

    const displayData2 = universeAI => {
        const universeContainer = document.getElementById('AI-container');
        universeContainer.textContent = '';
        const showAll = document.getElementById('show-all');
        showAll.classList.add('d-none');
        universeAI.forEach(AI => {
            const AiDiv = document.createElement('div');
            AiDiv.classList.add('col');
            AiDiv.innerHTML = `
            <div class="card h-100 p-3">
                            <img src="${AI.image}" class="card-img-top" alt="...">
                            <div class="card-body">
                                <h5 class="card-title">Features</h5>
                                <ol type="1">
                                <li>${AI.features[0]}</li>
                                <li>${AI.features[1]}</li>
                                <li>${AI.features[2]}</li>
                              </ol>
                            </div>
                            <div class="card-footer">
                            <h5 class="card-title">${AI.name}</h5>
                            </div>
                        </div>
            `;
            universeContainer.appendChild(AiDiv);
        })
    }
    loadData2();
})
// show deatils
const loadAiDetails = async id => {
    const url = `https://openapi.programming-hero.com/api/ai/tool/${id}`;
    const res = await fetch(url);
    const data = await res.json();
    displayAiDetails(data.data);
}
const displayAiDetails = AI => {
    console.log(AI);
    const modalTitle = document.getElementById('AIdetailsTitle');
    modalTitle.innerText = AI.description;
    const modalBasicPrice = document.getElementById('basicPrice');
    modalBasicPrice.innerText = AI.pricing[0].price;
    const modalproPrice = document.getElementById('proPrice');
    modalproPrice.innerText = AI.pricing[1].price;
    const modalEnterprise = document.getElementById('Enterprise');
    modalEnterprise.innerText = AI.pricing[2].price;
    const modalFeatures = document.getElementById('features1-name');
    modalFeatures.innerText = AI.features[1].feature_name;
    const modalFeatures2 = document.getElementById('features2-name');
    modalFeatures2.innerText = AI.features[2].feature_name;
    const modalFeatures3 = document.getElementById('features3-name');
    modalFeatures3.innerText = AI.features[3].feature_name;

    const modalImages = document.getElementById('imgcard');
    modalImages.innerHTML = `
    <img src="${AI.image_link[0]}" class="card-img-top" alt="...">
    `

}


loadData();
