$('li').click(function(){
    alert('clicked');
});

$('#btn').click(function () {
    $('#hi').text('Testing text');
    $('#hi').text('Extra text');
});

$('#btn2').on('click', function(){
    console.log('Second button is clicked')
})