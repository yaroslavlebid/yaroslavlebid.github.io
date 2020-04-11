let requestURL = '/reviews.json';
let request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'text';
request.send();

request.onload = function () {
  const reviewsText = request.response;
  const reviews = JSON.parse(reviewsText);
  show(reviews);
}

function show(jsonObj) {
  const reviews = jsonObj['data'];
  var data = '';
  for (let i = 0; i < reviews.length; i++) {
    data = data + '<li>\n' + '<div class="img-box">' + '<img src="' + reviews[i].Avatar + '" alt="Author image">\n</div>'
      + '<p>' + reviews[i].Text + '</p>\n' + '<p class="author">' + reviews[i].Name + '</p>\n' + '</li>';
  }

  let ul_element = document.createElement('ul');
  ul_element.classList.add('review-content');
  ul_element.innerHTML = data;
  document.getElementById("reviews-content").appendChild(ul_element);
}

console.log('json loaded and inserted');