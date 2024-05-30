'use client '
import { useForm } from 'react-hook-form'
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { useRouter } from 'next/router'
import { signIn, useSession } from 'next-auth/react'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
  




function RigistrationForm() {



    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {


        const onSubmit = async (data) => {
            try {
              const response = await fetch('/api/register', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
              });
              const responseData = await response.json();
              console.log(responseData, 'good');
             
            } catch (error) {
              console.error('Error registering user:', error);
              console.log('yeeeee Egbami hoooo');
            }
          };
      console.log(data);
    };



  return (
    <form onSubmit={handleSubmit(onSubmit)} >
    <div className="grid gap-y-4 w-fit">
    <label  className="block text-sm mb-1">Full Name</label>
      <Input  type="name" placeholder="full name"  id="name" {...register("name", { required: true, maxLength: 20 })} />
      <div>
        <label htmlFor="email" className="block text-sm mb-1">Email address</label>
        <div className="relative">
          <Input type="email" id="email" {...register("email", { required: true})}  className ="py-2 px-4 block w-full border-gray-400 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none" required aria-describedby="email-error" />
        </div>
        {errors.email && <p className="text-xs text-red-600 mt-2">Please include a valid email address so we can get back to you</p>}
      </div>
      {/* End Form Group - Email */}
      <label  className="block text-sm mb-1">Password</label>
      <Input  type="password" placeholder="password"  id="password" {...register("password", { required: true })} />
     
      {/* End Form Groups */}
     
      {/* <Select >
     <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Are you a surveyor"    />
     </SelectTrigger>
      <SelectContent >
         <SelectItem value="true">Yes</SelectItem>
         <SelectItem value="false">No</SelectItem>
      </SelectContent>
      </Select> */}

      {/* Checkbox */}
      <div className="flex items-center space-x-2">
        <Checkbox id="terms" />
        <label  className="text-sm dark:text-white">I accept the <a className="text-blue-600 decoration-2 hover:underline font-medium dark:text-blue-500" href="#">Terms and Conditions</a></label>
      </div>
      {/* Submit Button */}
      <button type="submit" className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none">Sign up</button>
    </div>
  </form>
  )
}

export default RigistrationForm