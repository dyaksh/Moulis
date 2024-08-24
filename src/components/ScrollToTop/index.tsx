import { useEffect, useState } from "react";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const primaryColor = '#9400d3'; // Define your primary color here

  // Top: 0 takes us all the way back to the top of the page
  // Behavior: smooth keeps it smooth!
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    // Button is displayed after scrolling for 300 pixels
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div className="fixed bottom-8 right-8 z-[99]">
      {isVisible && (
        <div
          onClick={scrollToTop}
          aria-label="scroll to top"
          style={{ backgroundColor: primaryColor }} // Use inline style for the background color
          className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-full text-white shadow-lg transition duration-300 ease-in-out hover:bg-blue-600 hover:shadow-xl"
        >
          <span className="mt-[6px] h-4 w-4 rotate-45 border-l-2 border-t-2 border-white"></span>
        </div>
      )}
    </div>
  );
}
