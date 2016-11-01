$(document).ready(function() {

    $('#random').click(function() {
     $.get("https://api.whatdoestrumpthink.com/api/v1/quotes/random", function(data, status){
       $('#quote').fadeOut("slow", "linear", function () {
         $(this).html(data.message).fadeIn("slow");});
     }).fail(function(jqHXR) {
       $('#quote').html('<p> Sorry! ' + jqHXR.statusText + ' error.</p>');
     });

    });


  var twitterText = function twitterText() {
    var tweet = $('#quote').html();

    if (tweet.length > 113) {
        tweet = tweet.substr(0, 113);
        tweet += '...';
    }
    tweet = encodeURIComponent(tweet);
    tweet = 'http://twitter.com/share?text=' + tweet;
    return tweet;
};

  $('#tweet').click(function (event) {
      $('#tweet').attr('href', twitterText());
  });



}); // end ready
