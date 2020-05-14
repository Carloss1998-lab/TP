import firebase from 'firebase'
import { toast } from './Toast'

export const configuration = {
    //---

    apiKey: "AIzaSyB1qVxaCQMOMSG6xuFEXIWKt5_v6i37LN4",
    authDomain: "ystats-18854.firebaseapp.com",
    databaseURL: "https://ystats-18854.firebaseio.com",
    projectId: "ystats-18854",
    storageBucket: "ystats-18854.appspot.com",
    messagingSenderId: "385812311892",
    appId: "1:385812311892:web:d508372e3b5bb2b0c1a2c1",
    measurementId: "G-KFXBMT8B7Y"

}
firebase.initializeApp(configuration)

export async function loginUser(username: string, password: string) {
    const email = username
    try {
        const res = await firebase.auth().signInWithEmailAndPassword(email, password)
        console.log(res)
        return true
    } catch (error) {

        toast(error.message, 4000)
        return false
    }

    // authenticate with firebase
}

export async function registerUser(username: string, password: string) {
    const email = username

    try {
        const res = await firebase.auth().createUserWithEmailAndPassword(email, password)
        console.log(res)
        return true
    } catch (error) {
        toast(error.message, 4000)

        return false
    }

    // autheb=nticate with firebase
}
export async function VerificationEmail() {
    const res = firebase.auth().currentUser?.sendEmailVerification().then(function () {

        toast("Un message de vérification vous a été envoyé", 6000)
    }).catch(function (error) {
        toast(error.message, 4000)
    });
}


export async function updateUser(email: string) {
    try {
        const res = await firebase.auth().sendPasswordResetEmail(email)
        console.log(res)
        return true

    } catch (error) {
        toast(error.message, 4000)

        return false
    }

    // autheb=nticate with firebase
};