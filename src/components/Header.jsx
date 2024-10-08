import Logo from "@/assets/chip.svg";

export function Header() {
  const share = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: document.title,
          text: document.querySelector("meta[name='description']").getAttribute("content"),
          url: window.location.href,
        });
      } catch (error) {
        alert(`Failed to share the website link, because: ${error}`);
      }
    } else {
      alert(
        "Web sharing is not supported in this browser. Try using a different browser."
      );
    }
  };

  return (
    <header className="w-full bg-white border-b border-gray-200">
      <div className="inline-flex justify-between items-center w-full px-4 py-3 sm:px-6 sm:py-3.5">
        <div>
          <a href="/" className="inline-flex items-center space-x-2.5">
            <img
              src={Logo}
              alt="Main header logo"
              className="size-10 sm:size-8"
            />
            <span className="hidden text-xl text-gray-800 font-bold sm:block sm:text-2xl">
              Payment Form
            </span>
          </a>
        </div>
        <div>
          <button type="button" onClick={share} className="inline-flex items-center gap-x-3 px-3 py-1.5 rounded-md font-medium text-gray-700 hover:bg-gray-100">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5 text-gray-700">
              <path
                fillRule="evenodd" d="M15.75 4.5a3 3 0 1 1 .825 2.066l-8.421 4.679a3.002 3.002 0 0 1 0 1.51l8.421 4.679a3 3 0 1 1-.729 1.31l-8.421-4.678a3 3 0 1 1 0-4.132l8.421-4.679a3 3 0 0 1-.096-.755Z" clipRule="evenodd" />
            </svg>
            <span>
              Share <span className="hidden sm:inline-block">to Social</span>
            </span>
          </button>
        </div>
      </div>
    </header>
  );
}
