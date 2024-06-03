let fname = document.querySelector('#first-name');
let lname = document.querySelector('#last-name');
let position = document.querySelector('#position');
let company = document.querySelector('#company');
let company_type = document.querySelector('#company-type');
let country = document.querySelector('#country');
let work_email = document.querySelector('#work-email');
let yes_no = document.querySelector('#yes-no');
let yes = document.querySelector('#yes');
let no = document.querySelector('#no');
let form = document.querySelector('form');

let fname_div = document.querySelector('.fname-div');
let lname_div = document.querySelector('.lname-div');
let position_div = document.querySelector('.position-div');
let company_div = document.querySelector('.company-div');
let company_type_div = document.querySelector('.company-type-div');
let country_div = document.querySelector('.country-div');
let work_email_div = document.querySelector('.email-div');

form.addEventListener('submit', (e) => {
  let regx_name = /^[a-zA-Z]{2,20}$/;
  let regx_Pname = /^[a-zA-Z]{4,25}$/;
  let regx_Cname = /^[a-zA-Z0-9]{3,30}$/;
  let regx_email = /^[a-zA-Z0-9@]{6,15}$/;

  //Validation for first name
  let span_fname = document.createElement('span');
  span_fname.classList.toggle('div-span');
  fname_div.appendChild(span_fname);

  if (fname.value === '') {
    span_fname.innerHTML = 'First name is required';
    e.preventDefault();
  } else if (regx_name.test(fname.value)) {
    span_fname.innerHTML = '';
  } else {
    span_fname.innerHTML = 'min-2 max-20 charachters with A-Z';
    e.preventDefault();
  }

  //Validation for last name
  let span_lname = document.createElement('span');
  span_lname.classList.toggle('div-span');
  lname_div.appendChild(span_lname);

  if (lname.value == '') {
    span_lname.innerHTML = 'Last name is required';
    e.preventDefault();
  } else if (regx_name.test(lname.value)) {
    span_lname.innerHTML = '';
  } else {
    span_lname.innerHTML = 'min-2 max-20 charachters with A-Z';
    e.preventDefault();
  }

  //Validation for position
  let span_position = document.createElement('span');
  span_position.classList.toggle('div-span');
  position_div.appendChild(span_position);
  if (position.value == '') {
    span_position.innerHTML = 'Position is required';
    e.preventDefault();
  } else if (regx_Pname.test(position.value)) {
    span_position.innerHTML = '';
  } else {
    span_position.innerHTML = 'min-4 max-25 charachters with A-Z';
    e.preventDefault();
  }

  //Validation for company
  let span_company = document.createElement('span');
  span_company.classList.toggle('div-span');
  company_div.appendChild(span_company);
  if (company.value == '') {
    span_company.innerHTML = 'Company name is required';
    e.preventDefault();
  } else if (regx_Cname.test(company.value)) {
    span_company.innerHTML = '';
  } else {
    span_company.innerHTML = 'min-3 max-30 charachters with A-Z';
    e.preventDefault();
  }

  //Validation for company type
  let span_company_type = document.createElement('span');
  span_company_type.classList.toggle('div-span');
  company_type_div.appendChild(span_company_type);

  if (
    company_type.value == '-select-' &&
    company_type_div.children.length == 2
  ) {
    span_company_type.innerHTML = 'please select Company type';
  }

  //Validation for country
  let span_country = document.createElement('span');
  span_country.classList.toggle('div-span');
  country_div.appendChild(span_country);

  if (country.value == '-Choose-' && country_div.children.length == 2) {
    span_country.innerHTML = 'please choose country';
  }

  //Validation for work email
  let span_work_email = document.createElement('span');
  span_work_email.classList.toggle('div-span');
  work_email_div.appendChild(span_work_email);
  if (work_email.value == '') {
    span_work_email.innerHTML = 'work email is required';
    e.preventDefault();
  } else if (regx_email.test(work_email.value)) {
    span_work_email.innerHTML = '';
  } else {
    span_company.innerHTML = 'please enter valid email';
    e.preventDefault();
  }
});
