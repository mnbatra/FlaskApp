$(function() {
  $(".typed").typed({
    strings: [
      "stat aman.human<br/>" +
      "><span class='caret'>$</span> skills: predictive modeling, ML, full-stack python, salesforce.com, SQL, Business Management<br/> ^100" +
      "><span class='caret'>$</span> job: senior data analyst at <a href='https://www.predictbay.com/'>Predictbay</a><br/> ^100" +
      "><span class='caret'>$</span> hobbies: reading, running, cycling, <a href='https://blog.amanbatra.in/2018/03/first-attempt-at-astrophotography.html'>astrophotography, graphology</a><br/> ^300" +
      "><span class='caret'>$</span> alias: nex <br/>" +
      "><span class='caret'>$</span> highlight:  <a href='https://predictbay.com'>Data Science Startup for MSMEs</a>, <a href='https://taxdaddy.in'>The prepaid Business consulting platform is now live!</a><br/>"],
    showCursor: true,
    cursorChar: '_',
    autoInsertCss: true,
    typeSpeed: 0.001,
    startDelay: 50,
    loop: false,
    showCursor: false,
    onStart: $('.message form').hide(),
    onStop: $('.message form').show(),
    onTypingResumed: $('.message form').hide(),
    onTypingPaused: $('.message form').show(),
    onComplete: $('.message form').show(),
    onStringTyped: function(pos, self) {$('.message form').show();},
  });
  $('.message form').hide()
});
