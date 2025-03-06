'use client'
import {useEffect, useState} from "react"; 
import { useRouter } from 'next/navigation'
import { getPages } from './sanity-next-js/schemaTypes/schemaTypes/sanity-utils';
const Nav = () => {
  const router = useRouter();
  const [pages, setPages] = useState([]);

  useEffect(() => {
    const fetchPages = async () => {
      try {
        const pagesData = await getPages();
        setPages(pagesData);
      } catch (error) {
        console.error("Error fetching pages:", error);
        // Handle error appropriately, e.g., display an error message
      }
    };

    fetchPages();
  }, []);
alert(window.innerWidth);
  // Function to navigate to a page based on its slug
  const handleNavigation = (slug) => {
    router.push(`/pages/${slug}`);
  };

  return (
    <>
      <nav className="font-extrabold relative 
      sm:left-[-2rem]
        md:top-[-6.25rem]
        lg:left-[6rem !important] top-[-360px] xl:top-[-260px] left-[8%] text-white bg-black flex justify-left
        2xl:left-[5.6rem]
      ">
        {pages.map((page) => (
          <button
            key={page._id}
            className="text-2xl py-4 px-8 rounded-lg hover:bg-gray-700 transition duration-300"
            type="button"
            onClick={() => handleNavigation(page.slug.current)}
            aria-label={`Navigate to ${page.title} page`}
          >
            {page.title}
          </button>
        ))}
      </nav>
    </>
  );
};
export default Nav; 