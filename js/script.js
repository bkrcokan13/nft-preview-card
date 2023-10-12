

function nftIcons() {

    const nftIcons = document.querySelectorAll(".nft-icon");

    const iconsList = [
        "img/icon-ethereum.svg",
        "img/icon-clock.svg"
    ];

    nftIcons.forEach((element, index) =>{

        const imgUrl = iconsList[index];
        element.style.backgroundImage = `url(${imgUrl})`;
        
    });
   
    
}

nftIcons();