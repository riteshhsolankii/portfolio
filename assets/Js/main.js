$('.skillssilder').owlCarousel({
    loop: true,
    margin: 30,
    dots: false,
    nav: false,
    autoplay: true, // Enables autoplay
    autoplayTimeout: 3000, // Set autoplay speed (3 seconds in this example)
    autoplayHoverPause: true, // Pause on hover
    smartSpeed: 1000, // Set the speed of the slide transition (1 second in this example)
    autoplaySpeed: 1000, // Speed of the autoplay transition
    responsive: { // Responsive settings
        0: {
            items: 4, // 1 item for screens from 0px to 479px
        },
        768: {
            items: 5, // 3 items for screens from 768px to 991px
        },
        992: {
            items: 7, // 4 items for screens 992px and above
        }
    }
});

// Show the first tab and hide the rest
$('#tabs-nav li:first-child').addClass('active');
$('.tab-content').hide();
$('.tab-content:first').show();

// Click function
$('#tabs-nav li').click(function() {
    $('#tabs-nav li').removeClass('active');
    $(this).addClass('active');
    $('.tab-content').hide();

    var activeTab = $(this).find('a').attr('href');
    $(activeTab).fadeIn();
    return false;
});