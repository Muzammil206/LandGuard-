
// import SignUpForm from './signup'

// function page() {
//   return (
//     <div>
//       <SignUpForm/>
      
//     </div>
//   )
// }
import { SignUp } from '@clerk/nextjs'

export default function Page() {
  return <SignUp routing="path" path="/sign-up" fallbackredirect= '/map '  redirectUrl="/map"/>
}

