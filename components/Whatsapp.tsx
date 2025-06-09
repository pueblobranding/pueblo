import Image from "next/image";

function Whatsapp() {

  return (
    <>
      <div
        className='fixed bottom-10 right-4 lg:bottom-12 lg:right-12 z-50 size-12 md:size-16'
      >
        <a href="https://api.whatsapp.com/send?phone=+5491133226434&text=%20"
          target="_blank" rel="noopener noreferrer">

          <Image
            src="/whatsapp-icon.svg"
            alt="whatsapp logo"
            width={90}
            height={90}
          />

        </a>
      </div>
    </>
  );
}

export default Whatsapp;