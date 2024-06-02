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

console.log(
  fname.value,
  lname.value,
  position.value,
  company.value,
  company_type.value,
  country.value,
  work_email.value
  // yes.value,
  // no.value
);

form.addEventListener('submit', (e) => {
  if (fname.value == '') {
    console.log('Hello');
    let span_fname = document.createElement('span');
    fname_div.appendChild(span_fname);
    span_fname.innerHTML = '*First name is reqired';
    // e.preventDefault();
  }
  e.preventDefault();
  console.log(
    fname.value,
    lname.value,
    position.value,
    company.value,
    company_type.value,
    country.value,
    work_email.value
    // yes.value,
    // no.value
  );
});
