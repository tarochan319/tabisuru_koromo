"use script";

// 世界地図
jQuery(document).ready(function () {
  jQuery("#vmap").vectorMap({
    map: "world_en",
    backgroundColor: "url(#Pattern)",
    borderColor: "black",
    borderOpacity: 1,
    borderWidth: 0.3,
    color: "url(#Pattern)",
    enableZoom: true,
    hoverColor: "#c0c0c0",
    hoverOpacity: 0.8,
    normalizeFunction: "linear",
    scaleColors: ["#b6d6ff", "#005ace"],
    selectedColor: "#2BBF00",
    selectedRegions: null,
    showTooltip: true,
    onRegionClick: function (element,code,region) {
      var message =
        'クリックした国は: "' +
        region +
        '" 国コード: ' +
        code.toUpperCase();
      console.log(element.target);
      alert(message);
    },
  });
});

// $(function () {
//   $(document).click(function (code) {
//     var target = $(code.target);

//     if (target == us) {
//       alert("あめりかだよ");
//     }
//   });
// });

//   #vmap配下に変更があったとき
$("#vmap").on("DOMSubtreeModified propertychange", function () {
  //   svg要素を作成する
  let defs = document.createElementNS('http://www.w3.org/2000/svg', 'defs');
  let pattern = document.createElementNS('http://www.w3.org/2000/svg', 'pattern');
  let circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
  let rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
  pattern.setAttribute("id", "Pattern");
  pattern.setAttribute("x", "0");
  pattern.setAttribute("y", "0");
  pattern.setAttribute("patternUnits", "userSpaceOnUse");
  pattern.setAttribute("width", "5");
  pattern.setAttribute("height", "5");
  rect.setAttribute("x", "0");
  rect.setAttribute("y", "0");
  rect.setAttribute("width", "100");
  rect.setAttribute("height", "100");
  rect.setAttribute("fill", "white");
  circle.setAttribute("cx", "2");
  circle.setAttribute("cy", "2");
  circle.setAttribute("r", "1");
  circle.setAttribute("fill", "#2BBF00");
  pattern.append(rect);
  pattern.appendChild(circle);
  defs.appendChild(pattern);


  // svg要素を追加する
  if ($("svg defs").length == 0) {
    $("svg").prepend(defs);
  }
});


// メインメニュー
$(document).ready(function () {

  // (function ($) {
  var $nav = $("#navArea");
  var $btn = $(".toggle_btn1");
  var $mask = $("#mask");
  var open = "open"; // class
  // menu open close
  $btn.on("click", function () {
    if (!$nav.hasClass(open)) {
      $nav.addClass(open);
    } else {
      $nav.removeClass(open);
    }
  });
  // mask close
  $mask.on("click", function () {
    $nav.removeClass(open);
  });
});


// })(jQuery);
// $("#vmap").on('click', function () {
//   $(".modal_content").fadeIn();

//   let box = $("<div></div>", {
//     class: 'popUpItem',
//     css: {
//       "position": "absolute", "border-radius": "10px", "top": "35%", "left": "50%", "transform": "translate(-50%,-50%)", "background": "white", "width": "50%", "height": "55%", "transition": "0.5s"
//     },
//   });

//   let overlay = $("<div></div>", {
//     class: 'popup_overlay',
//     css: {
//       "display": "flex", "justify-content": "center", "overflow": "auto", "position": "fixed", "top": "0", "left": "0", "z-index": "9999", "width": "100%", "height": "100%", "background": "rgba(100,100,100,0.7)", "opacity": "0", "transition": "opacity 0.5s, transform 0s 0.5s", "transform": "scale(0)"
//     },
//   });

//   let close = $("<button>閉じる</button>", {
//     class: 'close_btn',
//     css: {
//       "color": "green"
//     },
//   });

//   box.append(close);
//   box.append(overlay);
//   $('#vmap').append(box);
// });

// $(".close_btn").on('click', function () {
//   $(".modal_content").fadeOut();
// });


