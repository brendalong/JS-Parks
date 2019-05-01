const listNationalParks = () => {
  getAllParks()
    .then(parksArray => {
      console.log("parksArray", parksArray);

      parksArray.forEach(park => {
        const parkHtml = buildParkHtml(park);
        addToParkContainer(parkHtml, park.id);
      });


      document.querySelectorAll(".visit").forEach(btn => {
        btn.addEventListener("click", handleVisited);
      });

      document.querySelectorAll(".edit").forEach(btn => {
        btn.addEventListener("click", handleEdit);
      });

      document.querySelectorAll(".delete").forEach(btn => {
        btn.addEventListener("click", handleDelete);
      });
    });
};
