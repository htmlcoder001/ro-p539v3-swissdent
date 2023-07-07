'use strict';

document.addEventListener("DOMContentLoaded", () => {
  const WebT = {};

  WebT.settings = {
  };

  WebT.elements = {
    scroll_links: document.querySelectorAll('a[href^="#"]'),
  };

  /** Anchor smooth scroll **/
  (() => {
    WebT.elements.scroll_links.forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const offset = -70,
              element = document.querySelector(this.getAttribute('href')),
              target = element.getBoundingClientRect().top + window.pageYOffset + offset;
        window.scrollTo({top: target, behavior: 'smooth'});
      });
    });
  })();

  /** Confirm to close tab **/



  /** Pop-up **/
  (() => {
    window.addEventListener(
      "load",
      () => {
        setTimeout(() => {
          document.body.classList.add('--popup-active');
        }, 30000)
      }
    );

    document.querySelector('.overlay').addEventListener('click', () => {
      document.body.classList.remove('--popup-active');
    });

    document.querySelector('.popup-close').addEventListener('click', () => {
      document.body.classList.remove('--popup-active');
    });
  })();

  /** Countdown **/
  (() => {
    let sec         = 2400,
      countDiv    = document.querySelector(".js-countdown"),
      countDown   = setInterval(function () {
        secpass();
      }, 1000);

    function secpass() {
      let min     = Math.floor(sec / 60),
        remSec  = sec % 60;

      if (remSec < 10) {
        remSec = '0' + remSec;
      }
      if (min < 10) {
        min = '0' + min;
      }

      document.querySelector('.js-countdown__minutes').innerHTML = min;
      document.querySelector('.js-countdown__seconds').innerHTML = remSec;

      document.querySelector('.js-timer__minutes').innerHTML = min;
      document.querySelector('.js-timer__seconds').innerHTML = remSec;

      if (sec > 0) {
        sec = sec - 1;
      } else {
        clearInterval(countDown);
        countDiv.innerHTML = '';
      }
    }
  })();

});