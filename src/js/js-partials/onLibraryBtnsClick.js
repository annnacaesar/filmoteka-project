const libraryWatchedBtn = document.querySelector(".library__watched-btn");
const libraryQueueBtn = document.querySelector(".library__queue-btn");

const libraryBtnGroup = document.querySelector(".button-group");

libraryBtnGroup.addEventListener('click', onLibraryBtnsClick);

function onLibraryBtnsClick (evt) {
    if (evt.target.nodeName !== "BUTTON") {
        return;
    };

    // if (evt.target.classList.contains('is-active')) {
    //     evt.target.classList.toggle('is-active')
    // };

    if (libraryWatchedBtn.classList.contains('is-active')) {
        libraryWatchedBtn.classList.remove('is-active');
        libraryQueueBtn.classList.add('is-active');
        return;
    }

    if (libraryQueueBtn.classList.contains('is-active')) {
        libraryWatchedBtn.classList.add('is-active');
        libraryQueueBtn.classList.remove('is-active');
        return;
    }

};


