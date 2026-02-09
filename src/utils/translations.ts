import { useSite } from '../stores/site';

export const useTranslation = () => {
	const store = useSite();

	const language = store.siteLanguage;

	type Translation =
		| keyof typeof languages.georgian
		| keyof typeof languages.english
		| keyof typeof languages.russian;

	const t = (langVar: Translation): string => {
		const languageArray = Object.entries(languages);
		const languageValues = languageArray.filter((item) => item[0] === language)[0][1];

		const translation = languageValues[langVar];

		return translation;
	};

	return { t };
};

const languages = {
	georgian: {
		'navbar.main': 'მთავარი',
		'navbar.company.about-us': 'ჩვენს შესახებ',
		'navbar.production': 'წარმოება',
		'navbar.our-orchards': 'ჩვენი ბაღები',
		'navbar.our-products': 'ჩვენი პროდუქცია',
		'navbar.contact-us': 'დაგვიკავშირდით',
		'footer.description':
			'მსოფლიო ინდუსტრია საქართველოს თხილის ერთ-ერთ უმსხვილეს ექსპორტიორ ქვეყნად იცნობს.',
		'main.our-orchards': 'ჩვენი ბაღები',
		'main.our-orchards-description':
			'Walnut Valley-ის ბაღები გაშენდა 2015 წელს, მცხეთის მუნიციპალიტეტში, სოფელ ძალისში. ჩვენი პლანტაციები მოიცავს 70 ჰექტარ ტერიტორიას. ბაღები სრულ მოსავლიანობის პიკს 2026 წლისთვის მიაღწევს.',
		'main.our-production': 'ჩვენი საწარმო',
		'main.our-production-description': `
			Walnut Valley-ის საწარმო აღჭურვილია თანამედროვე სტანდარტების ტექნოლოგიური ხაზებით, რომლებიც უზრუნველყოფს მოსავლის სრულ გადამუშავებას — კაკლის გასუფთავებას, გაშრობასა და სორტირებას.<br><br>
			კაკლის ინდუსტრიის განვითარებაში მნიშვნელოვან როლს ასრულებს სახელმწიფო მხარდაჭერა. ადგილობრივი მწარმოებლებისთვის ხელმისაწვდომია შეღავათიანი კრედიტები და გრანტები. ასევე უზრუნველყოფილია საერთაშორისო ექსპერტების ჩართულობა წარმოების პროცესში, რაც ხელს უწყობს თანამედროვე ტექნოლოგიების დანერგვას და წარმოების ეფექტიანობის ზრდას.
		`,
		'main.main-text-1': `
			საქართველოში კაკლის ინდუსტრიული წარმოება აქტიურად განვითარდა ბოლო ათწლეულის განმავლობაში. ტრადიციული საოჯახო ბაღების პარალელურად შეიქმნა ინტენსიური კომერციული პლანტაციები, სადაც გამოიყენება მაღალმოსავლიანი ჯიშები, სარწყავი სისტემები და თანამედროვე აგროტექნოლოგიები. სექტორის ზრდას მნიშვნელოვნად შეუწყო ხელი სახელმწიფო აგროპროგრამებმა და საინვესტიციო პროექტებმა.<br><br>
			წარმოება მოიცავს როგორც ნაჭუჭიანი კაკლის რეალიზაციას, ასევე ბირთვის გადამუშავებასა და შეფუთვას, რაც ზრდის საექსპორტო პოტენციალს.<br><br>
			ამ ეტაპზე საქართველო წელიწადში 7,000 ტონაზე მეტ კაკალს აწარმოებს და ეს მაჩვენებელი ყოველწლიურად იზრდება. პარალელურად იზრდება კაკლის გლობალური მოხმარებაც, რაც ქართველი მწარმოებლებისთვის ექსპორტის დამატებით შესაძლებლობებს ქმნის.
			`,
		'main.main-text-3': `
		<p>საქართველოში კაკლის წარმოებისთვის ხელსაყრელ პირობებს განაპირობებს:</p>
		<ul>
			<li>უნიკალური ხარისხის მიწისქვეშა წყლების მდიდარი რესურსი;</li>
			<li>ნაყოფიერი ნიადაგი, განსაკუთრებით მუხრანის ველსა და კახეთის რეგიონში;</li>
			<li>კლიმატი - ზომიერად სუბტროპიკული, ზომიერად ცხელი ზაფხულითა და ზომიერად ცივი ზამთრით.</li>
		</ul>
		`,
		'our-history.vision.title': 'ხედვა',
		'our-history.vision.description': `
			ჩვენი ხედვაა საქართველოში კაკლის წარმოების განვითარება თანამედროვე, მდგრად და მაღალეფექტიან ინდუსტრიად. ჩვენ ვქმნით მაღალი ხარისხის პროდუქტს საერთაშორისო სტანდარტების დაცვით, ვნერგავთ ინოვაციურ აგროტექნოლოგიებს, რითაც ვაძლიერებთ ქვეყნის საექსპორტო პოტენციალს.<br><br>
			ჩვენი მიზანია მომხმარებლისთვის სანდო, ეკოლოგიური და სტაბილური ხარისხის კაკლის პროდუქციის მიწოდება, ხოლო სექტორისთვის - გრძელვადიანი ღირებულების შექმნა.
		`,
		'our-history.company.title': 'კომპანია',
		'our-history.company.description': `
			<strong>Walnut Valley</strong> ქართული აგრო-საწარმოო კომპანიაა, რომელიც 2014 წლიდან მიზანმიმართულად მიზანმიმართულად მუშაობს საქართველოში კაკლის კულტურის განვითარებასა და თანამედროვე სტანდარტების დანერგვაზე. ჩვენი საქმიანობა მხოლოდ ბიზნესი არ არის - ეს არის წარმოების სრულ ციკლზე დაფუძნებული მიდგომა, სადაც ყოველი ეტაპი, ნერგის დარგვიდან საბოლოო პროდუქტამდე, მკაცრი ხარისხის კონტროლის ქვეშ მიმდინარეობს.<br><br>
			ჩვენი გზა დაიწყო სურვილით, საქართველოში შეგვექმნა ევროპული სტანდარტების კაკლის ბაღები. დღეს <span style="white-space: nowrap;">Walnut Valley-ის</span> საქმიანობა ეფუძნება სამ ძირითად პრინციპს:<br><br>
			<ul>
				<li>
					<strong>ინოვაციური აგროტექნოლოგიები - </strong> მორწყვისა და კვების (ფერტიგაციის) სრულად ავტომატიზებული სისტემები;
				</li>
				<li>
					<strong>მცენარეთა ინტეგრირებული დაცვა (IPM) - </strong> პასუხისმგებელი ზრუნვა და ჯანსაღი, სტაბილური მოსავალი;
				</li>
				<li>
					<strong>მონაცემებზე დაფუძნებული მართვა - </strong> თითოეული ხე ჩვენი მუდმივი ყურადღებისა და ანალიზის ობიექტია.
				</li>
			</ul><br>
			<strong>„ჩვენი გუნდი თავად მართავს ყოველდღიურ ოპერაციებს. გვჯერა, რომ მხოლოდ პირადი ჩართულობისა და საერთაშორისო გამოცდილების ადგილობრივ პირობებთან შერწყმით მიიღწევა უმაღლესი ხარისხი.”</strong><br><br>
		`,
		'contact-us.header-1': 'თანამშრომლობა',
		'contact-us.description': `
			ღია ვართ თანამშრომლობისთვის როგორც ადგილობრივ, ისე საერთაშორისო ბაზარზე - ვთანამშრომლობთ დისტრიბუტორებთან, საცალო ქსელებთან, გადამამუშავებელ კომპანიებთან და ჰორეკა სექტორთან.<br><br>
			მზად ვართ განვიხილოთ როგორც სტანდარტული, ისე ინდივიდუალურად მორგებული შეკვეთები.<br><br>
		`,
		'contact-us.header-2': `<strong>საკონტაქტო ინფორმაცია:</strong>`,
		'contact-us.label-name': 'სრული სახელი',
		'contact-us.label-phone': 'ტელეფონის ნომერი',
		'contact-us.label-email': 'ელ. ფოსტა',
		'contact-us.label-message': 'შეტყობინება',
		'contact-us.address': 'თბილისი, გ. ჭყონდიდელის ქ. N56',
		'contact-us.submit-button': 'გაგზავნა',
		'contact-us.form-validity-message': 'გთხოვთ შეავსოთ ველი',
		'contact-us.form-validity-message.email': 'გთხოვთ სწორედ შეიყვანოთ ელ. ფოსტა',
		'production.body-title-1': 'წარმოება და ტექნოლოგიური პროცესები',
		'production.body-text-1': `
			კომპანიამ ბაღების განვითარების პარალელურად დაიწყო კაკლის გადამუშავების მიმართულების ეტაპობრივი ჩამოყალიბება, რომლის მიზანი იყო წარმოებული ნედლეულის ხარისხის სრულყოფილი კონტროლი და დამატებითი ღირებულების შექმნა.<br><br>
			კაკლის გადამამუშავებელი ქარხანა მოეწყო 2020 წელს, საერთაშორისო და სახელმწიფო მხარდაჭერის პროგრამების თანადგომით, ასევე კომპანიის მრავალწლიანი პრაქტიკული გამოცდილების საფუძველზე.<br><br>
			<strong>USAID-ისა</strong> და <strong>სოფლის განვითარების სააგენტოს (RDA)</strong> მხარდაჭერით შექმნილი კაკლის გადამამუშავებელი მაღალტექნოლოგიური საწარმო  საშუალებას გვაძლევს, ნედლეული იდეალურ პირობებში დავამუშაოთ და შევინარჩუნოთ მისი კვებითი ღირებულება.<br><br>
			რას ვთავაზობთ მომხმარებელს და პარტნიორებს?
			<ol>
				<li>
					<strong>სრული ციკლი:</strong> მიღება, პირველადი კონტროლი და გაშრობა.
				</li>
				<li>
					<strong>ხარისხის სორტირება:</strong> კაკლის დახარისხება ზომისა და ფერის მიხედვით.
				</li>
				<li>
					<strong>მომსახურება ფერმერებისთვის:</strong> ჩვენს ქარხანას შეუძლია სეზონურად <strong>500 ტონამდე</strong> კაკლის გადამუშავება, რითაც ხელს ვუწყობთ ადგილობრივი ფერმერების განვითარებას.
				</li>
			</ol>
		`,
		'production.body-title-2': 'საწარმოო პროცესი',
		'production.body-text-2': `
			მოსავლის აღება მიმდინარეობს გვიან შემოდგომაზე, რის პარალელურად იწყება მისი საწარმოო გადამუშავება. კაკალს სპეციალური დანადგარის საშუალებით სცილდება გარე მწვანე ქერქი (ჩენჩო), შემდეგ კი პროდუქტი გადის კონტროლირებად გაშრობა-დეჰიდრატაციის პროცესს, სადაც ტენიანობა დაჰყავთ ოპტიმალურ — დაახლოებით 8%-იან ნიშნულამდე.<br><br>
			გაშრობის შემდეგ კაკალი გადადის ავტომატურ კალიბრაციასა და სორტირებაზე. შერჩეული და დახარისხებული პროდუქტი იფუთება ბადის ტომრებში და მზად არის ტრანსპორტირებისთვის.<br><br>
			კაკლის გულის წარმოების შემთხვევაში გატეხვა და გადარჩევა ხორციელდება როგორც ავტომატური ხაზის, ასევე ხელით სელექციის გზით, ხარისხის დამატებითი კონტროლის უზრუნველსაყოფად. მზა ბირთვი იფუთება სპეციალურ პოლიეთილენის შეფუთვაში.<br><br>
			წარმოების სრული ციკლის განმავლობაში მკაცრად არის დაცული სურსათის უვნებლობის სტანდარტები. კვალიფიციური პერსონალი უზრუნველყოფს შემომავალი და გამავალი პროდუქციის უწყვეტ მონიტორინგსა და აღრიცხვას. საწარმოო და სასაწყობე სივრცეებში დაცულია ჰიგიენური ნორმები და შესაბამისი ტემპერატურული რეჟიმი, რაც გვაძლევს შესაძლებლობას მომხმარებელს შევთავაზოთ სტაბილურად მაღალი ხარისხის და უსაფრთხო პროდუქტი.
		`,
		'our-orchards.body-title': 'ჩვენი ბაღები',
		'our-orchards.body-text-1': `
			ჩვენი ბაღები 2015 წელს, მცხეთის მუნიციპალიტეტში, სოფელ ძალისში გაშენდა. ჩვენი არჩევანი შეჩერდა <strong>Chandler-ის</strong> ჯიშზე, რომელიც მთელ მსოფლიოში ცნობილია თავისი ღია ფერის გულით, თხელი ნაჭუჭითა და საუკეთესო გემოვნური თვისებებით. ბაღები 70 ჰა ტერიტორიას მოიცავს.<br><br>
			სოფელი ძალისი მუხრანის ველზე მდებარეობს, სადაც საქართველოში საუკეთესო პირობებია კაკლის მოსაყვანად. ზომიერად სუბტროპიკული ჰავა, მზის და წყლის სიუხვე და მიწისქვეშა წყლების უნიკალური ხარისხი, საშუალებას გვაძლევს ვაწარმოოთ უმაღლესი ხარისხისა და საუკეთესო გემოვნური თვისებების მქონე პროდუქტი.<br><br>
			ბაღების მოსავლიანობა თავის პიკს 2026 წლისთვის მიაღწევს.
		`,
		'our-orchards.harvest.title': 'მოსავლიანობის დინამიკა',
		'our-orchards.harvest.subtitle':
			'ჩვენი ბაღების პროდუქტიულობა ყოველწლიურად იზრდება, რაც სწორი მოვლისა და მონიტორინგის შედეგია:',
		'our-orchards.harvest.table': `
			<table style="margin-top: 2.4rem; border-collapse: collapse; border: 1px solid #ddd;">
			<thead>
				<tr>
				<th style="border: 1px solid #ddd; padding: 8px;">წელი</th>
				<th style="border: 1px solid #ddd; padding: 8px;">მოსავალი (ტონა/ჰექტარზე)</th>
				<th style="border: 1px solid #ddd; padding: 8px;">სტატუსი</th>
				</tr>
			</thead>
			<tbody>
				<tr>
				<td style="border: 1px solid #ddd; padding: 8px;">2023</td>
				<td style="border: 1px solid #ddd; padding: 8px;">2.5 ტ/ჰა</td>
				<td style="border: 1px solid #ddd; padding: 8px;">რეალური</td>
				</tr>
				<tr>
				<td style="border: 1px solid #ddd; padding: 8px;">2024</td>
				<td style="border: 1px solid #ddd; padding: 8px;">3.0 ტ/ჰა</td>
				<td style="border: 1px solid #ddd; padding: 8px;">რეალური</td>
				</tr>
				<tr>
				<td style="border: 1px solid #ddd; padding: 8px;">2025</td>
				<td style="border: 1px solid #ddd; padding: 8px;">3.5 ტ/ჰა</td>
				<td style="border: 1px solid #ddd; padding: 8px;">რეალური</td>
				</tr>
				<tr>
				<td style="border: 1px solid #ddd; padding: 8px;"><strong>2026</strong></td>
				<td style="border: 1px solid #ddd; padding: 8px;"><strong>4.0 ტ/ჰა</strong></td>
				<td style="border: 1px solid #ddd; padding: 8px;"><strong>პროგნოზი</strong></td>
				</tr>
			</tbody>
			</table>
		`,
		'our-products.title': 'ჩვენი პროდუქცია',
		'our-products.description': `
			ჩვენი პროდუქცია შექმნილია მომხმარებლისთვის, რომელიც არჩევანს აკეთებს ნატურალურ, ჯანსაღ და სანდო ხარისხის საკვებზე. წარმოების თითოეულ ეტაპზე ვიცავთ მკაცრ სტანდარტებს, რათა საბოლოო პროდუქტი იყოს ერთგვაროვანი, სუფთა და სტაბილური ხარისხის.<br><br>
			<strong>ინდივიდუალური მიდგომა პარტნიორებისთვის - </strong> ვთავაზობთ მოქნილ თანამშრომლობას და პროდუქციის მომზადებას კონკრეტული მოთხოვნების მიხედვით: კალიბრი, სორტირება, შეფუთვის ტიპი, ეტიკეტირება და მოცულობა - თქვენი ბაზრისა და ბრენდის საჭიროებებზე მორგებით.
		`,
		'our-products.product-1.title': 'ნაჭუჭიანი კაკალი (In-shell)',
		'our-products.product-1.description':
			'კალიბრირებული, გარეცხილი და ოპტიმალურად გამშრალი. გამოირჩევა ერთგვაროვანი ზომითა და სისუფთავით. იდეალურია როგორც საცალო რეალიზაციისთვის, ისე ხანგრძლივი შენახვისა და ტრანსპორტირებისთვის.',
		'our-products.product-2.title': 'კაკლის გული (ნიგოზი)',
		'our-products.product-2.description':
			'უმაღლესი ხარისხის ნახევრები (LHP) და სხვადასხვა ზომის ნაჭრები, შერჩეული და გადარჩევილი ხარისხის კონტროლის რამდენიმე ეტაპის გავლის შემდეგ. შეფუთვა ხორციელდება საერთაშორისო სურსათის უსაფრთხოების მოთხოვნების შესაბამისად.',
	},
	english: {
		'navbar.main': 'Home',
		'navbar.company.about-us': 'About us',
		'navbar.production': 'Production',
		'navbar.our-orchards': 'Our orchards',
		'navbar.our-products': 'Our product',
		'navbar.contact-us': 'Contact us',
		'footer.description': 'Georgia, a global hazelnut powerhouse, ranks #5 in exports since 2012.',
		'main.our-orchards': 'Our orchards',
		'main.our-orchards-description':
			'Walnut Valley orchards were established in 2015 in the village of Dzalisi, Mtskheta Municipality. Our plantations cover 70 hectares. The orchards are expected to reach peak productivity by 2026.',
		'main.our-production': 'Our production',
		'main.our-production-description': `
			The Walnut Valley processing facility is equipped with modern standard production lines and technologies to ensure full post-harvest handling, including walnut cleaning, drying, and sorting.<br><br>
			The government plays an important role in the development of the walnut industry. Local producers have access to preferential loans and grants. The sector is also supported by the involvement of international experts in local production processes, which promotes the adoption of modern technologies and improves overall efficiency.
		`,
		'main.main-text-1': `
			Industrial walnut production in Georgia has developed rapidly over the past decade. Alongside traditional family orchards, intensive commercial plantations have been established using high-yield varieties, irrigation systems, and modern agricultural technologies. State agricultural programs and investment projects have strongly supported sector growth.<br><br>
			Production includes both in-shell walnut sales and kernel processing and packaging, increasing export potential.<br><br>
			At present, Georgia produces more than 7,000 tons of walnuts per year, and this figure continues to grow annually. At the same time, global walnut consumption is rising, creating additional export opportunities for Georgian producers.
			`,
		'main.main-text-3': `
		<p>Favorable conditions for walnut production in Georgia are driven by:</p>
		<ul>
			<li>Large reserves of high-quality underground water resources;</li>
			<li>Fertile soils, especially in the Mukhrani Valley and the Kakheti region;</li>
			<li>A moderately subtropical climate with warm summers and moderately cold winters.</li>
		</ul>
		`,
		'our-history.vision.title': 'Vision',
		'our-history.vision.description': `
			Our vision is to develop walnut production in Georgia into a modern, sustainable, and high-efficiency industry. We produce high-quality products in full compliance with international standards and implement innovative agrotechnology to strengthen the country’s export potential.<br><br>
			Our goal is to deliver reliable, environmentally responsible, and consistently high-quality walnut products to customers, while creating long-term value for the sector.
		`,
		'our-history.company.title': 'Company',
		'our-history.company.description': `
			<strong>Walnut Valley</strong> is a Georgian agro-industrial company that has been purposefully working since 2014 to develop walnut cultivation in Georgia and introduce modern production standards. Our activity is more than a business - it is a full-cycle production approach where every stage, from planting saplings to the final product, is carried out under strict quality control.<br><br>
			Our journey began with the ambition to establish European-standard walnut orchards in Georgia. Today, Walnut Valley operates based on three core principles:<br><br>
			<ul>
				<li>
					<strong>Innovative agrotechnology - </strong> fully automated irrigation and fertigation systems;
				</li>
				<li>
					<strong>Integrated Plant Protection (IPM) - </strong> responsible crop care and healthy, stable yields;
				</li>
				<li>
					<strong>Data-driven management - </strong> every tree is continuously monitored and analysed.
				</li>
			</ul><br>
			<strong>“Our team directly manages daily operations. We believe that top quality is achieved only through personal involvement and by combining international experience with local conditions.”</strong><br><br>
		`,
		'contact-us.header-1': 'Cooperation',
		'contact-us.description':
			'We are open to cooperation in both local and international markets. We work with distributors, retail chains, processing companies, and the HoReCa sector, and are ready to consider both standard and customised orders.',
		'contact-us.header-2': 'Contact Information',
		'contact-us.label-name': 'Full name',
		'contact-us.label-phone': 'Phone',
		'contact-us.label-email': 'Email',
		'contact-us.label-message': 'Message',
		'contact-us.address': '56 Giorgi Chkondideli St., Tbilisi, Georgia',
		'contact-us.submit-button': 'Send',
		'contact-us.form-validity-message': 'Please fill in the field',
		'contact-us.form-validity-message.email': 'Please fill correct email',
		'production.body-title-1': 'Production and Technological Processes',
		'production.body-text-1': `
			Along with orchard development, the company gradually established its walnut processing direction to ensure full quality control of raw materials and create added value.<br><br>
			The walnut processing facility was established in 2020 with the support of international and state programs and based on the company’s many years of practical experience.<br><br>
			With the support of <strong>USAID</strong> and the <strong>Rural Development Agency (RDA)</strong>, a high-tech walnut processing plant was created, allowing us to process raw materials under ideal conditions and preserve their nutritional value.<br><br>
			What do we offer customers and partners?
			<ol>
				<li>
					<strong>Full cycle services:</strong> intake, primary inspection, and drying.
				</li>
				<li>
					<strong>Quality sorting:</strong> grading by size and color.
				</li>
				<li>
					<strong>Farmer services:</strong> the facility can process up to 500 tons of walnuts per season, supporting local farm development.
				</li>
			</ol>
		`,
		'production.body-title-2': 'Processing Flow',
		'production.body-text-2': `
			Harvest takes place in late autumn, followed immediately by post-harvest processing. The green outer husk is removed using specialized equipment, after which walnuts undergo controlled drying and dehydration, reducing moisture to an optimal level of about 8%.<br><br>
			After drying, walnuts pass through automatic calibration and sorting. The selected product is packed in mesh bags and prepared for transportation.<br><br>
			For walnut kernel production, cracking and selection are performed through both automated lines and manual sorting to ensure additional quality control. Final kernels are packed in protective polyethylene packaging.<br><br>
			Throughout the entire production cycle, strict food safety standards are maintained. Qualified staff conduct continuous monitoring and documentation of incoming and outgoing products. Production and storage areas follow strict hygiene rules and controlled temperature conditions, ensuring consistently high-quality and safe products.
		`,
		'our-orchards.body-title': 'Our Orchards',
		'our-orchards.body-text-1': `
			Our orchards were established in 2015 in the village of Dzalisi, Mtskheta Municipality. We selected the Chandler variety, which is globally recognized for its light-colored kernel, thin shell, and excellent taste qualities. The orchards cover 70 hectares.<br><br>
			Dzalisi is located in the Mukhrani Valley, one of the best areas in Georgia for walnut cultivation. A moderately subtropical climate, abundant sunlight and water resources, and unique underground water quality enable us to produce walnuts with superior quality and flavor.<br><br>
			The orchards are expected to reach peak productivity by 2026.
		`,
		'our-orchards.harvest.title': 'Yield Dynamics',
		'our-orchards.harvest.subtitle':
			'Our orchard productivity increases every year as a result of proper management and continuous monitoring:',
		'our-orchards.harvest.table': `
			<table style="margin-top: 2.4rem; border-collapse: collapse; border: 1px solid #ddd;">
			<thead>
				<tr>
				<th style="border: 1px solid #ddd; padding: 8px;">Year</th>
				<th style="border: 1px solid #ddd; padding: 8px;">Yield (tons/hectare)</th>
				<th style="border: 1px solid #ddd; padding: 8px;">Status</th>
				</tr>
			</thead>
			<tbody>
				<tr>
				<td style="border: 1px solid #ddd; padding: 8px;">2023</td>
				<td style="border: 1px solid #ddd; padding: 8px;">2.5 t/ha</td>
				<td style="border: 1px solid #ddd; padding: 8px;">Actual</td>
				</tr>
				<tr>
				<td style="border: 1px solid #ddd; padding: 8px;">2024</td>
				<td style="border: 1px solid #ddd; padding: 8px;">3.0 t/ha</td>
				<td style="border: 1px solid #ddd; padding: 8px;">Actual</td>
				</tr>
				<tr>
				<td style="border: 1px solid #ddd; padding: 8px;">2025</td>
				<td style="border: 1px solid #ddd; padding: 8px;">3.5 t/ha</td>
				<td style="border: 1px solid #ddd; padding: 8px;">Actual</td>
				</tr>
				<tr>
				<td style="border: 1px solid #ddd; padding: 8px;"><strong>2026</strong></td>
				<td style="border: 1px solid #ddd; padding: 8px;"><strong>4.0 t/ha</strong></td>
				<td style="border: 1px solid #ddd; padding: 8px;"><strong>Forecast</strong></td>
				</tr>
			</tbody>
			</table>
		`,
		'our-products.title': 'Our Products',
		'our-products.description': `
			Our products are created for customers who value natural, healthy, and reliable food. We follow strict standards at every stage of production to ensure uniform, clean, and consistent quality.<br><br>
			<strong>Individual approach for partners - </strong> We offer flexible cooperation and product preparation according to specific requirements: size grading, sorting, packaging type, labelling, and volume tailored to your market and brand needs.
		`,
		'our-products.product-1.title': 'In-shell walnuts',
		'our-products.product-1.description':
			'Calibrated, washed, and optimally dried. Uniform in size and cleanliness. Ideal for retail, long-term storage, and transportation.',
		'our-products.product-2.title': 'Walnut kernels',
		'our-products.product-2.description':
			'Premium light halves (LHP) and pieces of various sizes, selected through multiple quality control stages. Packed in compliance with international food safety standards.',
	},
	russian: {
		'navbar.main': 'Главная',
		'navbar.company.about-us': 'О нас',
		'navbar.production': 'Производство',
		'navbar.our-orchards': 'Наши сады',
		'navbar.our-products': 'Наш продукт',
		'navbar.contact-us': 'Контактная информация',
		'footer.description':
			'Мировая промышленность знает Грузию, как одного из крупнейших экспортеров фундука.',
		'main.our-orchards': 'Наши сады',
		'main.our-orchards-description':
			'Сады Walnut Valley были посажены в 2015 году в селе Дзалиси муниципалитета Мцхета. Сады Ореховой долины засажены на территории Х га. Урожайность садов достигнет своего пика к 2025 году.',
		'main.our-production': 'Наше производство',
		'main.our-production-description':
			'Предприятие компании, которое соответствует всем современным стандартом ореховой отрасли, оснащено всеми необходимыми технологиями и производственными линиями, обеспечивающими обработку урожая – очистку, сушку и сортировку грецких орехов.',
		'main.main-text-1': `
			Мировая промышленность знает Грузию, как одного из крупнейших экспортеров фундука. С 2012 года производство фундука в Грузии значительно возросло, и она стала пятой по величине страной-экспортером в мире. Ежегодно Грузия производит 46 тысяч тонн фундука, основная часть которых идет на экспортные рынки.<br><br>
			Производство грецких орехов в Грузии имеет большую историю. Потребление грецких орехов на внутреннем рынке велико, поскольку грецкие орехи являются одним из наиболее важных и часто используемых ингредиентов грузинской кухни. Поэтому грецкие орехи в изобилии производились на семейных фермах в Грузии, и большая часть продукции использовалась для собственного потребления.<br><br>
			Промышленное производство грецких орехов в Грузии началось в 2013 году. В 2013-2021 годах в Грузии было посажено более 1000 га новых ореховых садов. На данном этапе Грузия производит более 7000 тонн грецких орехов в год, и с каждым годом эта цифра увеличивается. В то же время увеличивается и мировое потребление грецких, что создает дополнительную экспортную возможность для грузинских производителей.
			`,
		'main.main-text-3': `
		<p>Следующие факторы определяют благоприятные условия для производства грецкого ореха в Грузии:</p>
		<ul>
			<li>Большие запасы подводных вод уникального качества;</li>
			<li>Плодородная почва, особенно в Мухранской долине и регионе Кахети;</li>
			<li>Погодно-климатические условия – умеренно субтропический климат с умеренно жарким летом и умеренно холодной зимой.</li>
		</ul>
		`,
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
		'contact-us.header-1': 'Свяжитесь с нами',
		'contact-us.description': '',
		'contact-us.label-name': 'Полное имя',
		'contact-us.label-phone': 'Телефон',
		'contact-us.label-email': 'Эл. почта',
		'contact-us.label-message': 'Сообщение',
		'contact-us.address': '56 Giorgi Chkondideli St., Tbilisi, Georgia',
		'contact-us.submit-button': 'Отправить',
		'contact-us.form-validity-message': 'Пожалуйста, заполните поле',
		'contact-us.form-validity-message.email':
			'Пожалуйста, заполните правильный адрес электронной почты',
		'production.body-title-1': 'Производство',
		'production.body-text-1':
			'Урожай в Walnut Valley собирают раз в год, поздней осенью. После сбора с грецких орехов с помощью специальной машины снимается внешняя зеленая кожица, после чего грецкие орехи сушат и обезвоживают, поддерживая оптимальную влажность 8%. После сушки грецкие орехи проходят автоматический процесс калибровки и сортировки, после чего орехи упаковываются в сетчатые мешки и готовы к транспортировке.',
		'our-orchards.body-title': 'Производство',
		'our-orchards.body-text-1':
			'Сады Walnut Valley были посажены в 2015 году в селе Дзалиси муниципалитета Мцхета. Сады Ореховой долины засажены на территории Х га. Урожайность садов достигнет своего пика к 2025 году.',
		'our-orchards.harvest.title': '',
		'our-orchards.harvest.subtitle': '',
		'our-orchards.harvest.table': `
			<table style="margin-top: 2.4rem; border-collapse: collapse; border: 1px solid #ddd;">
			<thead>
				<tr>
				<th style="border: 1px solid #ddd; padding: 8px;">წელი</th>
				<th style="border: 1px solid #ddd; padding: 8px;">მოსავალი (ტონა/ჰექტარზე)</th>
				<th style="border: 1px solid #ddd; padding: 8px;">სტატუსი</th>
				</tr>
			</thead>
			<tbody>
				<tr>
				<td style="border: 1px solid #ddd; padding: 8px;">2023</td>
				<td style="border: 1px solid #ddd; padding: 8px;">2.5 ტ/ჰა</td>
				<td style="border: 1px solid #ddd; padding: 8px;">რეალური</td>
				</tr>
				<tr>
				<td style="border: 1px solid #ddd; padding: 8px;">2024</td>
				<td style="border: 1px solid #ddd; padding: 8px;">3.0 ტ/ჰა</td>
				<td style="border: 1px solid #ddd; padding: 8px;">რეალური</td>
				</tr>
				<tr>
				<td style="border: 1px solid #ddd; padding: 8px;">2025</td>
				<td style="border: 1px solid #ddd; padding: 8px;">3.5 ტ/ჰა</td>
				<td style="border: 1px solid #ddd; padding: 8px;">რეალური</td>
				</tr>
				<tr>
				<td style="border: 1px solid #ddd; padding: 8px;"><strong>2026</strong></td>
				<td style="border: 1px solid #ddd; padding: 8px;"><strong>4.0 ტ/ჰა</strong></td>
				<td style="border: 1px solid #ddd; padding: 8px;"><strong>პროგნოზი</strong></td>
				</tr>
			</tbody>
			</table>
		`,
		'our-products.title': '',
		'our-products.description': '',
		'our-products.product-1.title': '',
		'our-products.product-1.description': '',
		'our-products.product-2.title': '',
		'our-products.product-2.description': '',
	},
};
