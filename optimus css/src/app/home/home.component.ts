import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes, RouterOutlet } from '@angular/router';
import { NgwWowService } from 'ngx-wow';
import { TimelineLite, Back, Power1 } from 'gsap';
import { Title }     from '@angular/platform-browser';

declare var $: any;
declare var TweenMax: any;


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private wowService: NgwWowService, private  titleService: Title) {
    this.wowService.init();
  }
  ngOnInit() {
    $(document).ready(function(){
      $(".aboutButton").click(function() {
          setTimeout(function(){
             $('html, body').animate({
                scrollTop: $("#aboutSection").offset().top -120
            }, 1000);
          } ,500)
           
      });
     
  	       var owl1 = $('#owl-carousel1');
        owl1.owlCarousel({

            lazyLoad: true,
            items:1,
            loop:true,
            margin:0,
            autoplay:true,
            autoplayTimeout:5000,
            autoplayHoverPause:false,
            smartSpeed:900,
            dots:false,
        });
       owl1.on('translate.owl.carousel', function(event) {
            var el = event.target;
              $('.title', el).addClass('animated  delay-halfs fadeInLeft ')
              .one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
                  $('.title', el).removeClass('animated  delay-halfs fadeInLeft ');
              });
               $('h2', el).addClass('animatedHalfSpeed delay1 fadeInLeft ')
              .one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
                  $('h2  ', el).removeClass('animatedHalfSpeed delay1 fadeInLeft ');
              });
               $('.myrow', el).addClass('animatedHalfSpeed delay-more fadeInLeft')
              .one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
                  $('.myrow', el).removeClass('animatedHalfSpeed delay-more fadeInLeft');
              });

        });
      });
     this.titleService.setTitle( 'Home' );
       

  }


}
