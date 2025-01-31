// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "git-whisper.firebaseapp.com",
  projectId: "git-whisper",
  storageBucket: "git-whisper.firebasestorage.app",
  messagingSenderId: "256520258198",
  appId: "1:256520258198:web:8e1e8f40a15071b9ccf8b7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);

export async function uploadFile(
  file: File,
  setProgress: (progress: number) => void,
) {
  return new Promise((resolve, reject) => {
    try {
      resolve("https://assembly.ai/sports_injuries.mp3");
      // const storageRef = ref(storage, file.name);
      // const uploadTask = uploadBytesResumable(storageRef, file);
      // uploadTask.on("state_changed", (snapshot) => {
      //   const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
      //   if(setProgress) setProgress(progress);
      //   switch(snapshot.state) {
      //     case "paused":
      //       console.log("Upload is paused");
      //       break;
      //     case "running":
      //       console.log("Upload is running");
      //       break;
      //   }
      // }, (error) => {
      //   console.error(error);
      //   reject(error);
      // }, () => {
      //   getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
      //     // resolve(downloadURL as string);
      //   });
      // });
    } catch (e) {
      console.error(e);
      reject(e);
    }
  });
}
