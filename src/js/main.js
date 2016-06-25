$(function() {
      
// canvas chart start
var order_detail = $("#order_detail_form").get(0).getContext("2d");
var seller_detail = $("#seller_detail_form").get(0).getContext("2d");


//  canvas chart end


var data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "June", "-"],
    datasets: [
        {
            label: "Normal Day Order",
            backgroundColor: "rgba(179,181,198,0.2)",
            borderColor: "rgba(179,181,198,1)",
            pointBackgroundColor: "rgba(179,181,198,1)",
            pointBorderColor: "#fff",
            pointHoverBackgroundColor: "#fff",
            pointHoverBorderColor: "rgba(179,181,198,1)",
            data: [65, 59, 90, 81, 56, 55, 0]
        },
        {
            label: "Per Month Delivery ",
            backgroundColor: "rgba(255,99,132,0.2)",
            borderColor: "rgba(255,99,132,1)",
            pointBackgroundColor: "rgba(255,99,132,1)",
            pointBorderColor: "#fff",
            pointHoverBackgroundColor: "#fff",
            pointHoverBorderColor: "rgba(255,99,132,1)",
            data: [28, 48, 40, 19, 96, 27, 0]
        }
    ]
};

var new_order_chart = new Chart(order_detail,{
       type:"line",
       data: data,
       options: []
});



var doughnutData = {
    datasets: [{
        data: [
            11,
            16,
            7,
            3,
            14
        ],
        backgroundColor: [
            "#FF6384",
            "#4BC0C0",
            "#FFCE56",
            "#E7E9ED",
            "#36A2EB"
        ],
        label: 'My dataset' // for legend
    }],
    labels: [
        "Delhi",
        "Banglore",
        "Lucknow",
        "Mumbai",
        "Gujarat"
    ]
};



var myDoughnutChart = new Chart(seller_detail, {
    type: 'doughnut',
    data: doughnutData,
    options: []
});




// modal window start

var order_modal_window = $('#order_modal_window');
var timer_span = $(".modal_window_timer");

order_modal_window.on('shown.bs.modal', function () {

  var count = 60;
  var counter = setInterval(timer, 1000);
  function timer() {
    count --;
    timer_span.html("you have <strong class='order_window_timer_sec'>"+ count+" </strong> Seconds left to choose.");
    
    if(count == 10){
        timer_span.addClass("text-danger");
    }
    if(count == 1){
      clearInterval(counter);
      timer_span.removeClass("text-danger");
        order_modal_window.modal('hide');
        timer_span.html(" ");
    }
  }
  

});


//   modal window end





// navigation toggle

var toggle_navigation = $(".toggle_navigation");
var aside_navigation = $(".aside_navigation");

toggle_navigation.on("click", function() {
   aside_navigation.find(".nav_icon_toggle").toggle();
});



// side navigation height equal

var doc_height = $(document).outerHeight();
aside_navigation.css({
    height: doc_height + "px"
});

// console.log(doc_height);

// remove mobile menu on resize

$(window).on("resize", function() {
   if($(this).width() >= 990) {
       $("#mobile_navigation").modal('hide');
   }
});





});
    
   


