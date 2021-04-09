(function(w, d, t) {
  var fn = {};
  var DOM = {};
  var temp = {};
  DOM.FaqFrame = d.getElementById("FaqFrame");
  DOM.FaqCont = DOM.FaqFrame.getElementsByClassName("FaqTitle")[0];

  DOM.FaqItem = DOM.FaqFrame.getElementsByClassName("FaqItem")[0];
  DOM.FaqCont = DOM.FaqFrame.getElementsByClassName("FaqCont")[0];
  DOM.FaqPara = DOM.FaqCont.getElementsByTagName("p");
  DOM.FaqQues = DOM.FaqItem.getElementsByClassName("q")[0];
  DOM.FaqAns = DOM.FaqItem.getElementsByClassName("a")[0];
  fn.FaqSeeAll = function() {
    DOM.FaqQues.innerHTML = "";
    temp.HTML = "<ul class='FaqUl'>";
    for (temp.i = 0; temp.i < DOM.FaqPara.length; temp.i++) {
      temp.HTML += "<li class='FaqLi' data-index='" + temp.i + "' >" + DOM.FaqPara[temp.i].getAttribute("data-q") + "</li>";
    }
    temp.HTML += "</ul>";
    DOM.FaqAns.innerHTML = temp.HTML;
  };
  fn.FaqSlide = function(i) {
    temp.i = i;
    temp.DATA = DOM.FaqPara[temp.i].getAttribute("data-q");
    DOM.FaqQues.innerHTML = "<div class='FaqQuesOuter' >" + "<div class='FaqBack'>❮ </div><div class='FaqQuesBody' >" + temp.DATA + "</div></div>";
    DOM.FaqAns.innerHTML = DOM.FaqPara[temp.i].innerHTML;
  };
  fn.Tween1 = function(x, i) {
    t.to(x, 0.4, {
      ease: Power4.easeIn,
      scale: 0.9,
      opacity: 0,

      transformOrigin: '50% 50% -50%',
      onComplete: function() {
        fn.FaqSlide(i);
        t.to(x, 0.4, {
          scale: 1,
          opacity: 1
        });
      }
    });
  };
  fn.Tween2 = function(x) {
    t.to(x, 0.4, {
      ease: Power4.easeIn,
      scale: 0.9,
      opacity: 0,

      transformOrigin: '50% 50% -50%',
      onComplete: function() {
        fn.FaqSeeAll();
        t.to(x, 0.4, {
          scale: 1,
          opacity: 1
        });
      }
    });
  };

  fn.FaqSeeAll();

  DOM.FaqAns.addEventListener('click', function(e) {
    if (e.target.className.split(' ').indexOf("FaqLi") > -1) {
      fn.Tween1(DOM.FaqItem, e.target.getAttribute("data-index"));
    }
  }, false);
  DOM.FaqQues.addEventListener('click', function(e) {
    if (e.target.className.split(' ').indexOf("FaqQuesOuter") > -1 || e.target.className.split(' ').indexOf("FaqBack") > -1 || e.target.className.split(' ').indexOf("FaqQuesBody") > -1) {
      fn.Tween2(DOM.FaqItem);
    }
  }, false);

})(window, document, TweenMax);
