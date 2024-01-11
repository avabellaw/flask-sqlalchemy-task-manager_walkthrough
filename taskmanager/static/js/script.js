document.addEventListener('DOMContentLoaded', function () {
    let sidenav = document.querySelectorAll('.sidenav');
    M.Sidenav.init(sidenav);
});

document.addEventListener('DOMContentLoaded', function () {
    let datepicker = document.querySelectorAll('.datepicker');
    M.Datepicker.init(datepicker, {
        format: 'dd-mmmm-yyyy',
        i18n: { done: "Select" }
    });
});

document.addEventListener('DOMContentLoaded', function () {
    let datepicker = document.querySelectorAll('select');
    M.FormSelect.init(datepicker);
});