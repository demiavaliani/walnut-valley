import { useSite } from '../stores/site';

export const useTranslation = () => {
	const store = useSite();

	const language = store.siteLanguage;

	type Translation =
		| keyof typeof languages.georgian
		| keyof typeof languages.english
		| keyof typeof languages.russian;

	const t = (langVar: Translation): string => {
		const languageArray = languages[language];

		const translation = languageArray[langVar];

		return translation;
	};

	return { t };
};

const languages = {
	georgian: {
		'navbar.main': 'მთავარი',
		'navbar.company': 'კომპანია',
		'navbar.company.about-us': 'ჩვენს შესახებ',
		'navbar.company.our-history': 'ჩვენი ისტორია',
		'navbar.production': 'წარმოება',
		'navbar.our-orchards': 'ჩვენი ბაღები',
		'navbar.our-product': 'ჩვენი პროდუქტი',
		'navbar.contact-us': 'დაგვიკავშირდით',
		'footer.description':
			'მსოფლიო ინდუსტრია საქართველოს თხილის ერთ-ერთ უმსხვილეს ექსპორტიორ ქვეყნად იცნობს.',
	},
	english: {
		'navbar.main': 'Home',
		'navbar.company': 'Company',
		'navbar.company.about-us': 'About us',
		'navbar.company.our-history': 'Our history',
		'navbar.production': 'Production',
		'navbar.our-orchards': 'Our orchards',
		'navbar.our-product': 'Our product',
		'navbar.contact-us': 'Contact us',
		'footer.description': 'Georgia, a global hazelnut powerhouse, ranks #5 in exports since 2012.',
	},
	russian: {
		'navbar.main': 'Главная',
		'navbar.company': 'Компания',
		'navbar.company.about-us': 'О нас',
		'navbar.company.our-history': 'Наша история',
		'navbar.production': 'Производство',
		'navbar.our-orchards': 'Наши сады',
		'navbar.our-product': 'Наш продукт',
		'navbar.contact-us': 'Контактная информация',
		'footer.description':
			'Мировая промышленность знает Грузию, как одного из крупнейших экспортеров фундука.',
	},
};