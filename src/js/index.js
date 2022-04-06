import '../css/index.css';

const delete_advice = () => {
    document.querySelector('#cookies').remove();
}

document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('#cookies-yes').addEventListener('click', () => {
        delete_advice()
    })

    document.querySelector('#cookies-no').addEventListener('click', () => {
        delete_advice()
    })
})