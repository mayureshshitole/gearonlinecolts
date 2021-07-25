import Link from "next/link";
import Image from "next/image";
const Footer = () => {
  return (
    <div className="min-w-full border-t border-gray-200">
      <div className="flex justify-center items-center flex-col md:flex-row md:space-x-4 py-5 border-b border-gray-200">
      <Link href="/legal/Privacy-Policy">
        <a>
          <p>Privacy Policy</p>
        </a>
      </Link>
      <Link href="/legal/Terms-and-Conditions">
        <a>
          <p>Terms and Conditions</p>
        </a>
      </Link>
      <Link href="/legal/Disclaimer">
        <a>
          <p>Disclaimer</p>
        </a>
      </Link>
      </div>
      <div className="py-5 flex flex-col  justify-center items-center">
        <Link href="/">
          <Image
            src={"/logo.png"}
            width={100}
            height={100}
            layout="intrinsic"
            alt="logo image of www.gearonlinecolts.com"
          />
        </Link>
        <p className="mt-3 text-xs lg:text-sm leading-none text-gray-900 dark:text-gray-50">
          2021 GearOnlineColts . All Rights Reserved.
        </p>
      </div>
    </div>
  );
};
export default Footer;

/* <div className="w-full  px-6">
<div className="w-full  px-6">
<ul>
  <li>
    <Link href="javascript:void(0)">
      <a className="text-xs lg:text-sm leading-none hover:text-brand dark:hover:text-brand text-gray-800 dark:text-gray-50">
        Free tools
      </a>
    </Link>
  </li>
  <li className="mt-6">
    <Link href="javascript:void(0)">
      <a className="text-xs lg:text-sm leading-none hover:text-brand dark:hover:text-brand text-gray-800 dark:text-gray-50">
        FAQ
      </a>
    </Link>
  </li>
  <li className="mt-6">
    <Link href="javascript:void(0)">
      <a className="text-xs lg:text-sm leading-none hover:text-brand dark:hover:text-brand text-gray-800 dark:text-gray-50">
        Blog
      </a>
    </Link>
  </li>
</ul>
</div>
</div>*/
