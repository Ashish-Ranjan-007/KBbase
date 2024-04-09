import { SignUp } from "@clerk/clerk-react";
 
const SignUpPage = () => (
  <>
  <div className="flex mt-[50px] justify-center align-center m-auto ">
    <SignUp afterSignUpUrl={"/"} />
  </div>
</>
    
   );
 
export default SignUpPage;