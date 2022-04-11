import './App.css';
import { Crypt } from 'hybrid-crypto-js';
import Sender from './components/Sender';
import Receiver from './components/Receiver';

function App() {
	var forge = require('node-forge');
	var crypt = new Crypt();
	var pki = forge.pki;
	var rsa = forge.pki.rsa;
	var message = "";
	var keypair = rsa.generateKeyPair({ bits: 2048, e: 0x10001 });
	var pubKeyPEM = pki.publicKeyToPem(keypair.publicKey);
	var privKeyPEM = pki.privateKeyToPem(keypair.privateKey);
	var encrypted = null;
	var decrypt = null;
	function generateKeys() {
		if (document.querySelector(".message").value !== "") {
			message = document.querySelector(".message").value;
			encrypted = crypt.encrypt(pubKeyPEM, message);
			document.querySelector(".keys").innerHTML = JSON.stringify(JSON.parse(encrypted).keys).substring(0, 100);
			document.querySelector(".cipherText").innerHTML = JSON.parse(encrypted).cipher;
			document.querySelector('.cipher-text-output').classList.remove("hidden");
			document.querySelector(".cipherText-rec").innerHTML = JSON.parse(encrypted).cipher;
			document.querySelector('.cipher-text-output-rec').classList.remove("hidden");
			document.querySelector('.message-received').classList.remove("hidden");
			decrypt = crypt.decrypt(privKeyPEM, encrypted);
			message = decrypt.message;
			document.querySelector(".message-rec").innerHTML = message;
		}
	}
	function randomKeys() {
		keypair = rsa.generateKeyPair({ bits: 2048, e: 0x10001 });
		pubKeyPEM = pki.publicKeyToPem(keypair.publicKey);
		privKeyPEM = pki.privateKeyToPem(keypair.privateKey);
		document.querySelector(".public-key-data").innerHTML = pubKeyPEM.substring(0, 250);
		document.querySelector(".private-key-data").innerHTML = privKeyPEM.substring(0, 250);
	}
	return (
		<div className="App">
			{/* {JSON.parse(encrypted).cipher} */}
			<div className='flex w-screen'>
				<Sender publicKey={pubKeyPEM} privateKey={privKeyPEM} cipher={encrypted} generate={generateKeys} random={randomKeys} />
				<Receiver publicKey={pubKeyPEM} privateKey={privKeyPEM} cipher={encrypted} />
			</div>
		</div>
	);
}

export default App;
