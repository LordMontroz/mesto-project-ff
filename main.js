(()=>{"use strict";function e(e,t,n,o){var a=document.querySelector("#card-template").content.cloneNode(!0),r=a.querySelector(".card__like-button"),p=a.querySelector(".card__title"),u=a.querySelector(".card__image");return u.src=e.link,p.textContent=e.name,u.alt=e.name,a.querySelector(".card__delete-button").addEventListener("click",t),u.addEventListener("click",n),r.addEventListener("click",o),a}function t(e){e.target.closest(".card").remove()}function n(e){e.target.classList.toggle("card__like-button_is-active")}function o(e){return e.classList.add("popup_is-opened"),e.classList.add("popup_is-animated"),document.addEventListener("keydown",r),e}function a(e){e.classList.remove("popup_is-opened"),document.removeEventListener("keydown",r)}function r(e){"Escape"===e.key&&a(document.querySelector(".popup_is-opened"))}var p=document.querySelector(".places__list"),u=document.querySelector(".profile__edit-button"),c=document.querySelector(".profile__add-button"),i=document.querySelector(".popup_type_edit"),l=document.querySelector(".popup_type_new-card"),s=document.querySelectorAll(".popup__close"),d=document.querySelector(".popup_type_image");u.addEventListener("click",(function(){o(i)})),c.addEventListener("click",(function(){o(l)})),s.forEach((function(e){e.addEventListener("click",(function(){a(document.querySelector(".popup_is-opened"))}))})),document.addEventListener("click",(function(e){var t=e.target.closest(".popup");e.stopPropagation(),e.target.classList.contains("popup")&&a(t)}));var _=document.querySelector(".popup_type_edit"),m=_.querySelector(".popup__input_type_name"),y=_.querySelector(".popup__input_type_description");_.addEventListener("submit",(function(e){!function(e){e.preventDefault();var t=m.value,n=y.value,o=document.querySelector(".profile__title"),a=document.querySelector(".profile__description");o.textContent=t,a.textContent=n}(e),a(document.querySelector(".popup_is-opened")),m.value="",y.value=""}));var k=document.querySelector(".popup_type_new-card"),v=k.querySelector(".popup__input_type_card-name"),f=k.querySelector(".popup__input_type_url");function g(e){d.querySelector(".popup__image").src=e.target.src,d.querySelector(".popup__image").alt=e.target.alt,d.querySelector(".popup__caption").textContent=e.target.alt,o(d)}k.addEventListener("submit",(function(o){!function(o){o.preventDefault();var a={name:v.value,link:f.value};p.prepend(e(a,t,g,n))}(o),a(document.querySelector(".popup_is-opened")),v.value="",f.value=""})),[{name:"Гоор",link:"https://sportishka.com/uploads/posts/2022-03/1647382271_3-sportishka-com-p-aul-goor-turizm-krasivo-foto-3.jpg",alt:"a man sitting on top of a lush green hillside"},{name:"Гамсутль",link:"https://sportishka.com/uploads/posts/2022-03/1646701026_49-sportishka-com-p-aul-prizrak-gamsutl-v-dagestane-turizm-kra-58.jpg",alt:"Gamsutl Village, now abandoned"},{name:"Сарыкум",link:"https://saltaxi.ru/wp-content/uploads/2021/12/13441-barxan-sarykum-v-8k-respublika-dagestan-scaled.jpg",alt:"dune Sarikum"},{name:"Каньон",link:"https://sportishka.com/uploads/posts/2022-11/1667559740_21-sportishka-com-p-sulakskii-kanon-domiki-instagram-22.jpg",alt:"Sulak canyon is one of the deepest canyons in the world and the deepest in Europe, its depth reaches up to 1920 meters and a length of 53 kilometers."},{name:"Гуниб",link:"https://avatars.dzeninfra.ru/get-zen_doc/4419441/pub_638b96214549334cd540e834_638b9702ab85c31e30f11d00/scale_1200",alt:"village Gunib"},{name:"Кайтаг",link:"https://avatars.mds.yandex.net/i?id=369445eeabf6e9d2b3475b00daa44da2e39b77df_l-10351804-images-thumbs&n=13",alt:"kaitag mountains"}].forEach((function(o){var a=e(o,t,g,n);p.prepend(a)}))})();