const $container = document.getElementById("display-container");

const buildParkHtml = parkObject => {
    const parkArticle = `
        <article id="national-park--${parkObject.id}">
            <h3>${parkObject.name}</h3>
            <p>${parkObject.state}</p>
            <button id="visit--${parkObject.id}" class="visit">Visited Park</button>
            <button id="edit--${parkObject.id}" class="edit">Edit Park</button>
            <button id="delete--${parkObject.id}" class="delete">Delete Park</button>
        </article>
    `
    return parkArticle;
};

const addToParkContainer = (htmlString, parkId) => {
    $container.innerHTML += htmlString;
}

const getParkEditForm = (parkObject) => {
    const form = `
        <label>Name:</label>
        <input id="edit-park-name--${parkObject.id}" value="${parkObject.name}">
        <label>State:</label>
        <input id="edit-park-state--${parkObject.id}" value="${parkObject.state}">
        <button id="update--${parkObject.id}" class="update">Update</button>
    `;

    return form;
}

const addParkEditForm = (formString, parkId) => {
    const parkArticle = document.querySelector(`#national-park--${parkId}`);
    parkArticle.innerHTML = formString;
}

const clearHtml = () => {
    $container.innerHTML = "";
}