let slideWidth = $('#slide').width()
$('#slides').css("margin-left", -slideWidth)
$('#slides:last-child').prependTo("#slides")

$('#leftBtn').click(() => {
    console.log('Left Button Clicked')
    $('#slides').animate(
        {"left": slideWidth},
        1000,
        () => {
            $('#slide:last-child').prependTo("#slides")
            $('#slides').css("left","")
        }
    )
})

$('#rightBtn').click(()=> {
    console.log('Right Button Clicked')
    $('#slides').animate(
        {"left": -slideWidth},
        1000,
        () => {
            $('#slide:first-child').appendTo("#slides")
            $('#slides').css("left","")
        }
    )
})