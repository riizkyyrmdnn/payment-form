import { useState } from 'react'

export function Banner() {
  const [visible, setVisible] = useState(true);

  const handleClose = () => setVisible(false);

  if (!visible) {
    return null;
  }

  return (
    <div className="flex items-center justify-between gap-x-6 bg-gray-900 px-6 py-2.5 sm:pr-3.5 lg:pl-8">
      <p className="text-sm leading-6 text-white">
        <a href="https://github.com/ryzmdn" target="_blank">
          <strong className="font-semibold">Reased 8 October 2024</strong>
          <svg viewBox="0 0 2 2" aria-hidden="true" className="mx-2 inline h-0.5 w-0.5 fill-current">
            <circle r={1} cx={1} cy={1} />
          </svg>
          See this website repository on github&nbsp;<span aria-hidden="true">&rarr;</span>
        </a>
      </p>
      <button type="button" onClick={handleClose} className="-m-3 flex-none p-3 focus-visible:outline-offset-[-4px]">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5 text-white" aria-hidden="true">
          <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
        </svg>
      </button>
    </div>
  )
}
