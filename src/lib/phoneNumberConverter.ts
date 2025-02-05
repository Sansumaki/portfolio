
function formatPhoneNumber(phoneNumberString: string):string {
	const cleaned = ('' + phoneNumberString).replace(/\D/g, '');
	const match = cleaned.match(/^(0{2}|\+)(\d{2})(\d{3})(\d{4})(\d{4})$/);
	if (match) {
		return "+" + match[2] + " " + match[3] + ' ' + match[4] + ' ' + match[5];
	}
	return phoneNumberString;
}

export { formatPhoneNumber };