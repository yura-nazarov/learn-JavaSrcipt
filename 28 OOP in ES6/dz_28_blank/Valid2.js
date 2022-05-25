class Valid2 extends Valid {
   constructor(email, password, isValid = false, emailError = '', passwordError = '') {
      super(email, password, isValid);
      this.emailError = emailError;
      this.passwordError = passwordError;
   }
   validate() {
      if (this.password.length > 6 && this.email != '') {
         this.isValid = true;
      }
      if (this.password.length <= 6) {
         this.passwordError = `min length 6`;
         console.log(this.passwordError);
      }
      if (this.emailError == '') {
         this.emailError = `email empty`;
         console.log(this.emailError);
      }
      console.log(this.isValid);
   }
}