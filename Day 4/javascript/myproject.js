let dataBlog = [];

function addBlog(event) {
  event.preventDefault();

  let project = document.getElementById("nama-project").value;
  let startDate = new Date(document.getElementById("start-date").value);
  let endDate = new Date(document.getElementById("end-date").value);

  // Check if the start date is after the end date
  if (startDate >= endDate) {
    alert("Start date must be before end date.");
    return;
  }

  let duration = monthDiff(startDate, endDate);
  let description = document.getElementById("desc-project").value;
  let checkbox1 = document.getElementById("option-1").checked;
  let checkbox2 = document.getElementById("option-2").checked;
  let checkbox3 = document.getElementById("option-3").checked;
  let checkbox4 = document.getElementById("option-4").checked;
  let imageInput = document.getElementById("input-blog-image").files[0]; // Get the first selected image

  // Check if an image is selected
  let image = "";
  if (imageInput) {
    image = URL.createObjectURL(imageInput);
  }

  let blog = {
    project,
    startDate,
    endDate,
    duration,
    description,
    checkbox1,
    checkbox2,
    checkbox3,
    checkbox4,
    image,
  };

  dataBlog.push(blog);
  console.log(dataBlog);

  renderBlog();
}

function renderBlog() {
  document.getElementById("contents").innerHTML = "";

  for (let index = 0; index < dataBlog.length; index++) {
    console.log(dataBlog[index]);

    document.getElementById("contents").innerHTML += `
        <div class="blog-list-item">
                    <div class="thumb">
                        <img src="${dataBlog[index].image}" alt="Thumbnail">
                    </div>
                    <h4>
                        <a href="blog-detail.html">${dataBlog[index].project}</a>
                    </h4>
                    <p class="duration">durasi : ${dataBlog[index].duration} bulan</p>
                    <p>${dataBlog[index].description}</p>
                    <div class="icon-technology">
                        ${(dataBlog[index].checkbox1 ? `<img src="/Day 4/image-repository/node-js.svg" class="show" alt="Node JS">` : `<img src="/Day 4/image-repository/node-js.svg" alt="/Node Js">`)}
                        ${(dataBlog[index].checkbox2 ? `<img src="/Day 4/image-repository/react.svg" class="show" alt="React JS">` : `<img src="/Day 4/image-repository/react.svg" alt="React JS">`)}
                        ${(dataBlog[index].checkbox3 ? `<img src="/Day 4/image-repository/next js.svg" class="show" alt="Next Js">` : `<img src="/Day 4/image-repository/next js.svg" alt="Next Js">`)}
                        ${(dataBlog[index].checkbox4 ? `<img src="/Day 4/image-repository/vuejs.svg" class="show" alt="Vue JS">` : `<img src="/Day 4/image-repository/vuejs.svg" alt="Vue Js">`)}
                    </div>
                    <div class="btn-group">
                        <button class="btn-blog">edit</button>
                        <button class="btn-blog">delete</button>
                    </div>
                </div>`;
  }
}


function monthDiff(startDate, endDate) {
  let months = (endDate.getFullYear() - startDate.getFullYear()) * 12;
  months -= startDate.getMonth();
  months += endDate.getMonth();
  return months <= 0 ? 0 : months;
}
