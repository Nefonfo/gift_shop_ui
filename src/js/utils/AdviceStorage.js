class AdviceStorage {

    constructor(alert_element, btn_element, storage, unactive_class) {
        
        this.alert_element = alert_element;
        this.btn_element = btn_element;
        this.storage = storage;
        this.unactive_class = unactive_class;
        

        this.btn_element.addEventListener('click', () => {
            let date = new Date();
            date.setDate(date.getDate() + 30);
            this.setState({
                value: true,
                expires: date
            });
            this.hideAdvice();
        });
        if(this.getState()['value']) {
            this.hideAdvice();
        } else {
            this.showAdvice();
        }
    }

    hideAdvice() {
        this.alert_element.classList.add(this.unactive_class);
    }

    showAdvice() {
        this.alert_element.classList.remove(this.unactive_class);
    }

    expired(date_to_check){
        let today = new Date();
        return date_to_check.setHours(0, 0, 0, 0) <= today.setHours(0, 0, 0, 0);
    }

    getState() {
        let data;
        try {
            data = JSON.parse(localStorage.getItem(this.storage));
            if(typeof data.value !== 'boolean') { 
                data = null;
            }
            if(data.expires !== null) {
                if(isNaN(Date.parse(data.expires)) || this.expired(new Date(Date.parse(data.expires)))) {
                    data = null;
                }
            }
           
        } catch(e){ 
            data = null;
        }
        if(data === null) {
            this.setState({
                value: false,
                expires: null
            });
            return this.getState();
        } else {
            return data;
        }
    }

    setState(mode){ 
        localStorage.setItem(this.storage, JSON.stringify(mode));
    }
}

export default AdviceStorage;