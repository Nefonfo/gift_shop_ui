class PriceRange {

    constructor(default_value) {
        this.range_elements = [...document.querySelectorAll('[data-range-move]')];
        this.default_value = default_value
        this.listen();

    }

    listen() {
        
        this.range_elements.forEach(element => {
            const first_value = (isNaN(element.dataset.rangeMoveValue) ? 10000: element.dataset.rangeMoveValue);
            this.setRange(first_value, element.dataset.rangeMove);
            element.value = first_value;
            element.addEventListener('input', (e) => {
                this.setRange(
                    e.target.value,
                    element.dataset.rangeMove
                );
            });
        });
    }

    setRange(value, span_render) {
        document.querySelector(span_render).innerHTML = value;
    }

}

export default PriceRange;