import './Signup.css'

const SignUp = () => {
  return (
    <>
      <div className="signUp_container">
        <div className="sifnUp_flex">
          <h1 className='sign_fb'>facebook</h1>
          <div className="signupform_flex">
            <form>
              <div className="heading">
                <h1>Create a new account</h1>
                <p>It's quick and easy.</p>
                <hr />
                <div className="form_input">
                  <div className="name_input">
                  <input type="text" placeholder='First name' />
                  <input type="text" placeholder='Surname' />
                  </div>
                  <input type="number" placeholder='Mobile number or email address'/>
                  <input type="password" placeholder='New password'/>
                  <div className="dob">
                    <label>
                    Date of birth:
                    <input type="datetime-local" name="" id="" />
                    </label>
                  </div>


                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
