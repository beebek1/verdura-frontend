import cheetah from '../assets/im.png'



export default function Signup() {
  return (
    <div className="min-h-screen flex">

      {/* LEFT IMAGE SECTION */}
      <div className="w-1/2 hidden md:block">
        <img
          src={cheetah}
          alt="Nature"
          className="w-full h-full object-cover"
        />
      </div>

      {/* RIGHT FORM SECTION */}
      <div className="w-full md:w-1/2 flex items-center justify-center bg-white px-8">
        <div className="w-full max-w-md">

          <h2 className="text-2xl font-semibold mb-2">
            Sign up to Verdura
          </h2>

          <p className="text-gray-500 mb-6">
            Track impact, grow greener, and inspire change
          </p>

          <form className="space-y-4">

            <input
              type="text"
              placeholder="Organization Name"
              className="w-full border px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-green-700"
            />

            <input
              type="email"
              placeholder="Email Address"
              className="w-full border px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-green-700"
            />

            <input
              type="text"
              placeholder="Upload Document (PAN / Reg No)"
              className="w-full border px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-green-700"
            />

            <input
              type="password"
              placeholder="Password"
              className="w-full border px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-green-700"
            />

            <input
              type="password"
              placeholder="Confirm Password"
              className="w-full border px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-green-700"
            />

            <div className="flex items-center gap-2 text-sm">
              <input type="checkbox" />
              <span>
                I agree to Terms & Privacy Policy
              </span>
            </div>

            <button
              type="submit"
              className="w-full bg-green-900 text-white py-2 rounded font-semibold hover:bg-green-800 transition"
            >
              VERIFY ACCOUNT
            </button>

          </form>

          <p className="text-sm mt-6 text-center">
            Have an account?{" "}
            <a href="#" className="text-green-800 font-semibold">
              Sign in
            </a>
          </p>

        </div>
      </div>

    </div>
    
  );
}
