jQuery( document ).ready(function($){

		/* ------------------- Плавный скролл по якорным ссылкам -------------------- */

	const anchors = document.querySelectorAll('a[href*="#"]');

	anchors.forEach(anchor => {
		anchor.addEventListener('click', event => {
			event.preventDefault();

			const blockID = anchor.getAttribute('href').substring(1);

			document.getElementById(blockID).scrollIntoView({
				behavior: 'smooth',
				block: 'start'
			})
		})
	});

//Замена стандартного селекта --------------------------------------------------------------------------------------------------------------
    $( ".select" ).selectmenu();


//Слайдер --------------------------------------------------------------------------------------------------------------

    $('.reviews-slider').slick({
        infinite: true,
        speed: 350,
        arrows: true,
        dots: false,

        responsive: [
            {
                breakpoint: 1020,
                settings: {
                    arrows: false,
                    dots: true,
                }
            }
        ]
    });


// --------------------------------------------------------------------------------------------------------------
    // закладки
    $('.bookmark').on('click', 'li:not(.active)', function() {
        $(this).addClass('active').siblings().removeClass('active').parents('.tabs').find('.bookmarker-box').eq($(this).index()).fadeIn(150).siblings('.bookmarker-box').hide();
    })
    $(".bookmark li").eq(0).click();

// Всплывалка --------------------------------------------------------------------------------------------------------------
        $(".open-reg").click(function(e){
            e.preventDefault();
            $(".popup-fon, .popup-reg").show();
            //$("body").addClass('popup-open');
        });

        $(".popup-fon, .close-popup").click(function(){
            $(".popup-fon, .popup").hide();
            //$("body").removeClass('popup-open');
        });

//Выбор страны --------------------------------------------------------------------------------------------------------------

    var countries = new Bloodhound({
        datumTokenizer: Bloodhound.tokenizers.whitespace,
        queryTokenizer: Bloodhound.tokenizers.whitespace,
        // url points to a json file that contains an array of country names, see
        // https://github.com/twitter/typeahead.js/blob/gh-pages/data/countries.json
        prefetch: 'countries.json'
    });

// passing in `null` for the `options` arguments will result in the default
// options being used
    $('.typeahead').typeahead(null, {
        name: 'countries',
        source: countries
    });

// --------------------------------------------------------------------------------------------------------------
    $(window).scroll(function(){
        if ($(this).scrollTop() > 100) {
            $('.scrollup').fadeIn();
        } else {
            $('.scrollup').fadeOut();
        }
    });

    $('.scrollup').click(function(){
        $("html, body").animate({ scrollTop: 0 }, 600);
        return false;
    });

// --------------------------------------------------------------------------------------------------------------
    $('.profile-slider').slick({
        autoplay: true,
        autoplaySpeed: 5000,
        infinite: true,
        speed: 350,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    arrows: false,
                    dots: true
                }
            },
            {
                breakpoint: 650,
                settings: {
                    slidesToShow: 2,
                    dots: true
                }
            },
            {
                breakpoint: 370,
                settings: {
                    slidesToShow: 1,
                    dots: true
                }
            }
        ]
    });

// Анимация шапки----------------------------------------------------------------------------------------------------------------
    $(window).scroll(function(){
        if ($(this).scrollTop() > 560) {
            $('body').addClass('fs-sticky-active');
        } else {
            $('body').removeClass('fs-sticky-active');
        }
    });

		/* ------------------- Скрипт селекта кастомного -------------------- */
	// находим все наши кастомные селекты на странице
	const customSelects = document.querySelectorAll('.custom-select');
	// переменная для хранения текущтого селекта
	let currentSelect = null;

	// функция для закрытия всех открытых селектов
	const closeAllSelects = () => {
		customSelects.forEach(select => {
			select.classList.remove('active');
		});
		currentSelect = null;
	};

	// добавляем обработчик клика на документ
	document.addEventListener('click', event => {
		const target = event.target;

		// проверяем, что кликнули вне области нашего кастомного селекта
		if (!target.closest('.custom-select') && !target.matches('.custom-select, .custom-select *')) {
			closeAllSelects();
		}
	});

	// добавляем обработчики на все кастомные селекты
	customSelects.forEach(select => {
		const selectInput = select.querySelector('.custom-select__input');
		const selectOptions = select.querySelectorAll('.custom-select__option');

		// добавляем обработчик клика на сам селект
		select.addEventListener('click', () => {
			// если текущий открытый селект не равен текущему, закрываем его
			if (currentSelect && currentSelect !== select) {
				currentSelect.classList.remove('active');
			}

			// закрываем или открываем текущий селект
			currentSelect = select;
			select.classList.toggle('active');
		});

		// добавляем обработчики клика на опции
		selectOptions.forEach(option => {
			option.addEventListener('click', () => {
				const value = option.dataset.value;
				selectInput.setAttribute('name', value);
				selectInput.value = option.textContent;
				select.dispatchEvent(new Event('blur'));
			});

			// добавляем обработчик нажатия клавиши Enter на опции
			option.addEventListener('keydown', event => {
				if (event.key === 'Enter') {
					const value = option.dataset.value;
					selectInput.setAttribute('name', value);
					selectInput.value = option.textContent;
					select.dispatchEvent(new Event('blur'));
				}
			});
		});
	});

});//конец ready