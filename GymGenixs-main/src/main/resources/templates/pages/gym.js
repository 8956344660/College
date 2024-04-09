var crsr = document.querySelector("#cursor");
var blur = document.querySelector("#cursor-blur");

document.addEventListener("mousemove", function (dets) {
  crsr.style.left = dets.x + "px";
  crsr.style.top = dets.y + "px";
  blur.style.left = dets.x - 250 + "px";
  blur.style.top = dets.y - 250 + "px";
});


gsap.to("#nav", {
  backgroundColor: "#000",
  duration: 0.5,
  height: "110px",
  scrollTrigger: {
    trigger: "#nav",
    scroller: "body",
    // markers:true,
    start: "top -10%",
    end: "top -11%",
    scrub: 1,
  },
});

gsap.to("#main", {
  backgroundColor: "#000",
  scrollTrigger: {
    trigger: "#main",
    scroller: "body",
    // markers: true,
    start: "top -25%",
    end: "top -70%",
    scrub: 2,
  },
});


gsap.from(".card", {
  scale: 0.8,
  // opacity:0,
  duration: 1,
  stagger: 0.1,
  scrollTrigger: {
    trigger: ".card",
    scroller: "body",
    //markers:false,
    start: "top 70%",
    end: "top 65%",
    scrub: 2,
  },
});



// Load Plans for UI

function loadPlan() {
  console.log('loading plan');
  var url = allPlanUrl;
  $.ajax({
      url: url,
      type: 'GET',
      cache: false,
      processData: false,
      dataType: 'json',
      success: function (result) {
          $('#planTable').empty();
          $('#planTable').append(
              '<tr>' +
              '<th>Name</th>' +
              '<th>Validity</th>' +
              '<th>Price</th>' +
              '<th>Edit</th>' +
              '<th>Delete</th>' +

              '</tr>');
          $.each(result, function (index, value) {
              console.log(index + ' -> ' + value);
              $('#planTable').append(
                  '<tr id="' + value.planId + '">' +
                  '<td style="display: none">' + value.planId + '</td>' +
                  '<td>' + value.planName + '</td>' +
                  '<td>' + value.validityInDays + '</td>' +
                  '<td>' + value.amount + '</td>' +
                  '<td> <button class="edit-button">Edit</button> </td>' +
                  '<td> <button class="delete-button">Delete</button> </td>' +
                  '</tr>');
              

          });

          deletePlan();
          editbtn();

          console.log(result);
          console.log("success > ")
      },
      error: function (error) {
          console.log(error);
          console.log("error > " + error);

      }
  });
};

