let map_containers = document.querySelectorAll(".container-fluid");
if (map_containers) {
  let options_map = {
    once: true, //запуск один раз, и удаление наблюдателя сразу
    passive: true,
    capture: true,
  };

  map_containers.forEach((map_container) => {
    map_container.addEventListener("click", start_lazy_map, options_map);
    map_container.addEventListener("mouseover", start_lazy_map, options_map);
    map_container.addEventListener("touchstart", start_lazy_map, options_map);
    map_container.addEventListener("touchmove", start_lazy_map, options_map);
  });

  function start_lazy_map(event) {
    let map_wrapper = event.currentTarget;

    if (!map_wrapper.classList.contains("active")) {
      map_wrapper.classList.add("active");

      let map_static = map_wrapper.querySelector(".map-image");
      let map = map_wrapper.querySelector(".ymap_lazy");

      map.setAttribute("src", map.getAttribute("data-src"));
      map.removeAttribute("data-src");

      setTimeout(() => {
        $(map_static).fadeOut(function() {
          $(map).fadeIn();
        });
      }, 100);
    }
  }
}