let button = $('.tab-button');

for (let i = 0; i < button.length; i++)
  button.click((e) => {
    if (e.target == document.querySelectorAll('.tab-button')[i]) tab(i);
  });

function tab(i) {
  $('.tab-button').removeClass('orange');
  $('.tab-button').eq(i).addClass('orange');
  $('.tab-content').removeClass('show');
  $('.tab-content').eq(i).addClass('show');
}

let car2 = { name: '소나타', price: [50000, 3000, 4000] };
$('.car-title').html(car2.name);
$('.car-price').html(car2.price[1]);

let products = [
  { id: 0, price: 70000, title: 'Blossom Dress' },
  { id: 1, price: 50000, title: 'Springfield Shirt' },
  { id: 2, price: 60000, title: 'Black Monastery' },
];

products.forEach((a, i) => {
  var 템플릿 = `<div class="col-sm-4">
    <img src="https://via.placeholder.com/600" class="w-100">
    <h5>${products[i].title}</h5>
    <p>가격 : ${products[i].price}</p>
  </div>`;
  $('.row').append(템플릿);
});

$('#sort1').click(function () {
  products.sort(function (a, b) {
    if (a.title < b.title) {
      return 1;
    } else {
      return -1;
    }
  });

  $('.row').html(''); //카드 다 없애주셈
  products.forEach((a, i) => {
    var 템플릿 = `<div>상품명은 ${products[i].title}</div>`;
    $('.row').append(템플릿);
  });
});

$('#filter').click(() => {
  let new_products = products.filter((a) => {
    return a.price <= 60000;
  });
  $('.row').html('');
  new_products.forEach((a, i) => {
    let products_template = `<div class="col-sm-4">
    <img src="https://via.placeholder.com/600" class="w-100">
    <h5>${new_products[i].title}</h5>
    <p>가격 : ${new_products[i].price}</p>
  </div>`;
    $('.row').append(products_template);
  });
});

$('#price').click(() => {
  products.sort((a, b) => {
    return a.price - b.price;
  });

  $('.row').html('');
  products.forEach((a, i) => {
    let products_template = `<div class="col-sm-4">
  <img src="https://via.placeholder.com/600" class="w-100">
  <h5>${products[i].title}</h5>
  <p>가격 : ${products[i].price}</p>
</div>`;
    $('.row').append(products_template);
  });
});

let btn_num = 0;
$('#more').on('click', () => {
  if (btn_num === 0) {
    $.get('https://codingapple1.github.io/js/more1.json').done((data) => {
      data.forEach((a, i) => {
        let products_template = `<div class="col-sm-4">
      <img src="https://via.placeholder.com/600" class="w-100">
      <h5>${data[i].title}</h5>
      <p>가격 : ${data[i].price}</p>
    </div>`;
        $('.row').append(products_template);
      });
    });
  }
  if (btn_num === 1) {
    $.get('https://codingapple1.github.io/js/more2.json').done((res) => {
      res.forEach((a, i) => {
        let products_template = `<div class="col-sm-4">
      <img src="https://via.placeholder.com/600" class="w-100">
      <h5>${a.title}</h5>
      <p>가격 : ${a.price}</p>
    </div>`;
        $('.row').append(products_template);
      });
    });
  }
  if (btn_num === 2) {
    $('#more').css('display', 'none');
  }
  btn_num++;
});

let pants = [28, 30, 32];
$('.form-select')
  .eq(0)
  .on('input', function () {
    let value = $('.form-select').eq(0).val();
    if (value == '셔츠') {
      $('.form-select').eq(1).removeClass('form-hide');
      // $('.form-select').eq(1).html('');
      let template2 = `<option>95</option><option>100</option>`;
      $('.fomr-select').eq(1).append(template2);
    }
    if (value == '모자') {
      $('.form-select').eq(1).addClass('form-hide');
    }

    if (value == '바지') {
      $('.form-select').eq(1).removeClass('form-hide');
      $('.form-select').eq(1).html('');
      pants.forEach((a) => {
        $('.form-select').eq(1).append(`<option>${a}</option>`);
      });
    }
  });
