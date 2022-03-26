
// console.log("hjbchasbhcb")
// var cards = $('#card-slider .slider-item').toArray();

// startAnim(cards);

// function startAnim(array) {
//     console.log('bckacbcabkjb')
//     if (array.length >= 4) {
//         TweenMax.fromTo(array[0], 0.5, { x: 0, y: 0, opacity: 0.75 }, { x: 0, y: -120, opacity: 0, zIndex: 0, delay: 0.03, ease: Cubic.easeInOut, onComplete: sortArray(array) });

//         TweenMax.fromTo(array[1], 0.5, { x: 79, y: 125, opacity: 1, zIndex: 1 }, { x: 0, y: 0, opacity: 0.75, zIndex: 0, boxShadow: '-5px 8px 8px 0 rgba(82,89,129,0.05)', ease: Cubic.easeInOut });

//         TweenMax.to(array[2], 0.5, { bezier: [{ x: 0, y: 250 }, { x: 65, y: 200 }, { x: 79, y: 125 }], boxShadow: '-5px 8px 8px 0 rgba(82,89,129,0.05)', zIndex: 1, opacity: 1, ease: Cubic.easeInOut });

//         TweenMax.fromTo(array[3], 0.5, { x: 0, y: 400, opacity: 0, zIndex: 0 }, { x: 0, y: 250, opacity: 0.75, zIndex: 0, ease: Cubic.easeInOut },);
//     } else {
//         $('#card-slider').append('<p>Sorry, carousel should contain more than 3 slides</p>')
//     }
// }

// function sortArray(array) {
//     clearTimeout(delay);
//     var delay = setTimeout(function () {
//         console.log("kj ckjasnkjcnkjn")
//         var firstElem = array.shift();
//         array.push(firstElem);
//         return startAnim(array);
//     }, 3000)
// }

// ***************************************
// var scrollW = document.getElementById("wrap-scroll");
// var scrollUl = document.getElementById("ul-scroll");
// var itemsScrolled,
//     itemsMax,
//     cloned = false;

// var listOpts = {
//     itemCount: null,
//     itemHeight: null,
//     items: [],
// };

// function scrollWrap() {

//     itemsScrolled = Math.ceil((this.scrollTop + listOpts.itemHeight / 2) / listOpts.itemHeight);

//     if (this.scrollTop < 1) {
//         itemsScrolled = 0;
//     }

//     listOpts.items.forEach(function (ele) {
//         ele.classList.remove("active");
//     })

//     if (itemsScrolled < listOpts.items.length) {
//         listOpts.items[itemsScrolled].classList.add("active");
//     }

//     if (itemsScrolled > listOpts.items.length - 3) {

//         var node;
//         for (_x = 0; _x <= itemsMax - 1; _x++) {

//             node = listOpts.items[_x];

//             if (!cloned) {
//                 node = listOpts.items[_x].cloneNode(true);
//             }

//             scrollUl.appendChild(node);
//         }

//         initItems(cloned);
//         cloned = true;
//         itemsScrolled = 0;

//     }
// }

// function initItems(scrollSmooth) {

//     listOpts.items = [].slice.call(scrollUl.querySelectorAll("li"));
//     listOpts.itemHeight = listOpts.items[0].clientHeight;
//     listOpts.itemCount = listOpts.items.length;

//     if (!itemsMax) {
//         itemsMax = listOpts.itemCount;
//     }

//     if (scrollSmooth) {
//         var seamLessScrollPoint = ((itemsMax - 3) * listOpts.itemHeight);
//         scrollW.scrollTop = seamLessScrollPoint;
//     }

// }

// document.addEventListener("DOMContentLoaded", function (event) {
//     initItems();
//     scrollW.onscroll = scrollWrap;
// });


