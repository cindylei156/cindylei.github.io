function changePic() {
  var image =  document.getElementById("capybara");


    if (image.getAttribute('src') == "ProjectCapy/capyimages/yawningcapy.jpg"){
      image.src = "ProjectCapy/capyimages/capyonchair.jpg";
    }  else if (image.getAttribute('src') == "ProjectCapy/capyimages/capyonchair.jpg"){
      image.src = "ProjectCapy/capyimages/pettigrewcapy.jpg"
    } else if (image.getAttribute('src') == "ProjectCapy/capyimages/pettigrewcapy.jpg"){
      image.src = "ProjectCapy/capyimages/closeupcapy.jpeg"
    } else {
      image.src = "ProjectCapy/capyimages/yawningcapy.jpg"
    }
}


// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 900 || document.documentElement.scrollTop > 900) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
