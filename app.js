
  const firebaseConfig = {
    apiKey: "AIzaSyBFEunlHIFmU9UWMo9YcRIzPwH91VCQGN4",
    authDomain: "nxt-talks.firebaseapp.com",
    projectId: "nxt-talks",
    storageBucket: "nxt-talks.firebasestorage.app",
    messagingSenderId: "1062668958984",
    appId: "1:1062668958984:web:486643a67527cf173bc0bd",
    measurementId: "G-J8S61FZGGM"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const auth = firebase.auth();
  
  window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container', {
    size: 'invisible',
    callback: function(response) {
      // reCAPTCHA solved
    }
  });
  
  let confirmationResult;
  
  function sendOTP() {
    const phoneNumber = document.getElementById('phone').value;
    const appVerifier = window.recaptchaVerifier;
  
    auth.signInWithPhoneNumber(phoneNumber, appVerifier)
      .then((result) => {
        confirmationResult = result;
        document.getElementById('otp-section').style.display = 'block';
        document.getElementById('message').innerText = "OTP sent!";
      }).catch((error) => {
        document.getElementById('message').innerText = error.message;
      });
  }
  
  function verifyOTP() {
    const otp = document.getElementById('otp').value;
    confirmationResult.confirm(otp)
      .then((result) => {
        const name = document.getElementById('name').value;
        document.getElementById('message').innerText = `🎉 Congratulations, ${name}! You now have access.`;
        document.getElementById('otp-section').style.display = 'none';
      }).catch((error) => {
        document.getElementById('message').innerText = "Invalid OTP. Please try again.";
      });
  }
  