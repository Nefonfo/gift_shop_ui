import Typed from 'typed.js';
import swal from 'sweetalert2';

import Viewer from 'viewerjs';
import 'viewerjs/dist/viewer.css';

import '../css/index.css';
import '../assets/img/404_desert.jpg';
import '../assets/img/500_magi.gif';
import '../assets/img/address_edit_wallpaper.jpg';
import '../assets/img/address_view_wallpaper.jpg';
import '../assets/img/index_wallpaper.jpg';
import '../assets/img/password_reset.webp';
import '../assets/img/profile_edit_wallpaper.jpg';
import '../assets/img/profile_wallpaper.jpg';
import '../assets/img/signup_wallpaper.jpg';

import AdviceStorage from './utils/AdviceStorage';
import PriceRange from './utils/PriceRange';

window.Swal = swal;



document.addEventListener('DOMContentLoaded', () => {

    document.querySelectorAll('.viewer-js-gallery').forEach(gallery =>  {
        new Viewer(gallery);
    });


    new AdviceStorage(
        document.querySelector('#cookies'),
        document.querySelector('#cookies-accept'),
        'palamo-storage',
        'hidden'
    );

    document.querySelectorAll('[data-typed]').forEach((element) => {
        const words = JSON.parse(element.dataset.typed);

        const options = {
            strings: words,
            typeSpeed: 70,
            backSpeed: 70,
            loop: true
        }

        new Typed(element, options)
    })

    const nav = document.querySelector('#padalamo-navbar');
    if(document.body.classList.contains('no-scroll-change')){
        nav.classList.remove('bg-transparent'); 
        nav.classList.add('bg-base-100');
    }

    document.addEventListener('scroll', (e) => {
        const nav = document.querySelector('#padalamo-navbar');
        if(!document.body.classList.contains('no-scroll-change')){
            if (document.body.scrollTop >= 100 || document.documentElement.scrollTop >= 100) {
                nav.classList.add('bg-base-100');
                nav.classList.remove('bg-transparent'); 
            } else {
                nav.classList.add('bg-transparent');
                nav.classList.remove('bg-base-100'); 
            }
        }
    })

    new PriceRange(10000);


});