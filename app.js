const marvel={
    render:()=>{
        //168c23e02dfc197051964d3331db3e0516ec41d6b0f023d3782fccba2b67efcb032799df3
        const urlAPI='https://gateway.marvel.com:443/v1/public/events?ts=1&apikey=0f023d3782fccba2b67efcb032799df3&hash=2e475b85bb25eb64a73b21ce8bb85fff';
        const container=document.querySelector('#marvel-row');
        let contenHTML='';

        fetch(urlAPI)
        .then(res=>res.json())
        .then((json)=>{console.log(json,'RES.JSON')
           for(const event of json.data.results){
                let urlEvent =event.urls[0].url;
                contenHTML+=`
                <div class="col-md-4">
                <a href="${urlEvent}" target="_blank">
                    <img src="${event.thumbnail.path}.${event.thumbnail.extension}" alt="${event.name}" class="img-thumbnail">
                </a>
                <h3 class="title">${event.name}</h3>
            </div>`;
            }
            container.innerHTML=contenHTML;
        })
    }
};
marvel.render();