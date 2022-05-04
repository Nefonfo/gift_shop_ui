import Typed from 'typed.js';
import swal from 'sweetalert2';

import '../css/index.css';
import '../assets/img/index_wallpaper.jpg';
import '../assets/img/signup_wallpaper.jpg';
import '../assets/img/profile_wallpaper.jpg';
import '../assets/img/profile_edit_wallpaper.jpg';
import '../assets/img/address_view_wallpaper.jpg';
import '../assets/img/address_edit_wallpaper.jpg';

import AdviceStorage from './utils/AdviceStorage';

window.Swal = swal;

document.addEventListener('DOMContentLoaded', () => {

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
        } else {
            nav.classList.add('bg-base-100');
            nav.classList.remove('bg-transparent'); 
        }
    })


});