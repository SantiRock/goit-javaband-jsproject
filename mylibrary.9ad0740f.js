var openModalBtn=document.getElementById("open-modal"),closeModalBtn=document.getElementById("close-modal"),modalContainer=document.getElementById("modal-container"),cleanstorage=document.querySelector(".cleanls");function openModal(){modalContainer.style.display="flex"}function closeModal(){modalContainer.style.display="none"}openModalBtn.addEventListener("click",(function(){openModal()})),closeModalBtn.addEventListener("click",(function(){closeModal()})),modalContainer.addEventListener("click",(function(e){e.target===modalContainer&&closeModal()})),cleanstorage.addEventListener("click",(function(e){localStorage.clear(),console.log(localStorage)}));
//# sourceMappingURL=mylibrary.9ad0740f.js.map
