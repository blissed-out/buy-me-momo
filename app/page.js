
export default function Home() {
  return (
    <>
      <div className="landingpage flex-col py-2 justify-center">
        <div className="flex gap-3 font-bold justify-center items-center">
          <h1 className="text-white font-extrabold text-2xl">Buy me</h1>
          <img src="/icons/momo.png" alt="momo" width={30} /><h1 className="text-white font-extrabold text-2xl">Mo:mo</h1>
        </div>

        <div className="description py-20 font-bold text-5xl text-neutral-300 text-center">
          <p className="py-4">FUND YOUR PROJECTS</p><p className="py-4">WITH</p>

          <div className="flex py-4 justify-center items-center">
            <img src="icons/momo.webp" alt="momo" width={120} /></div>

          {/* <button className="my-10 font-extrabold text-3xl text-neutral-500 bg-orange-100 py-6 px-8 rounded-full">
            Get Started
          </button> */}

          <button type="button" className="text-neutral-500 my-7 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-bold rounded-full text-4xl px-5 py-2.5 text-center me-2 mb-2">Get Started</button>

        </div>
      </div>
    </>
  );
}
