// Register `phoneList` component, along with its associated controller and template
angular.
  module('phonecatApp').
  component('phoneList', {  // This name is what AngularJS uses to match to the `'<phone-list>'+` element.
    template:
        

    '<meta charset="utf-8">'+
    '<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">'+

    '<!-- Bootstrap CSS -->'+
    '<link rel="stylesheet" href="assets/css/bootstrap.min.css" >'+
    '<link rel="stylesheet" type="text/css" href="utama.css">'+
 
    '<nav class="navbar navbar-expand-lg navbar-light  header">'+
  '<a class="navbar-brand" href="index.html">'+ '<i>'+'<h1 style="font-family: impact ">Tempest</h1></i>'+ '</a>'+
  '<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">'+
    '<span class="navbar-toggler-icon">'+'</span>'+
  '</button>'+

  '<div class="collapse navbar-collapse" id="navbarSupportedContent" style=" background-color:#4d5468; ">'+
    '<ul class="navbar-nav mr-auto">'+
      '<li class="nav-item active">'+
        '<a class="nav-link" href="index.html">Home<span class="sr-only">(current)</span></a>'+
      '</li>'+
      '<li class="nav-item active">'+
        '<a class="nav-link" href="anime.html">Anime</a>'+
      '</li>'+
      '<li class="nav-item active">'+
        '<a class="nav-link" href="komik.html">Komik</a>'+
      '</li>'+
      '<li class="nav-item active">'+
        '<a class="nav-link" href="novel.html">Novel</a>'+
      '</li>'+
       '<li class="nav-item active">'+
        '<a class="nav-link" href="#">Batch</a>'+
      '</li>'+
      '<li class="nav-item dropdown">'+
        '<a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">'+
          'Genre</a>'+
        '<div class="dropdown-menu" style=" background-color: #4d5468;" aria-labelledby="navbarDropdown">'+
          '<a class="dropdown-item" href="action.html">Action</a>'+
          '<a class="dropdown-item" href="SoL.html">Slice of life</a>'+
          '<a class="dropdown-item" href="comedy.html">Comedy</a>'+
          
         
        '</div>'+
      '</li>'+
     
    '</ul>'+ 
    '<form class="form-inline my-2 my-lg-0">'+
      '<input class="form-control mr-sm-2 search" type="search" placeholder="Cari..." aria-label="Search">'+
      '<button class="btn btn-outline-success my-2 my-sm-0" style="border-radius:10px; " type="submit">Cari</button>'+
    '</form>'+
  '</div>'+

'</nav>',



    
    
  });