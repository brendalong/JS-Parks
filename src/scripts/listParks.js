const listNationalParks = () => {
  getAllParks()
  .then(parksArray => {
    console.log("parksArray", parksArray);
    let nationParksFragment = document.createDocumentFragment();

    parksArray.forEach(park => {
        let parkHtml = buildParkHtml(park);
        nationParksFragment (parkHtml);

    });

    const nationalParksSection = document.querySelector("#national--parks");
    // nationalParksSection.innerHTML = "";
    clearElement(nationalParksSection);
    nationalParksSection.appendChild(nationParksFragment);
  });
};
