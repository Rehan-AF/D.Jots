import HeaderImage from '../assets/headerimg.png';

export default function Header() {
  return (
    <div className="bg-white">
      <header className="absolute inset-x-0 top-0 z-50"></header>

      <div className="relative">
        <div className="mx-auto max-w-7xl">
          <div className="relative z-10 pt-14 lg:w-full lg:max-w-[700px]">
            <svg
              className="absolute inset-y-0 right-8 hidden h-full w-80 translate-x-1/2 transform fill-white lg:block"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <polygon points="0,0 90,0 50,100 0,100" />
            </svg>

            <div className="relative px-6 py-4 lg:py-24 md:py-22 sm:py-40 lg:px-8  lg:pr-0">
              <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl">
                <h1 className="text-[30px] font-semibold tracking-tight lg:leading-[70px] text-[#3f065c] sm:text-6xl sans-serif">
                  Preserve and Secure your Efforts on the D.Jots
                </h1>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  Save Your Efforts, Save on Blockchain safeguards your valuable
                  work using blockchain technology. Our decentralized platform
                  ensures the security and accessibility of your contributions,
                  fostering a collaborative space for knowledge exchange. Join
                  us in embracing the future of secure information sharing.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-50 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <img
            className="aspect-[3/2] object-cover lg:aspect-auto lg:h-full lg:w-full"
            src={HeaderImage}
            alt="header-image"
          />
        </div>
      </div>
    </div>
  );
}
