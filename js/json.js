var url = "https://api.nytimes.com/svc/movies/v2/reviews/search.json";
var url1 = "https://api.nytimes.com/svc/movies/v2/reviews/search.json";
var url2 = "https://api.nytimes.com/svc/movies/v2/reviews/search.json";

var currentDate = new Date();
var res = currentDate.toISOString().slice(0,8) + '01'
var res2 = currentDate.toISOString().slice(0,8) + '30'
var finalRes = res + ';' + res2
console.log(finalRes);
					// THIS MONTH

url += '?' + $.param({
  'api-key': "9fd8d31dedf54e04a517abbe68f9e387",
	'opening-date': finalRes,
	'order': "opening_date"
});

url1 += '?' + $.param({
  'api-key': "9fd8d31dedf54e04a517abbe68f9e387",
	'opening-date': finalRes,
	'order': "opening_date",
	'offset': 20
});

url2 += '?' + $.param({
  'api-key': "9fd8d31dedf54e04a517abbe68f9e387",
	'opening-date': finalRes,
	'order': "opening_date",
	'offset': 40
});

$('.nav-item1').click(function(){
		$('.banner-sec .container').html("");


$.ajax({
  url: url,
  method: 'GET',
}).done(function(result) {
  console.log(result.results);
	
	for (var i=0; i<result.results.length; i++){
	var date = result.results[i].publication_date;
	var more = result.results[i].summary_short;
	var title = result.results[i].display_title;
	var link = result.results[i].link.url;
	var img = result.results[i].multimedia.src;
		
		$('.banner-sec .container').append("<div class='row'>" + "<div clas='col-md-12'>" + "<div class='card'>" + "<div class='card-block'>" + "<img src='" + img + "' style='float:left; max-width:210px; margin-right: 10px'>" + "<div class='news-title'>" + "<h2 class='title-small'>" + "<a href='" + link + "' target='blank'>" + title + "</a>" + "</h2>" + "</div>" + "<div>" + more + "</div>" + "<p class='card-text'>" + "<small class='text-time'>" + "<em>" + date.substr(0,10) + " " + date.substr(11,8) + "</em></small></p></div></div></div>");
		}
	
});
	
	$.ajax({
  url: url1,
  method: 'GET',
}).done(function(result) {
  console.log(result.results);
	
	for (var i=0; i<result.results.length; i++){
	var date = result.results[i].publication_date;
	var more = result.results[i].summary_short;
	var title = result.results[i].display_title;
	var link = result.results[i].link.url;
	var img = result.results[i].multimedia.src;
		
		$('.banner-sec .container').append("<div class='row'>" + "<div clas='col-md-12'>" + "<div class='card'>" + "<div class='card-block'>" + "<img src='" + img + "' style='float:left; max-width:210px; margin-right: 10px'>" + "<div class='news-title'>" + "<h2 class='title-small'>" + "<a href='" + link + "' target='blank'>" + title + "</a>" + "</h2>" + "</div>" + "<div>" + more + "</div>" + "<p class='card-text'>" + "<small class='text-time'>" + "<em>" + date.substr(0,10) + " " + date.substr(11,8) + "</em></small></p></div></div></div>");
		}
	
});
	
	$.ajax({
  url: url2,
  method: 'GET',
}).done(function(result) {
  console.log(result.results);
	
	for (var i=0; i<result.results.length; i++){
	var date = result.results[i].publication_date;
	var more = result.results[i].summary_short;
	var title = result.results[i].display_title;
	var link = result.results[i].link.url;
	var img = result.results[i].multimedia.src;
		
		$('.banner-sec .container').append("<div class='row'>" + "<div clas='col-md-12'>" + "<div class='card'>" + "<div class='card-block'>" + "<img src='" + img + "' style='float:left; max-width:210px; margin-right: 10px'>" + "<div class='news-title'>" + "<h2 class='title-small'>" + "<a href='" + link + "' target='blank'>" + title + "</a>" + "</h2>" + "</div>" + "<div>" + more + "</div>" + "<p class='card-text'>" + "<small class='text-time'>" + "<em>" + date.substr(0,10) + " " + date.substr(11,8) + "</em></small></p></div></div></div>");
		}
	
});
		
});

				//LAST MONTH
var url3 = "https://api.nytimes.com/svc/movies/v2/reviews/search.json";
var url4 = "https://api.nytimes.com/svc/movies/v2/reviews/search.json";
var url5 = "https://api.nytimes.com/svc/movies/v2/reviews/search.json";

var res2 = currentDate.toISOString().slice(0,8).replace(/-/g,"")-1 + '01';
var res2s = [res2.slice(0,4), '-', res2.slice(4,6), '-', res2.slice(6,8)].join('');
var res3 = currentDate.toISOString().slice(0,8).replace(/-/g,"")-1 + '30';
var res3s = [res3.slice(0,4), '-', res3.slice(4,6), '-', res3.slice(6,8)].join('');
var finalRes1 = res2s + ';' + res3s;
console.log(finalRes1);

url3 += '?' + $.param({
  'api-key': "9fd8d31dedf54e04a517abbe68f9e387",
	'opening-date': finalRes1,
	'order': "opening_date",
	'offset': 0
});

url4 += '?' + $.param({
  'api-key': "9fd8d31dedf54e04a517abbe68f9e387",
	'opening-date': finalRes1,
	'order': "opening_date",
	'offset': 20
});

url5 += '?' + $.param({
  'api-key': "9fd8d31dedf54e04a517abbe68f9e387",
	'opening-date': finalRes1,
	'offset': 40
});


$('.nav-item2').click(function(){
		$('.banner-sec .container').html("");


$.ajax({
  url: url3,
  method: 'GET',
}).done(function(result) {
	
	for (var i=0; i<result.results.length; i++){
	var date = result.results[i].publication_date;
	var more = result.results[i].summary_short;
	var title = result.results[i].display_title;
	var link = result.results[i].link.url;
	var img = result.results[i].multimedia.src;
		
		$('.banner-sec .container').append("<div class='row'>" + "<div clas='col-md-12'>" + "<div class='card'>" + "<div class='card-block'>" + "<img src='" + img + "' style='float:left; max-width:210px; margin-right: 10px'>" + "<div class='news-title'>" + "<h2 class='title-small'>" + "<a href='" + link + "' target='blank'>" + title + "</a>" + "</h2>" + "</div>" + "<div>" + more + "</div>" + "<p class='card-text'>" + "<small class='text-time'>" + "<em>" + date.substr(0,10) + " " + date.substr(11,8) + "</em></small></p></div></div></div>");
		}
});

	$.ajax({
  url: url4,
  method: 'GET',
}).done(function(result) {
	
	for (var i=0; i<result.results.length; i++){
	var date = result.results[i].publication_date;
	var more = result.results[i].summary_short;
	var title = result.results[i].display_title;
	var link = result.results[i].link.url;
	var img = result.results[i].multimedia.src;
		
		$('.banner-sec .container').append("<div class='row'>" + "<div clas='col-md-12'>" + "<div class='card'>" + "<div class='card-block'>" + "<img src='" + img + "' style='float:left; max-width:210px; margin-right: 10px'>" + "<div class='news-title'>" + "<h2 class='title-small'>" + "<a href='" + link + "' target='blank'>" + title + "</a>" + "</h2>" + "</div>" + "<div>" + more + "</div>" + "<p class='card-text'>" + "<small class='text-time'>" + "<em>" + date.substr(0,10) + " " + date.substr(11,8) + "</em></small></p></div></div></div>");
		}
});
		
	$.ajax({
  url: url5,
  method: 'GET',
}).done(function(result) {
	
	for (var i=0; i<result.results.length; i++){
	var date = result.results[i].publication_date;
	var more = result.results[i].summary_short;
	var title = result.results[i].display_title;
	var link = result.results[i].link.url;
	var img = result.results[i].multimedia.src;
		
		$('.banner-sec .container').append("<div class='row'>" + "<div clas='col-md-12'>" + "<div class='card'>" + "<div class='card-block'>" + "<img src='" + img + "' style='float:left; max-width:210px; margin-right: 10px'>" + "<div class='news-title'>" + "<h2 class='title-small'>" + "<a href='" + link + "' target='blank'>" + title + "</a>" + "</h2>" + "</div>" + "<div>" + more + "</div>" + "<p class='card-text'>" + "<small class='text-time'>" + "<em>" + date.substr(0,10) + " " + date.substr(11,8) + "</em></small></p></div></div></div>");
		}
});
	
});



//2 MONTHS AGO
var url6 = "https://api.nytimes.com/svc/movies/v2/reviews/search.json";
var url7 = "https://api.nytimes.com/svc/movies/v2/reviews/search.json";
var url8 = "https://api.nytimes.com/svc/movies/v2/reviews/search.json";

var res4 = currentDate.toISOString().slice(0,8).replace(/-/g,"")-2 + '01';
var res4s = [res4.slice(0,4), '-', res4.slice(4,6), '-', res4.slice(6,8)].join('');
var res5 = currentDate.toISOString().slice(0,8).replace(/-/g,"")-2 + '30';
var res5s = [res5.slice(0,4), '-', res5.slice(4,6), '-', res5.slice(6,8)].join('');
var finalRes2 = res4s + ';' + res5s;
console.log(finalRes2);

url6 += '?' + $.param({
  'api-key': "9fd8d31dedf54e04a517abbe68f9e387",
	'opening-date': finalRes2,
	'order': "opening_date",
	'offset': 0
});

url7 += '?' + $.param({
  'api-key': "9fd8d31dedf54e04a517abbe68f9e387",
	'opening-date': finalRes2,
	'order': "opening_date",
	'offset': 20
});

url8 += '?' + $.param({
  'api-key': "9fd8d31dedf54e04a517abbe68f9e387",
	'opening-date': finalRes2,
	'order': "opening_date",
	'offset': 40
});


$('.nav-item3').click(function(){
		$('.banner-sec .container').html("");


$.ajax({
  url: url6,
  method: 'GET',
}).done(function(result) {
	
	for (var i=0; i<result.results.length; i++){
	var date = result.results[i].publication_date;
	var more = result.results[i].summary_short;
	var title = result.results[i].display_title;
	var link = result.results[i].link.url;
	var img = result.results[i].multimedia.src;
		
		$('.banner-sec .container').append("<div class='row'>" + "<div clas='col-md-12'>" + "<div class='card'>" + "<div class='card-block'>" + "<img src='" + img + "' style='float:left; max-width:210px; margin-right: 10px'>" + "<div class='news-title'>" + "<h2 class='title-small'>" + "<a href='" + link + "' target='blank'>" + title + "</a>" + "</h2>" + "</div>" + "<div>" + more + "</div>" + "<p class='card-text'>" + "<small class='text-time'>" + "<em>" + date.substr(0,10) + " " + date.substr(11,8) + "</em></small></p></div></div></div>");
		}
});

	$.ajax({
  url: url7,
  method: 'GET',
}).done(function(result) {
	
	for (var i=0; i<result.results.length; i++){
	var date = result.results[i].publication_date;
	var more = result.results[i].summary_short;
	var title = result.results[i].display_title;
	var link = result.results[i].link.url;
	var img = result.results[i].multimedia.src;
		
		$('.banner-sec .container').append("<div class='row'>" + "<div clas='col-md-12'>" + "<div class='card'>" + "<div class='card-block'>" + "<img src='" + img + "' style='float:left; max-width:210px; margin-right: 10px'>" + "<div class='news-title'>" + "<h2 class='title-small'>" + "<a href='" + link + "' target='blank'>" + title + "</a>" + "</h2>" + "</div>" + "<div>" + more + "</div>" + "<p class='card-text'>" + "<small class='text-time'>" + "<em>" + date.substr(0,10) + " " + date.substr(11,8) + "</em></small></p></div></div></div>");
		}
});
		
	$.ajax({
  url: url8,
  method: 'GET',
}).done(function(result) {
	
	for (var i=0; i<result.results.length; i++){
	var date = result.results[i].publication_date;
	var more = result.results[i].summary_short;
	var title = result.results[i].display_title;
	var link = result.results[i].link.url;
	var img = result.results[i].multimedia.src;
		
		$('.banner-sec .container').append("<div class='row'>" + "<div clas='col-md-12'>" + "<div class='card'>" + "<div class='card-block'>" + "<img src='" + img + "' style='float:left; max-width:210px; margin-right: 10px'>" + "<div class='news-title'>" + "<h2 class='title-small'>" + "<a href='" + link + "' target='blank'>" + title + "</a>" + "</h2>" + "</div>" + "<div>" + more + "</div>" + "<p class='card-text'>" + "<small class='text-time'>" + "<em>" + date.substr(0,10) + " " + date.substr(11,8) + "</em></small></p></div></div></div>");
		}
});
});