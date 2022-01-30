import { db } from '$lib/firebase/client';
import { collection, onSnapshot } from 'firebase/firestore';


const getRTDocs = (c) => {
	let docs = null;
	let collectionRef = collection(db, c);
	
	const unsub = onSnapshot(collectionRef, (snapshot) => {
		let tempDocs = [];
		snapshot.docs.forEach((doc) => {
			tempDocs.push(doc.data());
		});
		docs = tempDocs;
		console.log('docs | unsub', docs);
		
		return () => unsub();
	});
	console.log('docs1 | getRTDocs', docs);
	return { docs };
};

export default getRTDocs;
