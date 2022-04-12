let button = $('.tab-button');
let content = $('.tab-content');

function tab(i) {
  button.removeClass('orange');
  button.eq(i).addClass('orange');
  content.removeClass('show');
  content.eq(i).addClass('show');
}

$('.list').click((e) => {
  tab(e.target.dataset.id);
});

let car2 = { name: '소나타', price: [50000, 3000, 4000] };

$('.car-title').html(car2.name);
$('.car-price').html(car2.price[1]);

let products = [
  { id: 0, price: 70000, title: 'Blossom Dress' },
  { id: 1, price: 50000, title: 'Springfield Shirt' },
  { id: 2, price: 60000, title: 'Black Monastery' },
];

// document.querySelectorAll('.card-body h5')[0].innerHTML = products[0].title;
// document.querySelectorAll(
//   '.card-body p'
// )[0].innerHTML = `가격 : ${products[0].price}`;
// document.querySelectorAll('.card-body h5')[1].innerHTML = products[1].title;
// document.querySelectorAll(
//   '.card-body p'
// )[1].innerHTML = `가격 : ${products[1].price}`;
// document.querySelectorAll('.card-body h5')[2].innerHTML = products[2].title;
// document.querySelectorAll(
//   '.card-body p'
// )[2].innerHTML = `가격 : ${products[2].price}`;

let pants = [28, 30, 32];

$('.form-select').on('input', () => {
  let value = $('.form-select').eq(0).val();
  if (value === '셔츠') {
    $('.form-select').eq(1).removeClass('form-hide');
    let template = `<option>105</option><option>110</option>`;
    $('.form-select').eq(1).append(template);
  }
  if (value === '모자') {
    $('.form-select').eq(1).addClass('form-hide');
  }
  if (value === '바지') {
    $('.form-select').eq(1).removeClass('form-hide');
    $('.form-select').eq(1).html('');
    pants.forEach((a) => {
      $('.form-select').eq(1).append(`<option>${a}</option>`);
    });
  }
});

$.get('https://codingapple1.github.io/js/more1.json').then((res) =>
  console.log(res)
);

products.forEach((a, i) => {
  let template = `<div class="col-sm-4">
  <img src="https://via.placeholder.com/600" class="w-100">
  <h5>${products[i].title}</h5>
  <p>${products[i].price}</p>
  <button class="buy">구매</button>
  </div>`;
  $('.row').append(template);
});

let click_num = 0;
$('#more').click(() => {
  click_num++;
  if (click_num === 1) {
    $.get('https://codingapple1.github.io/js/more1.json').then((res) => {
      res.forEach((a, i) => {
        let template = `<div class="col-sm-4">
      <img src="https://via.placeholder.com/600" class="w-100">
      <h5>${a.title}</h5>
      <p>${a.price}</p>
    </div>`;
        $('.row').append(template);
      });
    });
  }
  if (click_num === 2) {
    $.get('https://codingapple1.github.io/js/more2.json').then((res) => {
      res.forEach((a, i) => {
        let template = `<div class="col-sm-4">
      <img src="https://via.placeholder.com/600" class="w-100">
      <h5>${a.title}</h5>
      <p>${a.price}</p>
    </div>`;
        $('.row').append(template);
      });
    });
  }
  if (click_num === 3) {
    $('#more').css('display', 'none');
  }
});

// let array = ['다', '가', '나'];

// array.sort((a, b) => {
//   if (a > b) return -1;
//   else return 1;
// });

// console.log(array);

$('#sort1').click(() => {
  products.sort((a, b) => {
    if (a.title > b.title) {
      return -1;
    } else return 1;
  });
  $('.row').html('');
  products.forEach((a, i) => {
    let template = `<div class="col-sm-4">
    <img src="https://via.placeholder.com/600" class="w-100">
    <h5>${a.title}</h5>
    <p>${a.price}</p>
  </div>`;
    $('.row').append(template);
  });
});

$('#filter').click(() => {
  let new_product = products.filter((a) => {
    return a.price <= 60000;
  });
  $('.row').html('');
  new_product.forEach((a, i) => {
    let template = ` <div class="col-sm-4">
  <img src="https://via.placeholder.com/600" class="w-100">
  <h5>${new_product[i].title}</h5>
  <p>${new_product[i].price}</p>
</div>`;
    $('.row').append(template);
  });
});

$('#alpha').click(() => {
  products.sort((a, b) => {
    if (a.title > b.title) return 1;
    else return -1;
  });
  $('.row').html('');
  products.forEach((a, i) => {
    let template = ` <div class="col-sm-4">
    <img src="https://via.placeholder.com/600" class="w-100">
    <h5>${products[i].title}</h5>
    <p>${products[i].price}</p>
</div>`;
    $('.row').append(template);
  });
});

$('#return').click(() => {
  new_products = [...products];
  console.log(new_products);
  $('.row').html('');
  new_products.forEach((a, i) => {
    let template = ` <div class="col-sm-4">
    <img src="https://via.placeholder.com/600" class="w-100">
    <h5>${new_products[i].title}</h5>
    <p>${new_products[i].price}</p>
</div>`;
    $('.row').append(template);
  });
});

$('#input_filter').click(() => {
  let input_value = document.getElementById('text').value;
  $('.row').html('');
  products.forEach((a, i) => {
    if (input_value === products[i].title) {
      let template = `<div class="col-sm-4">
      <img src="https://via.placeholder.com/600" class="w-100">
      <h5>${products[i].title}</h5>
      <p>${products[i].price}</p>
  </div>`;
      $('.row').append(template);
    }
  });
});

$('.buy').click(function (e) {
  let title = $(e.target).siblings('h5').text();
  if (localStorage.getItem('cart') != null) {
    let output = JSON.parse(localStorage.cart);
    output.push(title);
    localStorage.setItem('cart', JSON.stringify(output));
  } else {
    localStorage.setItem('cart', JSON.parse([title]));
  }
});
