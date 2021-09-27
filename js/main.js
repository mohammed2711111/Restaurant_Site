
/**=====================================================================================================
 * 
 * todo:                   ------Start--------
 * 
 ========================================================================================================*/

window.addEventListener(`load`, function () {

  /**=====================================================================================================
   * 
   * * *                   ------Aos Library--------
   * 
   ========================================================================================================*/

  AOS.init();
  /**=====================================================================================================
   * 
   * ?                   ------Burger--------
   * 
   ========================================================================================================*/
  const navSlide = () => {
    const burger = document.querySelector(`.burger`);
    const links = document.querySelector(`nav`);
    burger.addEventListener(`click`, () => {
      links.classList.toggle(`nav-active`)
      // burger.classList.toggle('burgermove')
    })

  }
  navSlide();

  //? anothe burger action
  var bugs = document.querySelector('.burger');
  bugs.addEventListener(`click`, function () {
    bugs.classList.toggle(`lastbugs`)
  })

  // Scroll Event
  window.addEventListener(`scroll`, () => {
    console.log(window.scrollY)
    if (window.scrollY > 0) {
      bugs.classList.remove("stocky");
    } else {

      bugs.classList.add("stocky");
    }
  })
  /**=====================================================================================================
   * 
   * ?                   ------Burger Letter X--------
   * 
  ========================================================================================================*/

  const menubtn = document.querySelector(`.burger`);
  let menuOpen = false;

  menubtn.addEventListener(`click`, () => {
    if (!menuOpen) {
      menubtn.classList.add(`open`);
      menuOpen = true;
    } else {
      menubtn.classList.remove(`open`);
      menuOpen = false;
    }
  });


  /**=====================================================================================================
   * 
   * ?                   ------Sticky Header--------
   * 
  ========================================================================================================*/

  window.addEventListener(`scroll`, function () {
    var header = document.querySelector(`header`);
    header.classList.toggle("sticky", window.scrollY > 0);
    var lonks = document.querySelector(`nav`);
    lonks.classList.toggle("lonks-action", window.scrollY > 0);
  })

  /**=====================================================================================================
   * 
   * ?                   ------Scroll To Top--------
   * 
  ========================================================================================================*/

  var btn = $('#button');

  $(window).scroll(function () {
    if ($(window).scrollTop() > 300) {
      btn.addClass('show');
    } else {
      btn.removeClass('show');
    }
  });

  btn.on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: 0 }, '300');
  });


  /**=====================================================================================================
   * 
   * ?                   ------Zoom On Scroll--------
   * 
  ========================================================================================================*/

  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    $(".zoom  img").css({
      width: (100 + scroll / 5) + "%"
    })
  });

  /**=====================================================================================================
   * 
   * * *                   ------Aos Library--------
   * 
  ========================================================================================================*/
  AOS.init();

})

/**=====================================================================================================
 * 
 * ?                   ------Carusor--------
 * 
========================================================================================================*/

$(document).ready(function () {
  // Activate Carousel
  $("#carouselExampleIndicators").carousel({ interval: 8000 });

})
/**=====================================================================================================
 *
 * todo:                   ------End--------
 *
========================================================================================================*/
