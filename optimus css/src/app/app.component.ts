import { Component, OnInit } from '@angular/core';
import { TimelineLite, Back, Power1 } from 'gsap';
import { NgwWowService } from 'ngx-wow';
import { Title }     from '@angular/platform-browser';
import { slideInAnimation } from './animations';
import { RouterModule, Routes, RouterOutlet } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';



declare var $: any;
declare var TweenMax: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [slideInAnimation ]
  
})
export class AppComponent {
   constructor(private wowService: NgwWowService, private  titleService: Title) {
    this.wowService.init();
  }
  anio: number = new Date().getFullYear();


  // title = 'Optimus';


  ngOnInit(){


    $(document).ready(function(){
          var menuStatus = false;
         $(".aboutButton").click(function() {
          setTimeout(function(){
             $('html, body').animate({
                scrollTop: $("#aboutSection").offset().top -120
            }, 1000);
          } ,500)
           
      });
      $(window).on('beforeunload', function() {
          $(window).scrollTop(0); 
      });

      console.log('Developed by Ibrahim Mohamed.');



       



           $(window).scroll(function(){ 
              if ($(this).scrollTop() < 100) { 
                  $('.scroll-down').fadeIn(); 
              } else { 
                  $('.scroll-down').fadeOut(); 
              } 
          }); 
          $('.scroll-down').click(function(){ 
              $("html, body").animate({ scrollTop: 600 }, 1000); 
              return false; 
          }); 

    

            $(function(){
                  // Check the initial Poistion of the Sticky Header
                  var stickyHeaderTop = $('#main-nav').offset().top;
             
                  $(window).scroll(function(){
                          if( $(window).scrollTop() > stickyHeaderTop ) {
                                  $('#main-nav').css({backgroundColor: '#041725'});
                                  // $('#package-charge-items').css({height: '150px', overflowY:'scroll'});
                          }else{
                                  $('#main-nav').css({backgroundColor: 'transparent'});
                          }
                  });
            });



          // menu
          var openTrigger = $('.menu-trigger');
          var openTriggerTop = openTrigger.find('.menu-trigger-bar.top');
          var openTriggerMiddle = openTrigger.find('.menu-trigger-bar.middle');
          var openTriggerBottom = openTrigger.find('.menu-trigger-bar.bottom');

          //CLOSE TRIGGER
          var closeTrigger = $('.close-trigger');
          var closeTriggerLeft = closeTrigger.find('.close-trigger-bar.left');
          var closeTriggerRight = closeTrigger.find('.close-trigger-bar.right');

          //LOGO
          var logo = $('.logo');

          //MENU
          var menumyContainer = $('.menu-myContainer');
          var menu = $('.menu');
          var container = $('.myContainer');
          var menuTop = $('.menu-bg.top');
          var menuMiddle = $('.menu-bg.middle');
          var menuBottom = $('.menu-bg.bottom');

          //TL
          var tlOpen = new TimelineMax({paused: true});
          var tlClose = new TimelineMax({paused: true});

          //OPEN TIMELINE
          tlOpen.add("preOpen")
            .to(logo, 0.4, {
                      scale: 0.8,
                      opacity: 0,
                      ease: Power2.easeOut
                  }, "preOpen")
          .to(openTriggerTop, 0.4, {
            x: "+80px", y: "-80px", delay: 0.1, ease: Power4.easeIn, onComplete: function() {
              closeTrigger.css('z-index','2147483647');
              container.css('z-index', '2147483611');
              menumyContainer.css('z-index', '2147483612');
              

            }
          }, "preOpen")
          .to(openTriggerMiddle, 0.4, {
            x: "+=80px", y: "-=80px", ease: Power4.easeIn,
            onComplete: function() {
              openTrigger.css('visibility','hidden');
              menuStatus = true;

            }
          }, "preOpen")
          .to(openTriggerBottom, 0.4, {
            x: "+=80px", y: "-=80px", delay: 0.2, ease: Power4.easeIn
          }, "preOpen")
          .add("open", "-=0.4")
          .to(menuTop, 0.8, {
            y: "13%",
            ease: Power4.easeInOut
          }, "open")
          .to(menuMiddle, 0.8, {
            scaleY: 1,
            ease: Power4.easeInOut
          }, "open")
          .to(menuBottom, 0.8, {
            y: "-114%",
            ease: Power4.easeInOut
          }, "open")
          .fromTo(menu, 0.6, {
            y: 30, opacity: 0, visibility: 'hidden'
          }, {
            y: 0, opacity: 1, visibility: 'visible', ease: Power4.easeOut
          }, "-=0.2")
          .add("preClose", "-=0.8")
          .to(closeTriggerLeft, 0.8, {
            x: "-=100px", y: "+=100px", ease: Power4.easeOut
          }, "preClose")
          .to(closeTriggerRight, 0.8, {
            x: "+=100px", y: "+=100px", delay: 0.2, ease: Power4.easeOut
          }, "preClose");

          //CLOSE TIMELINE
          tlClose.add("close")
            .to(menuTop, 0.2, {
            backgroundColor: "#FFB338", ease: Power4.easeInOut, onComplete: function() {
              logo.css('z-index','26');
              closeTrigger.css('z-index','5');
           openTrigger.css('visibility','visible');

            }
          }, "close")
          .to(menuMiddle, 0.2, {
            backgroundColor: "#FFB338", ease: Power4.easeInOut
          }, "close") 
          .to(menuBottom, 0.2, {
            backgroundColor: "#FFB338", ease: Power4.easeInOut
          }, "close")
            .to(menu, 0.6, {
            y: 20, opacity: 0, ease: Power4.easeOut, onComplete: function() {
              menu.css('visibility','hidden');
              

            }
          }, "close")
          .to(logo, 0.8, {
            scale: 1, opacity: 1, ease: Power4.easeInOut
          }, "close")
          .to(menuTop, 0.8, {
            y: "-113%",
            ease: Power4.easeInOut
          }, "close")
          .to(menuMiddle, 0.8, {
            scaleY: 0,
            ease: Power4.easeInOut
          }, "close")
          .to(menuBottom, 0.8, {
            y: "23%",
            ease: Power4.easeInOut,
            onComplete: function() {
              menuTop.css('background-color','#ffffff');
              menuMiddle.css('background-color','#ffffff');
              menuBottom.css('background-color','#ffffff');
              container.css('z-index', '0');
              menuStatus= false;
            }
          }, "close")
          .to(closeTriggerLeft, 0.2, {
            x: "+=100px", y: "-=100px", ease: Power4.easeIn
          }, "close")
          .to(closeTriggerRight, 0.2, {
            x: "-=100px", y: "-=100px", delay: 0.1, ease: Power4.easeIn
          }, "close")
          .to(openTriggerTop, 1, {
            x: "-=80px", y: "+=80px", delay: 0.2, ease: Power4.easeOut
          }, "close")
          .to(openTriggerMiddle, 1, {
            x: "-=80px", y: "+=80px", ease: Power4.easeOut
          }, "close")
          .to(openTriggerBottom, 1, {
            x: "-=80px", y: "+=80px", delay: 0.1, ease: Power4.easeOut
          }, "close");

          //EVENTS
          openTrigger.on('click', function(){
            if(tlOpen.progress() < 1){
                          tlOpen.play();
                      } else {
                          tlOpen.restart();
                      }
                  
          });

                 
          closeTrigger.on('click', function(){
            if(tlClose.progress() < 1){
                          tlClose.play();
                      } else {
                          tlClose.restart();
                      }
          });

          $( ".myContainer a" ).each(function() {
            $( this ).click(function(){
              if(tlClose.progress() < 1){
                          tlClose.play();
                      } else {
                          tlClose.restart();
                      }
            });
          });

   
            $( '.navbar-item img' ).click(function(){
               if (menuStatus) {
                         if(tlClose.progress() < 1){
                          tlClose.play();
                      } else {
                          tlClose.restart();
                      }
               }
            });

          
           // $( '.navbar-item img' ).click(function(){
           //    if(tlClose.progress() < 1){
           //                tlClose.play();
           //            } else {
           //                tlClose.restart();
           //            }
           //  });
          // $(function() {
          //   $('.scroll-down').click (function() {
          //     $('html, body').animate({scrollTop: $('section.ok').offset().top }, 'slow');
          //     return false;
          //   });
          // });
        

      });


	}

  
}
