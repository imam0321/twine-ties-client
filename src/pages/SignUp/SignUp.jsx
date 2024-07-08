import { Link } from "react-router-dom";
import SignUpIcon from "../../assets/icons/registration.svg";
import SignUpForm from "./SignUpForm";

const SignUp = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-deepDark py-2">
      <div className="max-w-[1368px] flex-1">
        <div className="container grid items-center gap-36 lg:grid-cols-2">
          <div>
            <img
              className="mb-12 h-60"
              src={SignUpIcon}
              alt="auth_illustration"
            />
            <div>
              <h1 className="mb-3 text-4xl font-bold lg:text-[40px]">
                Twine Ties
              </h1>
              <p className="max-w-[452px] text-gray-400/95 lg:text-lg">
                Create a social media app with features like, showing the post,
                post details, reactions, comments and profile.
              </p>
            </div>
          </div>

          <div className="card">
            <SignUpForm />
            <div className="py-4 lg:py-4">
              <p className="text-center text-xs text-gray-600/95 lg:text-sm">
                Already have an account?
                <Link
                  className="hover:text-lwsGreen text-white transition-all hover:underline"
                  to="/login"
                >
                  Login
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
