import NavBar from "./componentsofyt/NavBar";
import Link from "next/link";
const Disclaimer = () => {
  return (
    <>
      <NavBar />
      <div className="sm:max-w-5xl mx-auto flex flex-col justify-center items-center px-2 mt-5">
        <h1 className="text-xl md:text-2xl font-bold">Disclaimer for GearOnlineColts</h1>

        <p className="text-base font-light leading-relaxed mt-3 mb-4 text-gray-700 md:max-w-3xl">
          If you require any more information or have any questions about our
          site's disclaimer, please feel free to contact us by email at
          contact@gearonlinecolts.com.
        </p>

        <h2 className="text-lg md:text-xl font-semibold">Disclaimers for GearOnlineColts</h2>

        <p className="text-base font-light leading-relaxed mt-3 mb-4 text-gray-700 md:max-w-3xl">
          All the information on this website - www.gearonlinecolts.com - is
          published in good faith and for general information purpose only.
          GearOnlineColts does not make any warranties about the completeness,
          reliability and accuracy of this information. Any action you take upon
          the information you find on this website (GearOnlineColts), is
          strictly at your own risk. GearOnlineColts will not be liable for any
          losses and/or damages in connection with the use of our website.
        </p>

        <p className="text-base font-light leading-relaxed mt-3 mb-4 text-gray-700 md:max-w-3xl">
          From our website, you can visit other websites by following hyperlinks
          to such external sites. While we strive to provide only quality links
          to useful and ethical websites, we have no control over the content
          and nature of these sites. These links to other websites do not imply
          a recommendation for all the content found on these sites. Site owners
          and content may change without notice and may occur before we have the
          opportunity to remove a link which may have gone 'bad'.
        </p>

        <p className="text-base font-light leading-relaxed mt-3 mb-4 text-gray-700 md:max-w-3xl">
          Please be also aware that when you leave our website, other sites may
          have different privacy policies and terms which are beyond our
          control. Please be sure to check the Privacy Policies of these sites
          as well as their "Terms of Service" before engaging in any business or
          uploading any information.
        </p>

        <h2 className="text-lg md:text-xl font-semibold">Consent</h2>

        <p className="text-base font-light leading-relaxed mt-3 mb-4 text-gray-700 md:max-w-3xl">
          By using our website, you hereby consent to our disclaimer and agree
          to its terms.
        </p>

        <h2 className="text-lg md:text-xl font-semibold">Update</h2>

        <p className="text-base font-light leading-relaxed mt-3 mb-4 text-gray-700 md:max-w-3xl">
          Should we update, amend or make any changes to this document, those
          changes will be prominently posted here.
        </p>
      </div>
      <div className="cursor-pointer flex justify-center items-center">
        <Link href="/">
          <img
            src="/logoGOC.svg"
            className="h-60 w-60 mb-5"
            alt="Logo image for www.gearonlinecolts.com"
          />
        </Link>
      </div>
    </>
  );
};

export default Disclaimer;
