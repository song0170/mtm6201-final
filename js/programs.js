const programList = document.querySelector("#program-list");

function createProgramCard(program) {
  return `
    <div class="col-12 col-md-6">
      <article class="card program-list-card position-relative">
        <div class="row g-0 align-items-center flex-nowrap">
          <div class="col-auto">
            <img
              src="${program.image}"
              srcset="${program.image} 400w, ${program.imageLarge} 800w"
              sizes="116px"
              class="program-list-image"
              alt="${program.imageAlt}"
            >
          </div>

          <div class="col">
            <div class="card-body">
              <h3 class="card-title">
                <a
                  href="program-details.html?id=${program.id}"
                  class="stretched-link text-reset text-decoration-none"
                >
                  ${program.name}
                </a>
              </h3>

              <ul class="program-details-list list-unstyled">
                <li>
                  <i class="fa-regular fa-user" aria-hidden="true"></i>
                  <span>${program.ageLabel}</span>
                </li>
                <li>
                  <i class="fa-solid fa-location-dot" aria-hidden="true"></i>
                  <span>${program.location}</span>
                </li>
                <li>
                  <i class="fa-solid fa-calendar-days" aria-hidden="true"></i>
                  <span>${shortDay(program.day)} ${program.time}</span>
                </li>
              </ul>
            </div>
          </div>

          <div class="col-auto d-md-none">
            <span class="program-list-arrow">
              <i class="fa-solid fa-chevron-right" aria-hidden="true"></i>
            </span>
          </div>
        </div>
      </article>
    </div>
  `;
}

programs.forEach(function (program) {
  programList.insertAdjacentHTML("beforeend", createProgramCard(program));
});