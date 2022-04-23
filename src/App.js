import './App.css';
import { Crypt } from 'hybrid-crypto-js';
import Sender from './components/Sender';
import Receiver from './components/Receiver';
import { Routes, Route, HashRouter as Router } from "react-router-dom";

function App() {
	var forge = require('node-forge');
	var crypt = new Crypt();
	var pki = forge.pki;
	var rsa = forge.pki.rsa;
	var keypair = rsa.generateKeyPair({ bits: 4096, e: 0x10001 });
	var pubKeyPEM = pki.publicKeyToPem(keypair.publicKey);
	var privKeyPEM = pki.privateKeyToPem(keypair.privateKey);
	var encrypted = null;
	function encrypt() {
		let message = document.querySelector(".message").value;
		console.log(message);
		let x = document.querySelector(".public-key-data").value.replace(/\n/g, '');
		let xMod = x.slice(27);
		let xMod2 = xMod.slice(0, -25);
		x = '-----BEGIN PUBLIC KEY-----\n' + xMod2 + '-----END PUBLIC KEY-----\n';
		x = forge.pki.publicKeyFromPem(x);
		console.log(x);
		let e = crypt.encrypt(x, message);
		document.querySelector(".cipherText").innerHTML = JSON.stringify(e);
		document.querySelector('.cipher-text-output').classList.remove("hidden");
	}
	function decryption() {
		console.log("Hello decryption");
		let mod = document.querySelector(".textCipher-rec").value;
		let twice_json = JSON.parse(mod);
		let enc = JSON.parse(twice_json);
		console.log(enc);
		let encrypted = JSON.parse(mod);
		console.log("Parsed JSON");
		console.log(encrypted);
		let e = crypt.decrypt(privKeyPEM, JSON.stringify(enc));
		document.querySelector(".cipher-text-output-rec").classList.remove("hidden");
		document.querySelector(".cipherText-rec").innerHTML = e.message;
	}
	return (
		<div className="App">
			<Router>
				<Routes>
					<Route path="/" element={<Sender publicKey={pubKeyPEM} privateKey={privKeyPEM} cipher={encrypted} encrypt={encrypt} />} />
					<Route path="/r" element={<Receiver publicKey={pubKeyPEM} privateKey={privKeyPEM} cipher={encrypted} decrypt={decryption} />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
