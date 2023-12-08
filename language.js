const languageCodes = {
	'jp':		'japanese',
	'en-ca':	'english ca',
};

let selectedLanguage = { from: 'en-ca', to: 'jp' };

function switchLanguage(side, code)
{
	if (side != 'to' && side != 'from')
		return console.error('Invalid side.');

	if (!Object.keys(languageCodes).includes(code))
		return console.error('Invalid code.');

	const to_lang_img 	= document.querySelector('#to-lang-img');
	const from_lang_img	= document.querySelector('#from-lang-img');

	const to_lang_name		= document.querySelector('#to-lang-name');
	const from_lang_name	= document.querySelector('#from-lang-name');

	const to_menu	= document.querySelector('#to-menu');
	const from_menu	= document.querySelector('#from-menu');

	if (side == 'from')
	{
		from_lang_img.setAttribute('alt', languageCodes[code]);
		from_lang_img.setAttribute('src', `flag.${code}.svg`);
		from_lang_name.textContent	= languageCodes[code].toUpperCase();
		from_menu.innerHTML			= '';

		// update dropdown

		Object.keys(languageCodes).forEach(languageCode => {
			if (code == languageCode) return;

			from_menu.innerHTML += `
				<div onclick="switchLanguage('from', '${languageCode}')">
					<img alt="${languageCodes[languageCode]}" src="flag.${languageCode}.svg">
					${languageCodes[languageCode].toUpperCase()}
				</div>
			`;
		});

		selectedLanguage.from = code;
	}
	else {
		to_lang_img.setAttribute('alt', languageCodes[code]);
		to_lang_img.setAttribute('src', `flag.${code}.svg`);
		to_lang_name.textContent	= languageCodes[code].toUpperCase();
		to_menu.innerHTML			= '';

		// update dropdown

		Object.keys(languageCodes).forEach(languageCode => {
			if (code == languageCode) return;

			to_menu.innerHTML += `
				<div onclick="switchLanguage('to', '${languageCode}')">
					<img alt="${languageCodes[languageCode]}" src="flag.${languageCode}.svg">
					${languageCodes[languageCode].toUpperCase()}
				</div>
			`;
		});

		selectedLanguage.to = code;
	}

	closeMenus();
}

switchLanguage('from', 'en-ca');
switchLanguage('to', 'jp');
