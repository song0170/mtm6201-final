const params = new URLSearchParams(window.location.search);
const programId = params.get("id");

const program = programs.find(function (item) {
  return item.id === programId;
});

function createRelatedCard(item, index) {
  const columnClass = index < 2 ? "col-6 col-md-12" : "col-md-12 d-none d-md-block";
  const imageClass = item.id === "youth-basketball" ? " basketball-related-image" : "";

  return `
    <div class="${columnClass}">
      <article class="card related-program-card h-100">
        <img
          src="${item.image}"
          srcset="${item.image} 400w, ${item.imageLarge} 800w"
          sizes="(min-width: 768px) 30vw, 50vw"
          class="card-img-top related-program-image${imageClass}"
          alt="${item.imageAlt}"
        >

        <div class="card-body">
          <div>
            <h3 class="card-title">
              <a
                href="program-details.html?id=${item.id}"
                class="stretched-link text-reset text-decoration-none"
              >
                ${item.name}
              </a>
            </h3>
            <p class="card-text">${item.tagline}</p>
          </div>

          <span class="related-program-arrow d-md-none" aria-hidden="true">
            <i class="fa-solid fa-chevron-right"></i>
          </span>
        </div>
      </article>
    </div>
  `;
}

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
    const relatedPrograms = programs.filter(function (item) {
        return item.id !== program.id;
    });

    const relatedList = document.querySelector("#related-program-list");

    relatedPrograms.forEach(function (item, index) {
        relatedList.insertAdjacentHTML("beforeend", createRelatedCard(item, index));
    });
}
