import { SignIn } from "@clerk/clerk-react";

// This page is provided by clerk and dont need much attention
 
const SignInPage = () => (
<>
<div className="flex mt-[50px] justify-center align-center m-auto ">
<SignIn afterSignInUrl={"/"} />
</div>
</>
);
 


export default SignInPage;