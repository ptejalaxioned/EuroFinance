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

let fname_div = document.querySelector(".fname-div");
let lname_div = document.querySelector(".lname-div");
let position_div = document.querySelector(".position-div");
let company_div = document.querySelector(".company-div");
let company_type_div = document.querySelector(".company-type-div");
let country_div = document.querySelector(".country-div");
let work_email_div = document.querySelector(".email-div");
let yes_no_div = document.querySelector(".yes-no");

form.addEventListener("submit", (e) => {
  let regx_name = /^[a-zA-Z]{2,20}$/;
  let regx_Pname = /^[a-zA-Z]{4,25}$/;
  let regx_Cname = /^[a-zA-Z0-9]{3,30}$/;
  let regx_email = /^[a-zA-Z0-9@]{6,15}$/;

span_content_name="min-2 max-20 charachters with A-Z"
span_content_position="min-4 max-25 charachters with A-Z"
span_content_company="min-3 max-30 charachters with A-Z or 0-9"
span_content_email= "please enter valid email"

  //For first name
  if (fname_div.children.length == 2) {
    let span_fname = document.createElement("span");
    span_fname.classList.toggle("div-span");
    fname_div.appendChild(span_fname);
    addSpan(span_fname, fname,e,regx_name,span_content_name);
  } else {
    let span_fname = fname_div.children[2];
    addSpan(span_fname, fname,e,regx_name,span_content_name);
  }


  //For last name
  if (lname_div.children.length == 2) {
    let span_lname = document.createElement("span");
    span_lname.classList.toggle("div-span");
    lname_div.appendChild(span_lname);
    addSpan(span_lname, lname ,e,regx_name,span_content_name);
  } else {
    let span_lname = lname_div.children[2];
    addSpan(span_lname, lname,e,regx_name,span_content_name);
  }


  //For position
  if (position_div.children.length == 2) {
    let span_position = document.createElement("span");
  span_position.classList.toggle("div-span");
  position_div.appendChild(span_position);
    addSpan(span_position, position ,e,regx_Pname,span_content_position);
  } else {
    let span_position = position_div.children[2];
    addSpan(span_position, position ,e,regx_Pname,span_content_position);
  }

    //For company
    if (company_div.children.length == 2) {
      let span_company = document.createElement("span");
      span_company.classList.toggle("div-span");
      company_div.appendChild(span_company);
      addSpan(span_company, company ,e,regx_Cname,span_content_company);
    } else {
      let span_company = company_div.children[2];
      addSpan(span_company, company ,e,regx_Cname,span_content_company);
    }
  


  //Validation for company type
  let span_company_type = document.createElement("span");
  span_company_type.classList.toggle("div-span");
  company_type_div.appendChild(span_company_type);

  if (company_type.value == "-select-") {
    span_company_type.innerHTML = "*please select Company type";
  }

  //Validation for country
  let span_country = document.createElement("span");
  span_country.classList.toggle("div-span");
  country_div.appendChild(span_country);

  if (country.value == "-Choose-") {
    span_country.innerHTML = "*please choose country";
  }

  //For work email
  // if (work_email_div.children.length == 2) {
  //   let span_work_email = document.createElement("span");
  //   span_work_email.classList.toggle("div-span");
  //   work_email_div.appendChild(span_work_email);
  //   addSpan(span_work_email, work_email ,e, regx_email,span_content_email);
  // } else {
  //   let span_work_email = work_email_div.children[2];
  //   addSpan(span_work_email, work_email ,e, regx_email ,span_content_email);
  // }

  let span_work_email = document.createElement("span");
    span_work_email.classList.toggle("div-span");
    work_email_div.appendChild(span_work_email);

  
  if (work_email.value == "") {
    span_work_email.innerHTML = "*This Field is required";
    e.preventDefault();
  } else if (regx_email.test(work_email.value)) {
    span_work_email.innerHTML = "";
  } else {
    span_company.innerHTML = "please enter valid email";
    e.preventDefault();
  }

  //Validation for yes/no
  let span_yes_no = document.createElement("span");
  span_yes_no.classList.toggle("div-span");
  yes_no_div.appendChild(span_yes_no);
  if (yes.checked == false && no.checked == false) {
    span_yes_no.innerHTML = "*please select an option";
  }
});


//For validation
function addSpan(span, input,e,regx,spanContent) {
  if (input.value === "") {
    span.innerHTML = "*This field is required";
    e.preventDefault();
  } else if (regx.test(input.value)) {
    span.innerHTML = "";
  } else {
    span.innerHTML = spanContent;
     e.preventDefault();
  }
}
