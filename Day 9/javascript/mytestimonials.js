const testimonialData = [
    {
      author: "John Doe",
      testimonial: "This website is amazing! The user interface is so intuitive, and the design is modern and appealing. I'm really impressed with the attention to detail and the overall experience.",
      image:
        "https://cdn.pixabay.com/photo/2016/11/21/12/42/beard-1845166_1280.jpg",
      stars: 5,
    },
    {
      author: "Jane Smith",
      testimonial: "I've visited many websites, but this one stands out. The content is organized beautifully, and the responsiveness on mobile devices is fantastic. The clean layout makes it a joy to explore.",
      image:
        "https://cdn.pixabay.com/photo/2019/11/04/01/11/cellular-4599956_1280.jpg",
      stars: 4,
    },
    {
      author: "Alex Johnson",
      testimonial: "I stumbled upon this website and was blown away by the quality of the content. The visuals are stunning, and the navigation is seamless. It's clear that the creators put a lot of effort into making this a top-notch site.",
      image:
        "https://images.pexels.com/photos/874158/pexels-photo-874158.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      stars: 5,
    },
    
    {
      author: "Aice Jhnson",
      testimonial: "Absolutely amazing! This website exceeded all my expectations. The design is stunning, and the user experience is flawless. I can't recommend it enough!",
      image:
        "https://cdn.pixabay.com/photo/2015/01/08/18/30/entrepreneur-593371_1280.jpg",
      stars: 4,
    },
    
    {
      author: "Carol Williams",
      testimonial: "Decent website overall. It has some useful content, but there's room for improvement. The layout is a bit confusing, and I found a few broken links.",
      image:
        "https://cdn.pixabay.com/photo/2016/11/23/00/57/adult-1851571_1280.jpg",
      stars: 3,
    },
    {
      author: "David Martinez",
      testimonial: "Pretty good website! The design is modern and engaging. The content is well-organized, and I appreciate the attention to detail. Some minor glitches here and there, though",
      image:
        "https://cdn.pixabay.com/photo/2017/03/27/13/28/man-2178721_1280.jpg",
      stars: 4,
    },
 
  ];
  
  function renderStars(stars) {
    let starsArr = [];
    for (let i = 0; i < stars; i++) {
      starsArr.push(`<i class="fa-solid fa-star"></i>`);
    }
  
    const starsHTML = starsArr.join("");
    return starsHTML;
  }
  
  function renderTestimonial(image, testimonial, stars, author) {
    return `<div class="testimonial__card">
              <img class="testimonial__cardImage" src="${image}" />
              <i class="testimonial__comment">"${testimonial}"</i>
              <p class="testimonial__stars" id="reviewStars">
                ${renderStars(stars)}
              </p>
              <p class="testimonial__author">- ${author}</p>
            </div>`;
  }
  
  function filterTestimonial(stars) {
    // rating buttons
    const getAllRatingButtons = document.querySelectorAll(".rating__btn");
    getAllRatingButtons.forEach((button) => button.classList.remove("active"));

    
  
    // class by stars
    const activeRatingButtons = document.getElementById(`${stars}-stars`);
    if (activeRatingButtons) {
      activeRatingButtons.classList.add("active");
    }
  
    // filter testimonial by stars
    const filteredTestimonial = testimonialData.filter(
      (item) => item.stars === stars
    );
  
    let testimonialContainerEL = document.getElementById(
      "testimonial__container"
    );
  
    // all items
    if (stars == 0) {
      const testimonialHTML = testimonialData
        .map((item) =>
          renderTestimonial(item.image, item.testimonial, item.stars, item.author)
        )
        .join(" ");
      testimonialContainerEL.innerHTML = testimonialHTML;
      return;
    }
  
    // show no data when there is no stars selected
    if (filteredTestimonial.length === 0) {
      document.getElementById(
        "testimonial__container"
      ).innerHTML = `<h2 style="text-align: center; width: 100%;">Data Not Found</h2>`;
      return;
    }
  
    
    const testimonialHTML = filteredTestimonial
      .map((item) =>
        renderTestimonial(item.image, item.testimonial, item.stars, item.author)
      )
      .join(" ");
    testimonialContainerEL.innerHTML = testimonialHTML;
  }
  
  filterTestimonial(0);


  // To implement asynchronous programming using promises, async/await, and AJAX in your JavaScript code
// mytestimonials.js

// Function to fetch testimonials from a server asynchronously
// mytestimonials.js

// Function to fetch testimonials from the provided API
// Function to fetch testimonials from the provided API
async function fetchTestimonials() {
  try {
    const response = await fetch('https://api.npoint.io/7838abb77d1f8079a915');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching testimonials:', error);
    // Handle the error here or throw it again to be caught by the caller
    throw error;
  }
}



// Function to render testimonials on the page
function renderTestimonials(testimonials) {
  const testimonialContainer = document.getElementById('testimonial__container');
  testimonialContainer.innerHTML = ''; // Clear existing content

  testimonials.forEach((testimonial) => {
    const testimonialCard = document.createElement('div');
    testimonialCard.className = 'testimonial__card';

    testimonialCard.innerHTML = `
      <img class="testimonial__cardImage" src="${testimonial.image}" alt="User Image">
      <i class="testimonial__comment">${testimonial.testimonial}</i>
      <p class="testimonial__stars" id="reviewStars">
        ${Array.from({ length: testimonial.stars }, () => '<i class="fa-solid fa-star"></i>').join('')}
      </p>
      <p class="testimonial__author">- ${testimonial.author}</p>
    `;

    testimonialContainer.appendChild(testimonialCard);
  });
}



// Function to filter testimonials based on rating
function filterTestimonial(rating) {
  // You can implement filtering logic here if needed
  // For simplicity, we'll refetch all testimonials and render them
  fetchTestimonials().then(renderTestimonials).catch((error) => {
    // Handle error from fetchTestimonials
    console.error('Error in filterTestimonial:', error);
  });
}

// Initial load of testimonials when the page loads
document.addEventListener('DOMContentLoaded', () => {
  fetchTestimonials().then(renderTestimonials).catch((error) => {
    // Handle error from initial fetchTestimonials
    console.error('Error on page load:', error);
  });
});



// function fetchTestimonials() {
//   return new Promise((resolve, reject) => {
//     const xhr = new XMLHttpRequest();
//     xhr.open('GET', '/api/testimonials', true);

//     xhr.onload = function () {
//       if (xhr.status === 200) {
//         const testimonials = JSON.parse(xhr.responseText);
//         resolve(testimonials);
//       } else {
//         reject(new Error(`Failed to fetch testimonials. Status: ${xhr.status}`));
//       }
//     };

//     xhr.onerror = function () {
//       reject(new Error('Network error while fetching testimonials.'));
//     };

//     xhr.send();
//   });
// }

// Function to render testimonials on the page
// function renderTestimonials(testimonials) {
//   const testimonialContainer = document.getElementById('testimonial__container');
//   testimonialContainer.innerHTML = '';

//   testimonials.forEach(testimonial => {
//     const card = document.createElement('div');
//     card.className = 'testimonial__card';

//     // Create and append other elements like image, comment, stars, and author to the card

//     testimonialContainer.appendChild(card);
//   });
// }

// // Function to filter testimonials based on rating
// function filterTestimonial(rating) {
//   // Call the fetchTestimonials function to get testimonials
//   fetchTestimonials()
//     .then(testimonials => {
//       // Filter testimonials based on rating
//       const filteredTestimonials = testimonials.filter(testimonial => {
//         return testimonial.rating === rating;
//       });

//       // Render the filtered testimonials on the page
//       renderTestimonials(filteredTestimonials);
//     })
//     .catch(error => {
//       console.error(error);
//     });
// }

// // Initial load: Fetch all testimonials and render on the page
// document.addEventListener('DOMContentLoaded', function () {
//   fetchTestimonials()
//     .then(testimonials => {
//       renderTestimonials(testimonials);
//     })
//     .catch(error => {
//       console.error(error);
//     });
// });

// Asynchronous function using Promises
// function fetchData() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       // Simulate fetching data from an API
//       const data = { message: 'Data fetched successfully!' };
//       resolve(data);
//       // Uncomment the line below to simulate an error
//       // reject(new Error('Error fetching data!'));
//     }, 10000);
//   });
// }

// Using the asynchronous function with Promises
// fetchData()
//   .then((data) => {
//     console.log(data.message);
//   })
//   .catch((error) => {
//     console.error(error.message);
//   });


  // Asynchronous function using AJAX
// function fetchDataWithAjax() {
//   return new Promise((resolve, reject) => {
//     const xhr = new XMLHttpRequest();
//     xhr.open('GET', 'https://api.npoint.io/7838abb77d1f8079a915', true);

//     xhr.onload = function () {
//       if (xhr.status >= 200 && xhr.status < 300) {
//         const responseData = JSON.parse(xhr.responseText);
//         resolve(responseData);
//       } else {
//         reject(new Error(`Error fetching data. Status: ${xhr.status}`));
//       }
//     };

//     xhr.onerror = function () {
//       reject(new Error('Network error'));
//     };

//     xhr.send();
//   });
// }

// // Using the asynchronous function with AJAX
// fetchDataWithAjax()
//   .then((data) => {
//     console.log('Data:', data);
//   })
//   .catch((error) => {
//     console.error(error.message);
//   });
