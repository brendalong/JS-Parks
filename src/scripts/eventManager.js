const handleDelete = () => {
    let parkId = event.target.parentNode.id.split("--")[1];

    deletePark(parkId).then(() => listNationalParks());
};

const handleVisited = () => {
    console.log("visited button clicked", event.target.id.split("--")[1]);

    let parkId = event.target.id.split("--")[1];
    console.log("park", parkId);
    let visitedParkObject = {
        visited: true
    };

    patchPark(parkId, visitedParkObject)
        .then(() => listNationalParks());
};


const handleEdit = () => {
    let parkId = event.target.id.split("--")[1];

    getPark(parkId).then(parkToEdit => {
        const editFormForPark = getParkEditForm(parkToEdit);
        addParkEditForm(editFormForPark, parkId)

        document.querySelectorAll(".update").forEach(btn => {
            btn.addEventListener("click", handleUpdate);
        });
    });

};

const handleUpdate = () => {
    console.log("update button clicked", event.target.id.split("--")[1]);
    let parkId = event.target.id.split("--")[1];

    const editedParkName = document.querySelector(`#edit-park-name--${parkId}`);
    const editedParkState = document.querySelector(`#edit-park-state--${parkId}`);

    console.log(editedParkName.value, editedParkState.value);

    let editedPark = {
        name: editedParkName.value,
        state: editedParkState.value
    };

    putPark(parkId, editedPark).then(() => listNationalParks());
};
