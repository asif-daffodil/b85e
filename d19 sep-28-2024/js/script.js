const yearForm = document.querySelector('#yearForm');

yearForm.addEventListener('submit', e => {
    e.preventDefault();
    const formData = new FormData(yearForm);
    const year = formData.get('year');

    // validate year is a number
    if(year.length === 0) {
        alert('Please enter a year');
        return;
    }else if (isNaN(year)) {
        alert('Please enter a valid year');
        return;
    }else{
        if(year % 400 === 0){
            alert(year + ' is a leap year');
        }else if(year % 100 === 0){
            alert(year + ' is not a leap year');
        }else if(year % 4 === 0){
            alert(year + ' is a leap year');
        }else{
            alert(year + ' is not a leap year');
        }
    }

    yearForm.reset();
});