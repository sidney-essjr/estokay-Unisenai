import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  sendEmailVerification,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  updatePassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../../firebase/firebase";

export const doCreateUserWithEmailAndPassword = async (
  name: string,
  email: string,
  password: string
) => {
  updateProfile(
    (await createUserWithEmailAndPassword(auth, email, password)).user,
    { displayName: name }
  ).catch((error) => {
    throw new Error(error);
  });
};

export const doSignInWithEmailAndPassword = (
  email: string,
  password: string
) => {
  return signInWithEmailAndPassword(auth, email, password);
};

export const doSignInWithGoogle = async () => {
  const provider = new GoogleAuthProvider();
  const result = await signInWithPopup(auth, provider);
  result.user;
  return result;
};

export const doSignOut = () => {
  return auth.signOut();
};

export const doPasswordReset = (email: string) => {
  return sendPasswordResetEmail(auth, email);
};

export const doPasswordChange = (password: string) => {
  if (auth.currentUser) return updatePassword(auth.currentUser, password);
};

export const doSendEmailVerification = () => {
  if (auth.currentUser) {
    return sendEmailVerification(auth.currentUser, {
      url: `${window.location.origin}/login`,
    });
  }
};
