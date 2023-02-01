var owl1 = $(".dishes__slider");
owl1.owlCarousel({
  loop: true,
  nav: true,
  dots: false,
  margin: 15,
  responsive: {
    0: {
      items: 1,
    },
    576: {
      items: 2,
    },
    768: {
      items: 3,
    },
    992: {
      items: 4,
    },
  },
});

var owl2 = $(".testimonial__slider");
owl2.owlCarousel({
  loop: true,
  nav: true,
  dots: false,
  margin: 30,
  responsive: {
    0: {
      items: 1,
    },
    576: {
      items: 2,
    },
    992: {
      items: 3,
    },
  },
});

var owl3 = $(".gallery__slider--box");
owl3.owlCarousel({
  loop: true,
  nav: false,
  dots: false,
  margin: 10,
  responsive: {
    0: {
      items: 1,
    },
    576: {
      items: 2,
    },
    768: {
      items: 3,
    },
    992: {
      items: 4,
    },
  },
});
