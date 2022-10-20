
$(function () {
  $('.slider-container').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 3,
    rtl: true,
    dots: true,
  });
  var videos_watched = 0;

  $(".video_link").on("click", function() {
    if (!($(this).hasClass("viewed"))) {
      $(this).addClass("viewed");
      videos_watched = videos_watched + 1;
      $("#progress_sprite").append("<div></div>");
      //This was added to show progress on fiddle. Not really 
      //needed for progress bar.
    }
  });

  $('#maleStudents').DataTable({
    ordering,
    scrollY: 300,
    paging: true,
    searching: true,
  });
});


// tabs function
function openCity(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}

function openTerm(evt, cityName) {
  var i, tabcontent, tabTermsLinks;
  tabcontent = document.getElementsByClassName("tabTermContent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tabTermsLinks = document.getElementsByClassName("tabTermsLinks");
  for (i = 0; i < tabTermsLinks.length; i++) {
    tabTermsLinks[i].className = tabTermsLinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}

document.getElementById("defaultOpens").click();
document.getElementById("defaultTermOpen").click();

filterSelection("all")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("filterDiv");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) {
      w3AddClass(x[i], "show");
    }
    x[i].parentElement.style.display = x[i].classList.contains('show') ? 'block' : 'none'
  }
}

function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
  }
}

function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);     
    }
  }
  element.className = arr1.join(" ");
}

// Add active class to the current button (highlight it)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function(){
    // btns[i].className.replace(' active', '')
    console.log(this);
    var current = document.getElementsByClassName("activeCourse");
    console.log(current[0].className)
    current[0].className = current[0].className.replace(" activeCourse", "");
    this.className += " activeCourse";
  });
}

function openTab(evt, tabName) {
  let i, contents, tabLink;
  contents = document.getElementsByClassName("contents");
  for (i = 0; i < contents.length; i++) {
    contents[i].style.display = "none";
  }
  tabLink = document.getElementsByClassName("tabLink");
  for (i = 0; i < tabLink.length; i++) {
    tabLink[i].className = tabLink[i].className.replace(" activeTab", "");
  }
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " activeTab";
}
document.getElementById("open").click();