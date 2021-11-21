document.addEventListener('DOMContentLoaded', () => {
//Получаем предупреждающие надписи//
	const formWarningOne = document.querySelector('.form__warning-01')
	const formWarningTwo = document.querySelector('.form__warning-02')
	const formWarningThree = document.querySelector('.form__warning-03')
	const formWarningFour = document.querySelector('.form__warning-04')
//Получаем форму и ее элементы//
	let form = document.forms.form; 
	let productName = form.elements.productName;
	let productDescription = form.elements.productDescription;
	let productImg = form.elements.productImg;
	let productPrise = form.elements.productPrise;
//Кнопка формы//
	const formBtn = document.querySelector('.form__btn');
	let valid = true;
//Деактивация кнопки//
	formBtn.classList.add('disabled');
	formBtn.disabled = true;
//Функция проверки формы на заполненность//	
	function validate_form () {
//Проверяем каждое поле и подсвечиваем не заполненное//
		if(productName.value == ""){
			formWarningOne.style.opacity = "1";
			productName.style.outline = '1px solid #FF8484';
		}
		else{
			formWarningOne.style.opacity = "0";
			productName.style.outline = 'none';
		}
		if(productImg.value == ""){
			formWarningThree.style.opacity = "1";
			productImg.style.outline = '1px solid #FF8484';
		}
		else{
			formWarningThree.style.opacity = "0";
			productImg.style.outline = 'none';
		}
		if(productPrise.value == ""){
			formWarningFour.style.opacity = "1";
			productPrise.style.outline = '1px solid #FF8484';
		}
		else{
			formWarningFour.style.opacity = "0";
			productPrise.style.outline = 'none';
		}
//Проверка заполненности всех полей//
		if( productName.value != "" && productImg.value != "" && productPrise.value != ""){
			valid = true;
		}
		else{
			valid = false;
		}
		if(valid == false){
			formBtn.disabled = true;
			formBtn.classList.add('disabled');
			return false;
		}
		else{
			formBtn.disabled = false;
			formBtn.classList.remove('disabled');
			return true;
		}
	}
	productName.addEventListener('keyup', ()=> {
		validate_form();
	})
	productDescription.addEventListener('keyup', ()=> {
		validate_form();
	})
	productImg.addEventListener('keyup', ()=> {
		validate_form();
	})
	productPrise.addEventListener('keyup', ()=> {
		validate_form();
	})

//фиксация блока при прокрутке//
	window.addEventListener('scroll', onWindowScroll)
	function onWindowScroll() {
	    if(window.document.scrollingElement.scrollTop > 50){
	      form.classList.add("fixed");
	    }
	    else { 
	      form.classList.remove("fixed");
	    }
	}


})