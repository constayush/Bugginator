import { Link } from "react-router"


function SignupButton() {
  return (
    <button className="relative inline-flex items-center h-fit w-fit justify-center gap-4 group">
    <div
      className="absolute inset-0 duration-1000 opacity-60 transitiona-all bg-gradient-to-r animate-pulse from-[#7dfce7] via-[#ff8080]/70 to-[#b282ff]/70 rounded-xl blur-sm filter group-hover:opacity-100 group-hover:duration-600"
    ></div>
    <Link
      role="button"
      className="group relative inline-flex items-center justify-center text-base rounded-xl bg-gradient-to-b  from-[#00a2fffd]  to-[#c15cf796] px-8 py-3 font-semibold text-white transition-all duration-500 hover:from-[#000000] hover:to-[#000000ab] hover:shadow-lg hover:-translate-y-0.5 hover:shadow-gray-600/30"
      title="payment"
      to="/signup"
      >Sign Up<svg
        aria-hidden="true"
        viewBox="0 0 10 10"
        height="10"
        width="10"
        fill="none"
        className="mt-0.5 ml-2 -mr-1 stroke-white stroke-2"
      >
        <path
          d="M0 5h7"
          className="transition opacity-0 group-hover:opacity-100"
        ></path>
        <path
          d="M1 1l4 4-4 4"
          className="transition group-hover:translate-x-[3px]"
        ></path>
      </svg>
    </Link>
  </button>
  )
}

export default SignupButton