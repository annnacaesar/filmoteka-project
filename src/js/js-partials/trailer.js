import MovieApiService from "./API.js";

const movieApiService = new MovieApiService();

const trailerWindow = document.querySelector(".trailer__window");
const trailerBackdrop = document.querySelector(".trailer__backdrop");

export function addListener() {
  const trailerBtn = document.querySelector(".modal__button-play");
  trailerBtn.addEventListener("click", onClickTrailer);
}

function onClickTrailer(event) {
  const id = event.currentTarget.dataset.id;
  movieApiService.fetchTrailer(id).then(({ results }) => {
    results.forEach(result => {
      if (result.name === "Official Trailer") {
        console.log(result.key);
        const modal = document.querySelector(
          ".basicLightbox .modal__container"
        );
        modal.classList.add("visually-hidden");
        // setAttribut(result.key);
        appendMarkupTrailer(result.key);
      }
    });
  });
}

trailerBackdrop.addEventListener("click", e => {
  if (e.target !== trailerBackdrop) {
    return;
  }
  closeModal();
});

function appendMarkupTrailer(key) {
  console.log(key);
  trailerBackdrop.classList.remove("visually-hidden");
  trailerWindow.innerHTML = `
  <iframe class="trailer__iframe" width="700" height="500" src="https://www.youtube.com/embed/${key}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  `;

  trailerBackdrop.addEventListener("click", e => {
    if (e.target !== trailerBackdrop) {
      return;
    }
    closeModal();
  });
}

function closeModal() {
  const modal = document.querySelector(".basicLightbox .modal__container");
  modal.classList.remove("visually-hidden");
  trailerBackdrop.classList.add("visually-hidden");
  trailerWindow.innerHTML = "";
}

// function setAttribut(key) {
//   trailerBackdrop.classList.remove('visually-hidden');
//   console.log(iFrame.getAttribute('src'));
//   iFrame.setAttribute('src', `https://www.youtube.com/embed/${key}`);
//   console.log(iFrame.getAttribute('src'));

// // Notiflix.Notify.init({ position: "center-top" });

//  filmsList.addEventListener("click", onTrailerBtnClick);

//  closeButton.addEventListener("click", e => {
//   e.preventDefault();
//   closeModal();
// });

// async function onTrailerBtnClick(event) {
//   const item = event.target.closest(".trailer-button");

//   if (!item) return;

//   const link = document.querySelector(".films__item");
//   const id = link.dataset.id;
//   try {
//     const trailerId = await getTrailer(id);
//     openModal(trailerId);
//   } catch (error) {
//     // Notiflix.Notify.failure("Trailer not found");
//   }
// }

// export function openModal(key) {
//    trailerWindow.innerHTML = `<iframe width="560" height="315" src="https://www.youtube.com/embed/${key}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;

//    trailerBackdrop.addEventListener("click", e => {
//     if (e.target !==  trailerBackdrop) {
//       return;
//     }
//     closeModal();
//   });
// }