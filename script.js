document.addEventListener("DOMContentLoaded", function() {
    const hotel_picture_1 = document.getElementById('hotel_picture_1');
    const hotel_picture_2 = document.getElementById('hotel_picture_2');

    hotel_picture_1.addEventListener('mouseover', function() {
        hotel_picture_1.classList.add('highlight');
    });

    hotel_picture_2.addEventListener('mouseover', function() {
        hotel_picture_2.classList.add('highlight');
    });

    hotel_picture_1.addEventListener('mouseout', function() {
        hotel_picture_1.classList.remove('highlight');
    });

    hotel_picture_2.addEventListener('mouseout', function() {
        hotel_picture_2.classList.remove('highlight');
    });
});

