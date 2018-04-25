import $ from 'jquery';
import 'bootstrap';
import WebFont from 'webfontloader';
import Slick from 'slick-carousel';

let App = {

    init() {

        this.initWebFonts();
        this.initSocialMediaFeedCarousel();
        this.initTestimonialsCarousel();
        this.initFAQs();
    },

    initWebFonts() {
        WebFont.load({
            google: {
                families: ['Source Sans Pro:400,700'],
            },
            custom: {
                families: ['FontAwesome'],
                urls: ['https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css'],
            }
        });
    },

    initSocialMediaFeedCarousel() {
        $('.social-media-feed').slick({
            rows: 0,
            autoplay: true,
            arrows: false,
        });
    },

    initTestimonialsCarousel() {
        $('.testimonials').slick({
            rows: 0,
            autoplay: false,
            arrows: true,
            centerMode: true,
            infinite: true,
            slidesToShow: 3,
            prevArrow: '<button type="button" class="slick-prev"></button>',
            nextArrow: '<button type="button" class="slick-next"></button>',
            responsive: [
                {
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 1,
                    }
                }
            ]
        });
    },

    initFAQs() {
        let $faqs = $('.faq');

        $faqs.on('click', function () {
            $(this).toggleClass('active');
        })
    }
};

$('document').ready(App.init());