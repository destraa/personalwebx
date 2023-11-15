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