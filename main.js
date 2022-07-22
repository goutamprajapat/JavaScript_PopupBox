 let show = document.getElementById("popup");
 let remove = document.getElementById("remove");
 let get = document.getElementById("get_popup");



 show.addEventListener("click", () => {
   if (get.style.display = "none") {
     get.style.display = "flex"
   }
 });

 remove.addEventListener("click", () => {
   if (get.style.display = "flex") {
     get.style.display = "none"
   }
 });
