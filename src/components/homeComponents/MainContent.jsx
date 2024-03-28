import React from 'react'
import './style.css'
function MainContent() {
  return (
    <>

      <div className='h-3/6  flex flex-col max-w-screen-xl'>
        <h1 className='text-white ml-20 mt-24 text-5xl kanit-medium  leading-snug'>
          Effortlessly Manage Your Domain's Destiny: Introducing our DNS Manager - Your Gateway to Seamless Domain Control and Configuration.
        </h1>
        <button class="btn-default ml-20 mt-10 overflow-hidden relative w-64 bg-stone-50 text-gray-900 py-4 px-4 rounded-xl font-bold uppercase transition-all duration-100 -- hover:shadow-md border border-stone-100 hover:bg-blue-800 hover:border-black hover:text-white before:to-stone-50 hover:-translate-y-[3px]">
          <span class="relative kanit-semibold">Get started </span>
        </button>

      </div>
      <div className='h-auto  items-stretch flex flex-col max-w-screen-2xl'>
        <h1 className='text-white ml-20 mt-10 text-3xl kanit-medium  leading-snug'>
          DNS Manager Documentation : <span className='text-orange-400'>Getting Started with AWS Integration</span>

        </h1>
          <span className='text-2xl text-white ml-20 kanit-regular mt-10'>Welcome to our DNS Manager! This documentation will guide you through the process of integrating your DNS management with Amazon Web Services (AWS), allowing you to efficiently manage your domain's DNS records.</span>
        <h1 className='text-orange-400 ml-20 mt-10 text-3xl kanit-medium  leading-snug'>
        Accessing AWS Console

        </h1>
          <span className='text-2xl text-white ml-20 kanit-regular mt-10'>1. Visit AWS Website: Go to <a href='https://aws.amazon.com/console/' target='_blank' className='text-blue-500'>AWS Management Console</a> in your web browser.</span>
          <span className='text-2xl text-white ml-20 kanit-regular mt-5'>2. Sign In: Sign in with your AWS account credentials. If you don't have an AWS account, you'll need to create one.</span>
        <h1 className='text-orange-400 ml-20 mt-10 text-3xl kanit-medium  leading-snug'>
        Creating IAM User

        </h1>
          <span className='text-2xl text-white ml-20 kanit-regular mt-10'>1. Navigate to IAM: Once logged in, navigate to the IAM (Identity and Access Management) service.</span>
          <span className='text-2xl text-white ml-20 kanit-regular mt-5'>2. Create User: Within IAM, locate the "Users" section and click "Add user".</span>
          <span className='text-2xl text-white ml-20 kanit-regular mt-5'>3. Enter User Details: Enter a username and select "Programmatic access" as the access type.</span>
          <span className='text-2xl text-white ml-20 kanit-regular mt-5'>4. Set Permissions: Assign appropriate permissions to the user. For DNS management, you might consider creating a custom policy or using the "AmazonRoute53FullAccess" policy.</span>
          <span className='text-2xl text-white ml-20 kanit-regular mt-5'>5. Review and Create: Review the user details and create the user. Make note of the Access Key ID and Secret Access Key provided after creation</span>
        <h1 className='text-orange-400 ml-20 mt-10 text-3xl kanit-medium  leading-snug'>
        Adding Domain

        </h1>
          <span className='text-2xl text-white ml-20 kanit-regular mt-10'>1. Navigate to Domains: In the DNS Manager interface, locate the section for managing domains.</span>
          <span className='text-2xl text-white ml-20 kanit-regular mt-5'>2. Add Domain: Click on "Add Domain" or a similar option to begin adding a new domain.</span>
          <span className='text-2xl text-white ml-20 kanit-regular mt-5'>3. Enter Domain Details: Provide the domain name and any additional settings required for domain configuration.</span>
          <span className='text-2xl text-white ml-20 kanit-regular mt-5'>4. Enter AWS Credentials: During the domain setup process, you'll be prompted to enter your AWS Access Key ID and Secret Access Key.</span>
          <span className='text-2xl text-white ml-20 kanit-regular mt-5'>5. Complete Setup: Follow the prompts to complete the domain setup process. Your domain should now be configured to use AWS Route 53 for DNS management.</span>
        <h1 className='text-orange-400 ml-20 mt-10 text-3xl kanit-medium  leading-snug'>
        Testing Configuration


        </h1>
          <span className='text-2xl text-white ml-20 kanit-regular mt-10'>1. Add DNS Records: Add a sample DNS record for your domain, such as an A record pointing to a test server IP address.</span>
          <span className='text-2xl text-white ml-20 kanit-regular mt-5'>2. Verify Configuration: Use tools like dig or online DNS lookup tools to verify that the DNS records have been properly configured and propagated.</span>
          
        <h1 className='text-orange-400 ml-20 mt-10 text-3xl kanit-medium  leading-snug'>
        Troubleshooting

        </h1>
          <span className='text-2xl text-white ml-20 kanit-regular mt-10'>1. If you encounter any issues during the setup process, double-check that the AWS credentials entered in the DNS Manager are correct.</span>
          <span className='text-2xl text-white ml-20 kanit-regular mt-5'>2. Ensure that the IAM user associated with the credentials has sufficient permissions for managing Route 53 resources.</span>
          
        <h1 className='text-orange-400 ml-20 mt-10 text-3xl kanit-medium  leading-snug'>
        Security Best Practices


        </h1>
          <span className='text-2xl text-white ml-20 kanit-regular mt-10'>1. Store your AWS credentials securely and avoid sharing them with unauthorized users.</span>
          <span className='text-2xl text-white ml-20 kanit-regular mt-5'>2. Regularly review and rotate your AWS access keys to enhance security.</span>
        <h1 className='text-orange-400 ml-20 mt-10 text-3xl kanit-medium  leading-snug'>
        Additional Resources


        </h1>
          <span className='text-2xl text-white ml-20 kanit-regular mt-10'>1.<a href='https://docs.aws.amazon.com/IAM/latest/UserGuide/introduction.html' className='text-blue-600'> AWS IAM User Guide</a></span>
          <span className='text-2xl mb-14 text-white ml-20 kanit-regular mt-5'>2. <a href='https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/welcome-dns-service.html' className='text-blue-600'>AWS Route 53 Documentation</a></span>
          

      </div>
    </>
  )
}

export default MainContent
