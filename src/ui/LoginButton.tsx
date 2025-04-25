

function LoginButton() {
  return (
    <button className='h-fit w-fit '>
<a
      role="button"
      className="group relative  inline-flex items-center justify-center text-base rounded-xl hover:text-white px-8 py-3 font-semibold border transition-all duration-200 hover:bg-black hover:shadow-lg hover:-translate-y-0.5 hover:shadow-gray-600/30"
      title="payment"
      href="#"
      >Login<svg
        aria-hidden="true"
        viewBox="0 0 10 10"
        height="10"
        width="10"
        fill="none"
        className="mt-0.5 ml-2 -mr-1 stroke-[var(--primary-text-color)] group-hover:stroke-white stroke-2"
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
    </a></button>
  )
}

export default LoginButton