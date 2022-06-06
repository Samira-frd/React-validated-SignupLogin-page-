export const validate = (data, type) => {
  const errors = {};

  

  if (!data.email) {
    errors.email = "Email is required.";
  } else if (
    !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(data.email)
  ) {
    errors.email = "Please enter a valid email.";
  } else {
    delete errors.email;
  }

  if (!data.password) {
      errors.password = "Password is required."
  } else if(data.password.length < 6 ) {
      errors.password = "Password cannot be less than 6 characters."
  } else {
      delete errors.password;
  }                                                                                                

  if (type === "submit") {

    if (!data.name.trim()) {
      errors.name = "Username is required.";
    } else {
      delete errors.name;
    }
   if (!data.confirmPassword) {
        errors.confirmPassword = "Confirm Password is required."
    } else if(data.confirmPassword !== data.password) {
        errors.confirmPassword = "Passwords do not match."
    } else {
        delete errors.confirmPassword;
    }
  
    if (!data.isAccepted) {
      errors.isAccepted = "Please accept our policy."
    } else {
        delete errors.isAccepted;
    }
  }


  return errors;
};
