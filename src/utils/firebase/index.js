import firebase from "firebase";
import * as firebaseui from "firebaseui";

const firebaseConfig = {
    apiKey: "AIzaSyC0eeeuQrVsxuULBhhrqd-VHza_jDCadhw",
    authDomain: "an-gi-hom-nay-48.firebaseapp.com",
    projectId: "an-gi-hom-nay-48",
    storageBucket: "an-gi-hom-nay-48.appspot.com",
    messagingSenderId: "1099285239026",
    appId: "1:1099285239026:web:b94dd71d44cb4714efec6b",
    measurementId: "G-V2PK0S5HZ9",
};
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const authUI = new firebaseui.auth.AuthUI(auth);
export const storage = firebase.storage();

export const uploadCloudStorage = async (file) => {
    const storageRef = storage.ref();
    const fileRef = storageRef.child(`public_media/${file.name}`);
    const uploadTask = fileRef.put(file);
    return new Promise((res, rej) => {
        uploadTask.on(
            "state_changed",
            (snapshot) => {},
            (error) => rej(error),
            () => {
                uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
                    res(downloadURL);
                });
            }
        );
    });
};

export default firebase;
