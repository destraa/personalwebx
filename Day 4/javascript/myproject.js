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
        <div id="fullTime class="blog-list-item">
                    <div class="thumb">
                        <img src="${dataBlog[index].image}" alt="Thumbnail">
                    </div>
                    <h4>
                        <a href="blog-detail.html">${dataBlog[index].project}</a>
                    </h4>
                    <div  id="distanceTime">
                    <p  class="duration">durasi : ${dataBlog[index].duration} bulan</p>
                    </div>
                   
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


function getFullTime(time) {
  let monthName = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
  ];

  let date = time.getDate();
  let monthIndex = time.getMonth();
  let year = time.getFullYear();
  let hours = time.getHours();
  let minutes = time.getMinutes();

  if (hours <= 9) {
      hours = "0" + hours;
  }
  if (minutes <= 9) {
      minutes = "0" + minutes;
  }

  return `${date} ${monthName[monthIndex]} ${year} ${hours}:${minutes} WIB`;
  }

  function getDistanceTime(time) {
  let timeNow = new Date();
  let timePost = time;

  let distance = timeNow - timePost;

  let milisecond = 1000; // 1000 milisecond = 1 detik
  let secondInHours = 3600; // 3600 detik = 1 jam
  let hoursInDays = 24; // 24 jam = 1 hari

  let distanceDay = Math.floor(
      distance / (milisecond * secondInHours * hoursInDays)
  );
  let distanceHours = Math.floor(distance / (milisecond * 60 * 60));
  let distanceMinutes = Math.floor(distance / (milisecond * 60));
  let distanceSeconds = Math.floor(distance / milisecond);

  if (distanceDay > 0) {
      return `${distanceDay} day ago`;
  } else if (distanceHours > 0) {
      return `${distanceHours} hour ago`;
  } else if (distanceMinutes > 0) {
      return `${distanceMinutes} minute ago`;
  } else {
      return `${distanceSeconds} second ago`;
  }
  }

  function renderBlog() {
  // Replace with the actual timestamp of your blog post
  let blogPostTimestamp = new Date(/* set your timestamp here */);

  // Get the full time and distance time
  let fullTimeResult = getFullTime(blogPostTimestamp);
  let distanceTimeResult = getDistanceTime(blogPostTimestamp);

  // Update the content of the HTML elements
  document.getElementById('fullTime').innerHTML = fullTimeResult;
  document.getElementById('distanceTime').innerHTML = distanceTimeResult;
  }

  // Call renderBlog initially
  renderBlog();

  // Set up the setInterval function to update every 3 seconds
  setInterval(function () {
  // Update the content by calling renderBlog
  renderBlog();
  }, 3000);