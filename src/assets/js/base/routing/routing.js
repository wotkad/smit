import barba from "@barba/core";
import barbaPrefetch from "@barba/core";
import gsap from "gsap";
import routingFunctions from "./routingFunctions";

barba.use(barbaPrefetch);

function checkHeader(nextPath) {
  let header = $('.header');
  if (nextPath == undefined) {
    nextPath = window.location.pathname;
  }
  if (
    nextPath == '/'
  ) {
    header.removeClass('header-other');
  } else {
    header.addClass('header-other');
  }
}
checkHeader();

barba.hooks.before((data) => {
  const nextPath = data.next.url.path;
  checkHeader(nextPath);
});

barba.hooks.after((data) => {
  const nextPath = data.next.url.path;
  checkHeader(nextPath);
});

barba.hooks.beforeLeave((data) => {
  const nextPath = data.next.url.path;
  const nextItem = $(`a[href="${nextPath}"]`);
  $(`.${"active"}`).removeClass("active");
  nextItem.addClass("active");
});

barba.init({
  preventRunning: true,
  requestError: (trigger, action, url, response) => {
    if (action === "click" && response.status && response.status === 404) {
      barba.go("/404");
    }
    return false;
  },
  transitions: [
    {
      name: "opacity-transition",
      leave(data) {
        return gsap.to(data.current.container, .3, {
          opacity: 0,
        });
      },
      afterLeave(data) {
        $('body,html').animate({scrollTop: 0}, 0);
        return gsap.to(data.current.container, 0, {
          display: 'none',
        });
      },
      enter(data) {
        routingFunctions();
        return gsap.from(data.next.container, .3, {
          opacity: 0
        });
      },
    },
  ],
});
