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
		'main.our-products': 'ჩვენი პროდუქტები',
		'main.our-products-description':
			'კაკლის ველი ჩენდლერის (Chandler) ჯიშის კაკალს აწარმოებს. ეს სახეობა ყველაზე პოპულარული კაკლის ჯიშია. იგი უხვი მოსავლიანობით, კაკლის მაღალი ხარისხითა და შესანიშნავი გემოვნური თვისებებით გამოირჩევა.',
		'main.our-orchards': 'ჩვენი ბაღები',
		'main.our-orchards-description':
			'კაკლის ველის ბაღები 2015 წელს, მცხეთის მუნიციპალიტეტში, სოფელ ძალისში გაშენდა. კაკლის ველის ბაღები გაშენებულია X ჰა ტერიტორიაზე. ბაღების მოსავლიანობა თავის პიკს 2025 წლისთვის მიაღწევს.',
		'main.our-production': 'ჩვენი საწარმო',
		'main.our-production-description':
			'კაკლის ველის თანამედროვე სტანდარტების საწარმო აღჭურვილია ყველა საჭირო ტექნოლოგიითა და საწარმო ხაზით, რომელიც მოსავლის გადამუშავებას - კაკლის გასუფთავებას, გაშრობას, სორტირებას - უზრუნველყოფს.',
		'main.main-text-1': `
			მსოფლიო ინდუსტრია საქართველოს თხილის ერთ-ერთ უმსხვილეს ექსპორტიორ ქვეყნად იცნობს. 2012 წლიდან საქართველოში მნიშვნელოვნად გაიზარდა თხილის წარმოება და ის მსოფლიოში სიდიდით #5 ექსპორტიორ ქვეყანად იქცა. საქართველო ყოველწიურად 46 ათას ტონა თხილს აწარმოებს, რომლის ძირითადი ნაწილი საექპორტო ბაზრებზე გადის.<br><br>
			კაკლის წარმოებას საქართველოში დიდი ისტორია აქვს. კაკლის მოხმარება მაღალია შიდა ბაზარზე, რადგან ნიგოზი ქართული სამზარეულოს ერთ-ერთი უმნიშვნელოვანესი და ხშირად გამოყენებადი ინგრედიენტია. ამიტომ კაკალი საქართველოში საოჯახო მეურნეობებში მრავლად იწარმოებოდა და წარმოების დიდი ნაწილი საკუთარი მოხმარებისთვის გამოიყენებოდა.
			`,
		'main.main-text-2':
			'კაკლის ინდუსტრიული წარმოება საქართველოში 2013 წლიდან დაიწყო. 2013-2021 წლებში საქართველოში 1000 ჰა-ზე მეტი ახალი კაკლის ბაღი გაშენდა. ამ ეტაპზე საქართველოს წელიწადში 7000 ტონაზე მეტ კაკალს აწარმოებს და ეს მაჩვენებელი ყოველწლიურად იზრდება. პარალელურად მკვეთრად იზრდება კაკლის გლობალური მოხმარებაც, რაც საქართველოს მწარმოებელთათვის ექსპორტის დამატებით შესაძლებლობას აჩენს.',
		'main.main-text-3': `
		<p>საქართველოში კაკლის წარმოებისთვის ხელსაწყრელ პირობებს შემდეგი ფაქტორები განაპირობებს:</p>
		<ul>
			<li>უნიკალური ხარისხის წყალქვეშა წყლების დიდი რეზერვები;</li>
			<li>ნაყოფიერი ნიადაგი, განსაკუთრებით მუხრანის ველსა და კახეთის რეგიონში;</li>
			<li>ამინდი და კლიმატური პირობები - ზომიერად სუბტროპიკული ჰავა, ზომიერად ცხელი ზაფხულითა და ზომიერად ცივი ზამთრით.</li>
		</ul>
		`,
		'main.main-text-4': `
		მსოფლიო ექსპერტების შეფასებით, საქართველოში წარმოებული კაკალი გარეგნული პარამეტრებით მსოფლიო ლიდერი ქვეყნების (ჩილე და აშშ) წარმოებულ კაკალს არ ჩამოუვარდება, გემოვნური თვისებებით კი აღემატება კიდეც. სწორი მოყვანის პირობებში, საქართველოს კლიმატი და წყლის უნიკალური ხარისხი, კაკალს გამორჩეულ გემოს, განსაკუთრებულ სიტკბოსა და სითეთრეს ანიჭებს.<br><br>
		კაკლის წარმოების ბაზრის განვითარებაში მნიშვნელოვან როლს თამაშობს სახელმწიფო. კერძოდ, ადგილობრივი მწარმოებლებისთვის ხელმისავწდომია იაფი კრედიტები და გრანტები, ასევე სახელმწიფო უზრუნველყოფს წვდომას საერთაშორისო ექსპერტთა ჩართულობაზე ადგილობრივი წარმოების პროცესში, რაც ტექნოლოგიებისა და, შედეგად, ადგილობრივ საწარმოთა ეფექტიანობის ზრდას განაპირობებს.<br><br>
		ვამაყობთ, რომ კაკლის ველი ერთ-ერთი პირველი კომპანიაა, რომელიც საქართველოს კაკლის ექსპორტიორ ქვეყნად გარდაქმნის პროცესში მონაწილეობს. გვჯერა, რომ ჩვენი კომპანიის როლი გადამწყვეტი იქნება ამ საქმეში.
		`,
		'banner.header.company': 'ჩვენი კომპანია',
		'our-history.vision.title': 'ხედვა',
		'our-history.vision.description': `
			საქართველო ახალი ქვეყანაა კაკლის მწარმოებელთა მსოფლიო რუკაზე. ჩვენ ვართ ერთ-ერთი პირველი კომპანია, რომელიც ჩვენს ქვეყანას და ქართულ კაკალს მსოფლიო ბაზარზე წარადგენს. ეს შესაძლებლობებთან ერთად დიდი გამოწვევა და პასუხისმგებლობაა.<br><br>
			ჩვენ მოწოდებული ვართ ვაწარმოოთ უმაღლესი ხარისხის პროდუქტი, ვიყოთ სანდო პარტნიორი საერთაშორისო ორგანიზაციებისთვის და შევქმნათ ეროვნული ბრენდი, რომელიც გზას გაუკვალავს მსოფლიო ბაზარზე როგორც მსხვილ ადგილობრივ მწარმოებლებს, ასევე მცირე და საშუალო ფერმერებს.<br><br>
			ჩვენ ყოველთვის თამამად უნდა შეგვეძლოს ვთქვათ - “სიამაყით საქართველოდან!” 
		`,
		'our-history.company.title': 'კომპანია',
		'our-history.company.description': `
			კაკლის ველი ქართული კაკლის მწარმოებელი კომპანიაა. კომპანიამ კაკლის ბაღები 2015 წელს, მცხეთის მუნიციპალიტეტში, სოფელ ძალისში, გააშენა. კაკლის ველის ბაღები გაშენებულია X ჰა ტერიტორიაზე და ყოველწლიურად XX ტონა კაკლის მოსავალს იძლევა. მოსავლიანობა პიკს 2025 წლისთვის მიაღწევს, რა დროისთვისაც ყოვეწლიური XX ტონამდე მოსავლის მიღება იგეგმება.<br><br>
			ბაღების გაშენებასა და დაგეგმარებაში კომპანიას კონსულტაციას ესპანეთიდან მოწვეული ექსპერტები უწევდნენ. ბაღები აღჭურვილია ირიგაციის თანამედროვე სისტემით. კაკლის ველის თანამედროვე სტანდარტების საწარმო კი, აღჭურვილია ყველა საჭირო ტექნოლოგიითა და საწარმო ხაზით, რომელიც მოსავლის გადამუშავებას - კაკლის გასუფთავებას, გაშრობას, სორტირებას - უზრუნველყოფს.<br><br>
			ამ ეტაპზე კაკლის ველი აწარმოებს უმაღლესი ხარისხის ჩენდლერის ჯიშის კაკალს ნაჭუჭით, რომელიც ძირითადად საექსპორტო ბაზრებზე რეალიზაციისთვისაა განკუთვნილი.
		`,
		'contact-us.header': 'დაგვიკავშირდით',
		'contact-us.label-name': 'სრული სახელი',
		'contact-us.label-phone': 'ტელეფონის ნომერი',
		'contact-us.label-email': 'ელ. ფოსტა',
		'contact-us.label-message': 'შეტყობინება',
		'contact-us.submit-button': 'გაგზავნა',
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
		'main.our-products': 'Our products',
		'main.our-products-description':
			'Walnut Valley specializes in producing Chandler walnuts, the most popular variety known for abundant yield, high-quality nuts, and exceptional taste.',
		'main.our-orchards': 'Our orchards',
		'main.our-orchards-description':
			'The story of Walnut Valley orchards began in 2015, nestled in the heart of the Mukhrani Valley within the Mtskheta municipality. Our orchards span a vast X hectares, strategically positioned to harness the optimal conditions for cultivating exceptional walnuts. As we look forward, the yield of our orchards is anticipated to reach its zenith by the year 2025.',
		'main.our-production': 'Our production',
		'main.our-production-description':
			'The production facility incorporates advanced technologies for cleaning, drying, and sorting walnuts.',
		'main.main-text-1': `
			Georgia, a global hazelnut powerhouse, ranks #5 in exports since 2012. With a substantial annual production of 46 thousand tons, the majority is destined for international markets, solidifying its position as a key player in the hazelnut industry.<br><br>
			Walnut cultivation in Georgia has deep roots, driven by its vital role in domestic cuisine. Historically abundant in family farms, a substantial portion of the production satisfied local consumption needs.
			`,
		'main.main-text-2':
			'Georgia initiated industrial walnut production in 2013, planting over 1000 ha of orchards in the period of 2013-2021. Annual walnut production exceeds 7,000 tons, reflecting a growing trend. Global walnut consumption surge presents additional export opportunities for Georgian producers.',
		'main.main-text-3': `
		<p>Favorable conditions for walnut production in Georgia are influenced by several factors, including:</p>
		<ul>
			<li>Abundant reserves of subterranean waters with unique quality.</li>
			<li>Fertile soil, particularly in the Mukhrani Valley and Kakheti region.</li>
			<li>Weather and climatic conditions characterized by a moderately subtropical climate with moderately hot summers and moderately cold winters.</li>
		</ul>
		`,
		'main.main-text-4': `
		Contrary to these challenges, world experts have evaluated walnuts produced in Georgia and found them to be on par with, if not superior to, those produced in leading countries such as Chile and the USA, especially concerning external parameters. When cultivated under optimal conditions, Georgia's climate and the exceptional quality of its water contribute to walnuts with a distinctive taste, unique sweetness, and notable whiteness.<br><br>
		The Georgian government actively supports walnut production's development, offering affordable credits and grants to local manufacturers. Access to international experts enhances technological advancements, boosting the efficiency of local enterprises.<br><br>
		Walnut Valley takes pride in being among the first companies contributing to Georgia's transformation into a walnut-exporting nation. The company believes its role is crucial and influential in this endeavor.
		`,
		'banner.header.company': 'Our Company',
		'our-history.vision.title': 'Vision',
		'our-history.vision.description': `
			Georgia is emerging as a new player on the global stage of walnut production, and our company is at the forefront, poised to introduce our country and its walnuts to the world market. This endeavor represents not only a significant challenge but also a tremendous responsibility coupled with abundant opportunities.<br><br>
			Our commitment is unwavering – we strive to deliver the highest quality walnut products, positioning ourselves as a trustworthy partner for international organizations. Beyond that, our vision extends to the creation of a national brand. This brand will not only serve as a navigator, forging a path into the global market, but also as a symbol of pride for both major local producers and small to medium-sized farmers.<br><br>
			Embracing this challenge, we aim to consistently declare, with unwavering confidence, "proudly Georgian!"
		`,
		'our-history.company.title': 'Company',
		'our-history.company.description': `
			Walnut Valley, a Georgian walnut producer, established orchards in 2015 in Dzalisi village, Mtskheta municipality. Spanning X hectares, the orchards yield XX tons annually, reaching a peak by 2025.<br><br>
			Walnut Valley's orchards, crafted with Spanish expertise, boast a modern irrigation system. The production facility incorporates advanced technologies for cleaning, drying, and sorting walnuts. Specializing in premium Chandler walnuts in shell, Walnut Valley primarily caters to export markets.<br><br>
			The exceptional quality of Walnut Valley's products and the abundant orchard yield result from the region's moderately humid subtropical climate. This, coupled with meticulous initial planning and consistent maintenance, contributes to our success.
		`,
		'contact-us.header': 'Contact us',
		'contact-us.label-name': 'Full name',
		'contact-us.label-phone': 'Phone',
		'contact-us.label-email': 'Email',
		'contact-us.label-message': 'Message',
		'contact-us.submit-button': 'Send',
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
		'main.our-products': 'Наши продукты',
		'main.our-products-description':
			'Walnut Valley производит грецкие орехи сорта Чендлер. Этот вид грецкого ореха является самым популярным сортом в мире. Он отличается обильной урожайностью, высоким качеством ореха и отличным, сладким вкусом.',
		'main.our-orchards': 'Наши сады',
		'main.our-orchards-description':
			'Сады Walnut Valley были посажены в 2015 году в селе Дзалиси муниципалитета Мцхета. Сады Ореховой долины засажены на территории Х га. Урожайность садов достигнет своего пика к 2025 году.',
		'main.our-production': 'Наше производство',
		'main.our-production-description':
			'Предприятие компании, которое соответствует всем современным стандартом ореховой отрасли, оснащено всеми необходимыми технологиями и производственными линиями, обеспечивающими обработку урожая – очистку, сушку и сортировку грецких орехов.',
		'main.main-text-1': `
			Мировая промышленность знает Грузию, как одного из крупнейших экспортеров фундука. С 2012 года производство фундука в Грузии значительно возросло, и она стала пятой по величине страной-экспортером в мире. Ежегодно Грузия производит 46 тысяч тонн фундука, основная часть которых идет на экспортные рынки.<br><br>
			Производство грецких орехов в Грузии имеет большую историю. Потребление грецких орехов на внутреннем рынке велико, поскольку грецкие орехи являются одним из наиболее важных и часто используемых ингредиентов грузинской кухни. Поэтому грецкие орехи в изобилии производились на семейных фермах в Грузии, и большая часть продукции использовалась для собственного потребления.
			`,
		'main.main-text-2':
			'Промышленное производство грецких орехов в Грузии началось в 2013 году. В 2013-2021 годах в Грузии было посажено более 1000 га новых ореховых садов. На данном этапе Грузия производит более 7000 тонн грецких орехов в год, и с каждым годом эта цифра увеличивается. В то же время увеличивается и мировое потребление грецких, что создает дополнительную экспортную возможность для грузинских производителей.',
		'main.main-text-3': `
		<p>Следующие факторы определяют благоприятные условия для производства грецкого ореха в Грузии:</p>
		<ul>
			<li>Большие запасы подводных вод уникального качества;</li>
			<li>Плодородная почва, особенно в Мухранской долине и регионе Кахети;</li>
			<li>Погодно-климатические условия – умеренно субтропический климат с умеренно жарким летом и умеренно холодной зимой.</li>
		</ul>
		`,
		'main.main-text-4': `
		По оценкам мировых экспертов, грецкие орехи, произведенные в Грузии, по внешним параметрам не уступают грецким орехам, произведенным в ведущих странах-производителях мира (Чили и США), а по вкусовым качествам даже превосходят их. Климат Грузии и уникальное качество воды при правильных условиях выращивания придают грецким орехам характерный вкус, особую сладость и белизну.<br><br>
		Государство также играет важную роль в развитии рынка производства грецкого ореха. В частности, местным производителям доступны недорогие кредиты и гранты, государство также привлекает международных экспертов в местный производственный процесс, что открывает доступ к технологиям и, как следствие, повышает эффективность местных предприятий.<br><br>
		Мы гордимся тем, что Walnut Valley является одной из первых компаний, которая принимает участие в процессе превращения Грузии в одной из важных стран-экспортера грецкого ореха в мире. Мы верим, что роль флагмана нашей компании будет значимой и ценной в этом процессе.
		`,
		'banner.header.company': 'Наша Компания',
		'our-history.vision.title': 'Видение',
		'our-history.vision.description': `
			Грузия – новая страна на карте мира производителей грецкого ореха. Мы одна из первых компаний, которая представит нашу страну и грузинские грецкие орехи на мировом рынке. Это несомненно открывает большие возможности для нашей компании, но, тем самым это огромная ответственность.<br><br>
			Мы стремимся производить продукцию высочайшего качества, быть надежным партнером для международных организаций и создать национальный бренд, который откроет путь на мировой рынок как крупным местным производителям, так и мелким и средним фермерам.<br><br>
			Мы всегда должны иметь возможность с полным основанием сказать – «С гордостью из Грузии!»
		`,
		'our-history.company.title': 'Компания',
		'our-history.company.description': `
			Walnut Valley — грузинская компания по производству грецкого ореха. В 2015 году компания посадила ореховые сады в селе Дзалиси Мцхетского муниципалитета. Сады Walnut Valley засажены на площади Х га и дают урожай в объеме XX тонн грецких орехов ежегодно. Своего пика урожайность достигнет к 2025 году, к этому времени планируется собирать до XX тонн ежегодно.<br><br>
			При посадке и планировке садов компанию консультировали специалисты из Испании. Сады имеют современную систему ирригации. Предприятие компании, которое соответствует всем современным стандартом ореховой отрасли, оснащено всеми необходимыми технологиями и производственными линиями, обеспечивающими обработку урожая – очистку, сушку и сортировку грецких орехов. Walnut Valley производит грецкие орехи Чандлер высочайшего качества, которые в основном предназначены для экспортных рынков.<br><br>
			Высочайшее качество продукции Walnut Valley и обильный урожай садов обусловлены как умеренно влажным субтропическим климатом региона, так и первоначальным точным и эффективным планированием садов и постоянным правильным уходом.
		`,
		'contact-us.header': 'Свяжитесь с нами',
		'contact-us.label-name': 'Полное имя',
		'contact-us.label-phone': 'Телефон',
		'contact-us.label-email': 'Эл. почта',
		'contact-us.label-message': 'Сообщение',
		'contact-us.submit-button': 'Отправить',
	},
};
