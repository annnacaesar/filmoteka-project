import * as basicLightbox from "basiclightbox";

const modalTeamRef = document.querySelector('.footer__btn');

modalTeamRef.addEventListener('click', onOpenModalTeam);

function onOpenModalTeam() {
    console.log('Hello');
    const modalTeam = basicLightbox.create(`
    <div class="modal__container">
    <button class="modal__close">
      <div class="modal__close-first"></div>
      <div class="modal__close-second"></div>
    </button>
    <div class="modal-wrap">
      <div class="team__wrap">
        <h1 class="team__title">Team three</h1>
        <ul class="team__list">
          <li class="team__item">
            <img
              src="../../images/team/cisar-min.jpg"
              alt="Anna Tsisar"
              class="team__item-img"
             
            />
            <p class="team__item-name">Anna Tsisar</p>
            <p class="team__item-role">Team Lead</p>
            <a href="http://github.com"
              ><img
                src="./images/team/github.png"
                alt=""
                width="20"
                height="20"
                class="team__item-icon"
            /></a>
          </li>
          <li class="team__item">
            <img
              src="./images/team/capkov-min.jpg"
              alt="Andriy Tsapkov"
              class="team__item-img"
             
            />
            <p class="team__item-name">Andriy Tsapkov</p>
            <p class="team__item-role">Scrum</p>
            <a href="http://github.com"
              ><img
                src="./images/team/github.png"
                alt=""
                width="20"
                height="20"
                class="team__item-icon"
            /></a>
          </li>
          <li class="team__item">
            <img
              src="./images/team/dima-min.jpg"
              alt="Dmytro Onishchuk"
              class="team__item-img"
           
            />
            <p class="team__item-name">Dmytro Onishchuk</p>
            <p class="team__item-role">Developer</p>
            <a href="http://github.com"
              ><img
                src="./images/team/github.png"
                alt=""
                width="20"
                height="20"
                class="team__item-icon"
            /></a>
          </li>
          <li class="team__item">
            <img
              src="./images/team/boyko-min.jpg"
              alt="Natalia Boyko"
              class="team__item-img"
            
            />
            <p class="team__item-name">Natalia Boyko</p>
            <p class="team__item-role">Developer</p>
            <a href="http://github.com"
              ><img
                src="./images/team/github.png"
                alt=""
                width="20"
                height="20"
                class="team__item-icon"
            /></a>
          </li>
          <li class="team__item">
            <img
              src="./images/team/yovbak-min.jpg"
              alt="Serhiy Yovbak"
              class="team__item-img"
            
            />
            <p class="team__item-name">Serhiy Yovbak</p>
            <p class="team__item-role">Developer</p>
            <a href="http://github.com"
              ><img
                src="./images/team/github.png"
                alt=""
                width="20"
                height="20"
                class="team__item-icon"
            /></a>
          </li>
          <li class="team__item">
            <img
              src="./images/team/timur-min.jpg"
              alt="Tymur Popov"
              class="team__item-img"
           
            />
            <p class="team__item-name">Tymur Popov</p>
            <p class="team__item-role">Developer</p>
            <a href="http://github.com"
              ><img
                src="./images/team/github.png"
                alt=""
                width="20"
                height="20"
                class="team__item-icon"
            /></a>
          </li>
          <li class="team__item">
            <img
              src="./images/team/bunio-min.jpg"
              alt="Oleg Bunio"
              class="team__item-img"
          
            />
            <p class="team__item-name">Oleg Bunio</p>
            <p class="team__item-role">Developer</p>
            <a href="http://github.com"
              ><img
                src="./images/team/github.png"
                alt=""
                width="20"
                height="20"
                class="team__item-icon"
            /></a>
          </li>
          </li>
            <li class="team__item">
            <img
              src="./images/team/alex-min.jpg"
              alt="Alex Chekov"
              class="team__item-img"
           
            />
            <p class="team__item-name">Alex Chekov</p>
            <p class="team__item-role">Developer</p>
            <a href="http://github.com"
              ><img
                src="./images/team/github.png"
                alt=""
                width="20"
                height="20"
                class="team__item-icon"
            /></a>
          </li>
                    
        </ul>
      </div>
    </div>
  </div>
`,{
        onShow: modalTeam => {
          window.addEventListener("keydown", escapeKeyCloseModal);
          modalTeam.element().querySelector(".modal__close").onclick = modalTeam.close;
        },
        onClose: modalTeam => {
          window.removeEventListener("keydown", escapeKeyCloseModal);
        },
      }
    );
    function escapeKeyCloseModal(event) {
      if (event.code === "Escape") {
        modalTeam.close();
      }
    }
    modalTeam.show();
  }
    
