(()=>{"use strict";var e={baseUrl:"https://mesto.nomoreparties.co/v1/wff-cohort-8",headers:{authorization:"5b217c83-6a50-4543-a844-91ed954409e0","Content-Type":"application/json"}};function t(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}var n=function(n){return fetch("".concat(e.baseUrl,"/cards/").concat(n),{method:"DELETE",headers:e.headers}).then(t)},r=function(n){return fetch("".concat(e.baseUrl,"/cards/likes/").concat(n),{method:"PUT",headers:e.headers}).then(t)},o=function(n){return fetch("".concat(e.baseUrl,"/cards/likes/").concat(n),{method:"DELETE",headers:e.headers}).then(t)};function c(e,t){var r=e.target.closest(".card");n(t._id).then((function(){r.remove()})).catch((function(e){console.log("Ошибка, не выполенено: ".concat(e.status))}))}function a(e,t){var n=e.target,c=n.closest(".card__button_container").querySelector(".card__likes");n.classList.contains("card__like-button_is-active")?o(t).then((function(e){c.textContent=e.likes.length,n.classList.toggle("card__like-button_is-active")})):r(t).then((function(e){c.textContent=e.likes.length,n.classList.toggle("card__like-button_is-active")}))}function u(e){e.classList.add("popup_is-opened"),document.addEventListener("keydown",l)}function i(e){e.classList.remove("popup_is-opened"),document.removeEventListener("keydown",l)}function l(e){"Escape"===e.key&&i(document.querySelector(".popup_is-opened"))}function s(e){e.stopPropagation(),e.target.classList.contains("popup")&&i(e.target)}function d(e){i(e.target.closest(".popup"))}var p=function(e,t,n){var r=e.querySelector(".".concat(t.id,"-error"));t.classList.remove(n.inputErrorClass),r.classList.remove(n.errorClass),r.textContent=""},f=function(e,t,n){!function(e){return e.some((function(e){return!e.validity.valid}))}(e)?(t.classList.remove(n.inactiveButtonClass),t.removeAttribute("disabled")):(t.classList.add(n.inactiveButtonClass),t.setAttribute("disabled",""))},_=function(e,t){var n=Array.from(e.querySelectorAll(t.inputSelector));n.forEach((function(n){p(e,n,t)}));var r=e.querySelector(t.submitButtonSelector);f(n,r,t)};function m(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var y={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__error_visible"},v=document.querySelector(".places__list"),h=document.querySelector(".profile__edit-button"),S=document.querySelector(".profile__add-button"),b=document.querySelector(".popup_type_edit"),q=document.querySelector(".popup_type_new-card"),g=document.querySelector(".popup_type_new-card"),C=document.querySelectorAll(".popup__close"),k=document.querySelectorAll(".popup"),E=document.querySelector(".popup_type_image"),L=document.querySelector(".popup__form"),x=document.querySelector(".popup__form"),A=document.querySelector(".popup_type_edit"),w=A.querySelector(".popup__input_type_name"),U=A.querySelector(".popup__input_type_description"),B=document.querySelector(".profile__title"),j=document.querySelector(".profile__description"),O=document.querySelector(".profile__image"),T=A.querySelector("".concat(y.submitButtonSelector)),P=document.querySelector(".popup_type_new-card"),D=P.querySelector(".popup__input_type_card-name"),I=P.querySelector(".popup__input_type_url"),M=P.querySelector("".concat(y.submitButtonSelector)),N=E.querySelector(".popup__image"),J=E.querySelector(".popup__caption"),H=document.querySelector(".popup_type_avatar"),V=document.querySelector(".profile__image"),z=H.querySelector(".popup__input_type_url"),$=H.querySelector("".concat(y.submitButtonSelector));function F(n){n.preventDefault(),T.textContent="Сохранение...";var r,o=w.value,c=U.value;(r={name:w.value,about:U.value},fetch("".concat(e.baseUrl,"/users/me"),{method:"PATCH",headers:e.headers,body:JSON.stringify({name:r.name,about:r.about})}).then(t)).then((function(){B.textContent=o,j.textContent=c,i(b),w.value="",U.value=""})).catch((function(e){console.log(e)})).finally((function(){T.textContent="Сохранить"}))}function G(e){N.src=e.target.src,N.alt=e.target.alt,J.textContent=e.target.alt,u(E)}function K(e,t){var n=function(e,t,n){var r=n.deleteCard,o=n.openImage,c=n.likeCard,a=document.querySelector("#card-template").content.querySelector(".card").cloneNode(!0),u=a.querySelector(".card__like-button");a.querySelector(".card__likes").textContent=e.likes.length;var i=a.querySelector(".card__delete-button");e.owner._id!=t?i.remove():i.addEventListener("click",(function(t){r(t,e)}));var l=a.querySelector(".card__title"),s=a.querySelector(".card__image");return s.src=e.link,l.textContent=e.name,s.alt=e.name,s.addEventListener("click",o),e.likes.some((function(e){return e._id===t}))&&u.classList.add("card__like-button_is-active"),u.addEventListener("click",(function(t){c(t,e._id)})),a}(e,t,{deleteCard:c,likeCard:a,openImage:G});v.prepend(n)}V.addEventListener("click",(function(){z.value="",_(H,y),u(H)})),H.addEventListener("submit",(function(n){(function(n){n.preventDefault();var r,o=z.value;$.textContent="Сохранение...",(r=o,fetch("".concat(e.baseUrl,"/users/me/avatar"),{method:"PATCH",headers:e.headers,body:JSON.stringify({avatar:r})}).then(t)).then((function(){V.style="background-image: url(".concat(o,")"),i(H),z.value=""})).catch((function(e){console.log(e.status)})).finally((function(){$.textContent="Сохранить"}))})(n),z.value=""})),A.addEventListener("submit",(function(e){F(e)})),S.addEventListener("click",(function(){_(P,y),u(g)})),C.forEach((function(e){e.addEventListener("click",d)})),k.forEach((function(e){e.classList.add("popup_is-animated"),e.addEventListener("click",s)})),A.addEventListener("submit",(function(e){F(e),L.reset()})),Promise.all([fetch("".concat(e.baseUrl,"/cards"),{headers:e.headers}).then(t),fetch("".concat(e.baseUrl,"/users/me"),{headers:e.headers}).then(t)]).then((function(e){var t,n,r,o=(r=2,function(e){if(Array.isArray(e))return e}(n=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,c,a,u=[],i=!0,l=!1;try{if(c=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;i=!1}else for(;!(i=(r=c.call(n)).done)&&(u.push(r.value),u.length!==t);i=!0);}catch(e){l=!0,o=e}finally{try{if(!i&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(l)throw o}}return u}}(n,r)||function(e,t){if(e){if("string"==typeof e)return m(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?m(e,t):void 0}}(n,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),c=o[0],a=o[1];c.forEach((function(e){K(e,a._id)})),t=a,B.textContent=t.name,j.textContent=t.about,O.style="background-image: url('".concat(t.avatar,"')")})).catch((function(e){console.log("Ошибка: ".concat(e))})),h.addEventListener("click",(function(){w.value=B.textContent,U.value=j.textContent,_(A,y),u(b)})),P.addEventListener("submit",(function(n){(function(n){var r;n.preventDefault(),M.textContent="Сохранение...",(r={name:D.value,link:I.value},fetch("".concat(e.baseUrl,"/cards"),{method:"POST",headers:e.headers,body:JSON.stringify({name:r.name,link:r.link})}).then(t)).then((function(e){K(e,e.owner._id),i(q),D.value="",I.value=""})).catch((function(e){console.log("Ошибка: ".concat(e.status))})).finally((function(){M.textContent="Сохранить"}))})(n),x.reset()})),function(e){Array.from(document.querySelectorAll(e.formSelector)).forEach((function(t){t.addEventListener("submit",(function(e){e.preventDefault()})),function(e,t){var n=Array.from(e.querySelectorAll(t.inputSelector)),r=e.querySelector(t.submitButtonSelector);n.forEach((function(o){o.addEventListener("input",(function(){(function(e,t,n){t.validity.patternMismatch?t.setCustomValidity(t.dataset.errorMessage):t.setCustomValidity(""),t.validity.valid?p(e,t,n):function(e,t,n,r){var o=e.querySelector(".".concat(t.id,"-error"));t.classList.add(r.inputErrorClass),o.textContent=n,o.classList.add(r.errorClass)}(e,t,t.validationMessage,n)})(e,o,t),f(n,r,t)}))}))}(t,e)}))}(y)})();