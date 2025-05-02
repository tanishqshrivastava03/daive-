function loco() {
          gsap.registerPlugin(ScrollTrigger);
      
      
          const locoScroll = new LocomotiveScroll({
              el: document.querySelector("#main"),
              smooth: true
          });
          locoScroll.on("scroll", ScrollTrigger.update);
      
          ScrollTrigger.scrollerProxy("#main", {
              scrollTop(value) {
                  return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
              }, 
              getBoundingClientRect() {
                  return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
              },
              pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
          });
      
          ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
      
          ScrollTrigger.refresh();
      
      }
      
      loco()
      
      function sheryAnimation() {
          Shery.mouseFollower();
          Shery.makeMagnet("#nav h4,#nav #first");

      
        //   Shery.imageEffect(".images", {
        //       style: 4,
        //       // debug:true,
        //       gooey: true,
        //       config: { "a": { "value": 2, "range": [0, 30] }, "b": { "value": 0.75, "range": [-1, 1] }, "zindex": { "value": -9996999, "range": [-9999999, 9999999] }, "aspect": { "value": 0.8524808524808525 }, "ignoreShapeAspect": { "value": true }, "shapePosition": { "value": { "x": 0, "y": 0 } }, "shapeScale": { "value": { "x": 0.5, "y": 0.5 } }, "shapeEdgeSoftness": { "value": 0, "range": [0, 0.5] }, "shapeRadius": { "value": 0, "range": [0, 2] }, "currentScroll": { "value": 0 }, "scrollLerp": { "value": 0.07 }, "gooey": { "value": true }, "infiniteGooey": { "value": true }, "growSize": { "value": 4, "range": [1, 15] }, "durationOut": { "value": 1.07, "range": [0.1, 5] }, "durationIn": { "value": 1.63, "range": [0.1, 5] }, "displaceAmount": { "value": 0.5 }, "masker": { "value": true }, "maskVal": { "value": 1.18, "range": [1, 5] }, "scrollType": { "value": 0 }, "geoVertex": { "range": [1, 64], "value": 1 }, "noEffectGooey": { "value": true }, "onMouse": { "value": 0 }, "noise_speed": { "value": 0.76, "range": [0, 10] }, "metaball": { "value": 0.49, "range": [0, 2], "_gsap": { "id": 22 } }, "discard_threshold": { "value": 0.5, "range": [0, 1] }, "antialias_threshold": { "value": 0, "range": [0, 0.1] }, "noise_height": { "value": 0.5, "range": [0, 2] }, "noise_scale": { "value": 12.21, "range": [0, 100] }, "uColor": { "value": true }, "uSpeed": { "value": 0.6, "range": [0.1, 1], "rangep": [1, 10] }, "uAmplitude": { "value": 1.5, "range": [0, 5] }, "uFrequency": { "value": 3.5, "range": [0, 10] }, "noiseDetail": { "value": 7.44, "range": [0, 100] }, "distortionAmount": { "value": 2.98, "range": [0, 10] }, "scale": { "value": 36.36, "range": [0, 100] }, "speed": { "value": 0.79, "range": [0, 1] } }
        //   })
      }
      sheryAnimation()
      
      
      function loadingAnimation() {
          var tl = gsap.timeline();
      
          tl.from(".load h1,.load h2", {
              y: 120,
              duration: 0.5,
              delay: 0.2,
              stagger: 0.2
          })
          tl.to(".load", {
              opacity: 0,
              delay: 1.6,
              stagger: -0.2
          })
          tl.to("#loader", {
              top: "-100%",
              duration: 1,
              ease: "power4.out"
          })
          tl.from(".text h1", {
              y: 200,
              opacity: 0,
              stagger: {
                  amount: 0.5
              }
          })
          tl.from("#nav", {
              opacity: 0
          }, "-=0.5")
      
          var timer = document.querySelector("#timer h4");
          var grow = 0;
          var int = setInterval(function () {
              if (grow < 100) {
                  grow++;
                  timer.innerHTML = grow;
              }
          }, 20)
      
          setTimeout(function () {
              clearInterval(int)
          }, 3000)
      }
      loadingAnimation();
      
      function overlayAnimation() {
          var first = document.querySelector("#first");
          var flag = 0;
          var tl = gsap.timeline()
      
          first.addEventListener("click", function () {
              if (flag === 0) {
                  tl.to("#overlay", {
                      top: "0%"
                  });
                  tl.from(".overlay-text h1", {
                      y: 250,
                      duration: .7,
                      stagger: {
                          amount: 0.3
                      }
                  });
                  tl.from("#overlay-right", {
                      opacity: 0,
                      duration: 2
                  })
                  flag = 1;
              } else {
                  tl.from(".overlay-text", {
                      // opacity:0,             
                      duration: .5,
                      stagger: {
                          amount: -0.2
                      }
                  });
                  tl.to("#overlay", {
                      top: "-100%"
                  });
                  flag = 0;
              }
          });
      
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 3,
        spaceBetween: 30,
        freeMode: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });

      
          var overlayText = document.querySelectorAll(".overlay-text");
      
      
          overlayText.forEach(function (val) {
              val.addEventListener("mouseenter", function () {
                  val.childNodes[1].style.opacity = 0
                  val.childNodes[3].style.opacity = 1
      
              })
              val.addEventListener("mouseleave", function () {
                  val.childNodes[1].style.opacity = 1
                  val.childNodes[3].style.opacity = 0
      
              })
          })
      
      
      }
      
      overlayAnimation();
      let specialtext = document.querySelector(".specialtext")
      const flagImg = document.querySelector("#page1 img")
      
      specialtext.addEventListener("mouseenter", function () {
          flagImg.style.opacity = "1"
      })
      
      specialtext.addEventListener("mouseleave", function () {
          flagImg.style.opacity = "0"
      })
      
      specialtext.addEventListener("mousemove", function (yo) {
          gsap.to("#page1 img", {
              left: yo.x,
              top: yo.y,
              transform: "translate(-50%, -50%)"
          })
      })


      function toggleAnswer(element) {
        const answer = element.nextElementSibling;
        const icon = element.querySelector('.icon');
        
        if (answer.style.display === "block") {
          answer.style.display = "none";
          icon.textContent = "+";
        } else {
          answer.style.display = "block";
          icon.textContent = "-";
        }
      }
      
   

      const images = [
        'images/image1.png',
        'images/image3.png',
        'images/image2.png'
      ];
      
      let currentIndex = 0;
      const imageElement = document.getElementById('autoImage');
      
      function changeImage() {
        currentIndex = (currentIndex + 1) % images.length; // Loop back to the start
        imageElement.style.opacity = 0; // Fade out
        setTimeout(() => {
          imageElement.src = images[currentIndex];
          imageElement.style.opacity = 1; // Fade in
        }, 500); // Sync with fade out duration
      }
      
      // Change image every 3 seconds
      setInterval(changeImage, 3000);
      



      

      const h1Texts = [
        'Find your perfect <br> <span style="color: rgb(255, 138, 128);">Community here</span>',
        'Discover the <br> <span style="color: rgb(255, 138, 128);">Best Connections</span>',
        'Join your <br> <span style="color: rgb(255, 138, 128);">Dream Community</span>',
      ];
      const pTexts = [
        'Lorem, ipsum dolor sit amet, consectetur adipisicing elit. Optio, illo ab fugit cum molestias maxime?',
        'Create memories and connect with people like never before. Be part of something amazing!',
        'Your journey starts here. Build, grow, and achieve together with our thriving community.',
      ];
  
      let index = 0;
  
      // Function to update text
      function updateText() {
        const h1Element = document.querySelector('changing-word');
        const pElement = document.getElementById('#changing-para');
  
        // Update text and loop back to the start
        index = (index + 1) % h1Texts.length;
        h1Element.innerHTML = h1Texts[index];
        pElement.textContent = pTexts[index];
      }
  
      // Change text every 3 seconds
      setInterval(updateText, 3000);
    //   updateText();