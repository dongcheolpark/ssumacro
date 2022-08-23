import fetch from 'node-fetch'


(async () => {
	let res = await fetch('https://smartid.ssu.ac.kr/Symtra_sso/smln_pcs.asp',{
	method : 'POST',
	headers : {
		'content-type': 'application/x-www-form-urlencoded'
	},
	body : 'in_tp_bit=0&rqst_caus_cd=03&userid=20211415&pwd=tr2042255%25'	
	})

	const sTokenRegExp = /sToken=.*?;/
	let sToken = res.headers.get('set-cookie')?.match(sTokenRegExp)![0];
	sToken = sToken?.substring(0,sToken.length-1);

	let url = `https://class.ssu.ac.kr/xn-sso/gw-cb.php?${sToken}&sIdno=20211415`;
	res = await fetch(url);
	const data = await res.text();

	url = data.match(/(https:\/\/canvas.*("))/)![0];
	url = url?.substring(0,url.length-1);

	res = await fetch(url,{
	});

	const cookies = res.headers.raw()['set-cookie'];
	const cookie = cookies.map((entry) => {
		const parts = entry.split(';');
    const cookiePart = parts[0];
    return cookiePart;
	}).join(';');

	res = await fetch('https://canvas.ssu.ac.kr/learningx/dashboard?user_login=20211415&locale=ko',{
		headers : {
			'cookie' : cookie
		}
	})
	let apiKey = (res.headers.raw()['set-cookie'][0]).match(/=.*?;/)![0];
	apiKey = apiKey.substring(1,apiKey.length-1);
	console.log(apiKey);
})(); 
