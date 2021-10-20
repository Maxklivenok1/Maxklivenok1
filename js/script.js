document.addEventListener('DOMContentLoaded', () => {
    // Display of the current date
    temp_date = new Date();
    day = temp_date.getDate();
    month = temp_date.getMonth() + 1;
    year = temp_date.getFullYear();
    if (day < 10) {
        day = "0" + day;
    }
    if (month < 10) {
        month = "0" + month;
    }
    document.getElementById('dateFolder').innerHTML = day + "." + month + "." + year


    // changing table styles
    //write to the variable all elements with the class 'radio__btn'
    let tableStyles = document.querySelectorAll('.radio__btn');
    //iterate over them using a loop 
    for (let i = 0; i < tableStyles.length; i++) {
        // Tracking the change in the active radio button
        tableStyles[i].addEventListener('change', function() {
            // write the value of the value attribute of the active radio button to a variable
            let prop = tableStyles[i].value;
            // Assigning the class of the active radio button to the table
            document.querySelector('#table').className = prop;
        })
    }
})