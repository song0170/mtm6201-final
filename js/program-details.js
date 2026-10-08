const params = new URLSearchParams(window.location.search);
const programId = params.get("id");

const program = programs.find(function (item) {
  return item.id === programId;
});

if (program) {
    document.querySelector("#program-detail-title").textContent = program.name;


    const image = document.querySelector("#program-image");
    image.src = program.imageLarge;
    image.srcset = `${program.image} 400w, ${program.imageLarge} 800w`;
    image.alt = program.imageAlt;

    document.querySelector("#program-age").textContent = program.ageLabel;
    document.querySelector("#program-location").textContent = program.location;
    document.querySelector("#program-schedule").innerHTML =
        `${shortDay(program.day)}<br>${program.time}`;
    document.querySelector("#program-price").textContent = `$${program.price}`;

    document.querySelector("#program-description").textContent = program.description;

    document.title = `${program.name} | Recreation Centre`;
}
