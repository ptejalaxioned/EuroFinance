let fname = document.querySelector("#first-name");
let lname = document.querySelector("#last-name");
let position = document.querySelector("#position");
let company = document.querySelector("#company");
let company_type = document.querySelector("#company-type");
let country = document.querySelector("#country");
let work_email = document.querySelector("#work-email");
let yes = document.querySelector("#yes");
let no = document.querySelector("#no");
let form = document.querySelector("form");
let line1 = document.querySelector(".line1");
let line2 = document.querySelector(".line2");
let line3 = document.querySelector(".line3");
let line = document.querySelector(".line");

let fname_div = document.querySelector(".fname-div");
let lname_div = document.querySelector(".lname-div");
let position_div = document.querySelector(".position-div");
let company_div = document.querySelector(".company-div");
let company_type_div = document.querySelector(".company-type-div");
let country_div = document.querySelector(".country-div");
let work_email_div = document.querySelector(".email-div");
let yes_no_div = document.querySelector(".yes-no");

let hamburger = document.querySelector(".hamburger");
let nav_list = document.querySelector(".nav-list");

hamburger.addEventListener("click", () => {
  nav_list.classList.toggle("nav-list-onclick");
  line1.classList.toggle("line1-onclick");
  line2.classList.toggle("line2-onclick");
  line3.classList.toggle("line3-onclick");
  hamburger.classList.toggle("hamburger-onclick");
});

form.addEventListener("submit", (e) => {
  let regx_name = /^[a-zA-Z]{2,20}$/;
  let regx_Pname = /^[a-zA-Z]{4,25}$/;
  let regx_Cname = /^[a-zA-Z0-9]{3,30}$/;
  let regx_email = /^[a-zA-Z0-9.]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  span_content_name = "min-2 max-20 charachters with A-Z";
  span_content_position = "min-4 max-25 charachters with A-Z";
  span_content_company = "min-3 max-30 charachters with A-Z or 0-9";
  span_content_email = "please enter valid email";
  span_content_country = "*please choose country";
  span_content_company_type = "*please select Company type";

  //For first name
  if (fname_div.children.length == 2) {
    let span_fname = document.createElement("span");
    span_fname.classList.toggle("div-span");
    fname_div.appendChild(span_fname);
    addSpan(span_fname, fname, e, regx_name, span_content_name);
  } else {
    let span_fname = fname_div.children[2];
    addSpan(span_fname, fname, e, regx_name, span_content_name);
  }

  //For last name
  if (lname_div.children.length == 2) {
    let span_lname = document.createElement("span");
    span_lname.classList.toggle("div-span");
    lname_div.appendChild(span_lname);
    addSpan(span_lname, lname, e, regx_name, span_content_name);
  } else {
    let span_lname = lname_div.children[2];
    addSpan(span_lname, lname, e, regx_name, span_content_name);
  }

  //For position
  if (position_div.children.length == 2) {
    let span_position = document.createElement("span");
    span_position.classList.toggle("div-span");
    position_div.appendChild(span_position);
    addSpan(span_position, position, e, regx_Pname, span_content_position);
  } else {
    let span_position = position_div.children[2];
    addSpan(span_position, position, e, regx_Pname, span_content_position);
  }

  //For company
  if (company_div.children.length == 2) {
    let span_company = document.createElement("span");
    span_company.classList.toggle("div-span");
    company_div.appendChild(span_company);
    addSpan(span_company, company, e, regx_Cname, span_content_company);
  } else {
    let span_company = company_div.children[2];
    addSpan(span_company, company, e, regx_Cname, span_content_company);
  }

  //Validation for company type
  if (country_div.children.length == 2) {
    let span_company_type = document.createElement("span");
    span_company_type.classList.toggle("div-span");
    company_type_div.appendChild(span_company_type);
    addSpanForSelect(
      span_company_type,
      company_type,
      e,
      "-select-",
      span_content_company_type
    );
  } else {
    let span_company_type = company_type_div.children[2];
    addSpanForSelect(
      span_company_type,
      company_type,
      e,
      "-select-",
      span_content_company_type
    );
  }

  //Validation for country
  if (country_div.children.length == 2) {
    let span_country = document.createElement("span");
    span_country.classList.toggle("div-span");
    country_div.appendChild(span_country);
    addSpanForSelect(
      span_country,
      country,
      e,
      "-Choose-",
      span_content_country
    );
  } else {
    let span_country = country_div.children[2];
    addSpanForSelect(
      span_country,
      country,
      e,
      "-Choose-",
      span_content_country
    );
  }

  // For work email
  if (work_email_div.children.length == 2) {
    let span_work_email = document.createElement("span");
    span_work_email.classList.toggle("div-span");
    work_email_div.appendChild(span_work_email);
    addSpan(span_work_email, work_email, e, regx_email, span_content_email);
  } else {
    let span_work_email = work_email_div.children[2];
    addSpan(span_work_email, work_email, e, regx_email, span_content_email);
  }

  //Validation for yes/no
  if (yes_no_div.children.length == 3) {
    let span_yes_no = document.createElement("span");
    span_yes_no.classList.toggle("div-span");
    yes_no_div.appendChild(span_yes_no);
    addSpanForRadio(span_yes_no, e, yes, no);
  } else {
    let span_yes_no = yes_no_div.children[3];
    addSpanForRadio(span_yes_no, e, yes, no);
  }
});

//For validation
function addSpan(span, input, e, regx, spanContent) {
  if (input.value === "") {
    span.innerHTML = "*This field is required";
    input.classList.add("input-border");
    e.preventDefault();
  } else if (regx.test(input.value)) {
    span.innerHTML = "";
    input.classList.remove("input-border");
  } else {
    span.innerHTML = spanContent;
    input.classList.add("input-border");
    e.preventDefault();
  }
}

//For yes/no
function addSpanForRadio(span, e, yes, no) {
  if (yes.checked == false && no.checked == false) {
    span.innerHTML = "*please select an option";
    e.preventDefault();
  } else {
    span.innerHTML = "";
  }
}

//For country /company-type
function addSpanForSelect(span, input, e, option, span_content) {
  if (input.value == option) {
    span.innerHTML = span_content;
    input.classList.add("input-border");
    e.preventDefault();
  } else {
    span.innerHTML = "";
    input.classList.remove("input-border");
  }
}
