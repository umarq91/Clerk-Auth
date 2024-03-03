import { SignIn, SignInButton, SignOutButton, UserButton, useUser } from '@clerk/clerk-react';

function Home() {
  const { user, isLoaded } = useUser();

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  if (!user) {
   
    return (
      <>
      <h1>Log in to Display</h1>
      <SignOutButton>
        <SignInButton mode='modal'/>
      </SignOutButton>
      </>
    )
  }

  // Render content for authenticated users
  return (
    <div>
      Welcome, {user.fullName}!
      {/* Other authenticated content */}
      <UserButton/>
    </div>
  );
}

export default Home;
