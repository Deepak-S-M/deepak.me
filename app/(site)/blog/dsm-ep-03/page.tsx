import RelatedPost from "@/components/Blog/RelatedPost";
import SharePost from "@/components/Blog/SharePost";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Deepak SM - Blog Details Page",
  description: "This is Blog Details page for Solid Pro",
  icons: {
    icon: "/images/favicon.ico", 
  },
  // other metadata
};

const SingleBlogPage = async () => {
  return (
    <>
      <section className="pb-20 pt-35 lg:pb-25 lg:pt-45 xl:pb-30 xl:pt-50">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <div className="flex flex-col-reverse gap-7.5 lg:flex-row xl:gap-12.5">
            <div className="md:w-1/2 lg:w-[32%]">
              {/* <div className="animate_top mb-10 rounded-md border border-stroke bg-white p-3.5 shadow-solid-13 dark:border-strokedark dark:bg-blacksection">
                <form
                  action="https://formbold.com/s/unique_form_id"
                  method="POST"
                >
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Search Here..."
                      className="w-full rounded-lg border border-stroke px-6 py-4 shadow-solid-12 focus:border-primary focus:outline-none dark:border-strokedark dark:bg-black dark:shadow-none dark:focus:border-primary"
                    />

                    <button
                      className="absolute right-0 top-0 p-5"
                      aria-label="search-icon"
                    >
                      <svg
                        className="fill-black transition-all duration-300 hover:fill-primary dark:fill-white dark:hover:fill-primary"
                        width="21"
                        height="21"
                        viewBox="0 0 21 21"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M16.031 14.617L20.314 18.899L18.899 20.314L14.617 16.031C13.0237 17.3082 11.042 18.0029 9 18C4.032 18 0 13.968 0 9C0 4.032 4.032 0 9 0C13.968 0 18 4.032 18 9C18.0029 11.042 17.3082 13.0237 16.031 14.617ZM14.025 13.875C15.2941 12.5699 16.0029 10.8204 16 9C16 5.132 12.867 2 9 2C5.132 2 2 5.132 2 9C2 12.867 5.132 16 9 16C10.8204 16.0029 12.5699 15.2941 13.875 14.025L14.025 13.875Z" />
                      </svg>
                    </button>
                  </div>
                </form>
              </div> */}

              {/* <div className="animate_top mb-10 rounded-md border border-stroke bg-white p-9 shadow-solid-13 dark:border-strokedark dark:bg-blacksection">
                <h4 className="mb-7.5 text-2xl font-semibold text-black dark:text-white">
                  Categories
                </h4>

                <ul>
                  <li className="mb-3 transition-all duration-300 last:mb-0 hover:text-primary">
                    <a href="#">Blog</a>
                  </li>
                  <li className="mb-3 transition-all duration-300 last:mb-0 hover:text-primary">
                    <a href="#">Events</a>
                  </li>
                  <li className="mb-3 transition-all duration-300 last:mb-0 hover:text-primary">
                    <a href="#">Grids</a>
                  </li>
                  <li className="mb-3 transition-all duration-300 last:mb-0 hover:text-primary">
                    <a href="#">News</a>
                  </li>
                  <li className="mb-3 transition-all duration-300 last:mb-0 hover:text-primary">
                    <a href="#">Rounded</a>
                  </li>
                </ul>
              </div> */}

              <RelatedPost />
            </div>

            <div className="lg:w-2/3">
              <div className="animate_top rounded-md border border-stroke bg-white p-7.5 shadow-solid-13 dark:border-strokedark dark:bg-blacksection md:p-10">
                <div className="mb-10 w-full overflow-hidden ">
                  <div className="relative aspect-[97/62] w-full sm:aspect-[97/62]">
                    <Image
                      src={"/images/blog/dsm.png"}
                      alt="Kobe Steel plant that supplied"
                      fill
                      className="rounded-md object-cover object-center"
                    />
                  </div>
                </div>

                <h2 className="mb-5 mt-11 text-3xl font-semibold text-black dark:text-white 2xl:text-sectiontitle2">
                  EP-03
                </h2>

                <ul className="mb-9 flex flex-wrap gap-5 2xl:gap-7.5">
                  <li>
                    <span className="text-black dark:text-white">Author: </span>{" "}
                    Deepak
                  </li>
                  {/* <li>
                    <span className="text-black dark:text-white">
                      Published On: November 27, 2022
                    </span>{" "}
                  </li> */}
                  <li>
                    <span className="text-black dark:text-white">
                      Category: </span>{" "} Fiction
                  </li>
                </ul>

                <div className="blog-details">

                  <p>
                    மற்றொரு நாள், நான் டைப் ரைட்டிங் கிளாஸ்க்கு போய்கிட்டு இருந்தேன் அப்போது எனக்கு ஏதிரே எங்க ஊர்ல உள்ள ஒருத்தர் பைக்ல வந்தாரு அவருக்கு சாயங்காலம் ஆறு மணிக்கு மேல வலதுப்பக்க கண்ணு தெரியாது. நான் வேற நைட் தான் போய்கிட்டு இருந்தேன். அய்யய்யோ எதிர இவரு வேற பைக்ல வாராரே வணடிய  மேல விட்டுருவாரோனு நெனெச்சேன் ஆனா எனக்கு முன்னாடி இருந்த நாய் மேல விட்டாரு. அப்புறம் அவரை தூக்கிவிட்டு நாய்க்கு ஏதாச்சும் ஆகுச்சானு பாத்துட்டு டைப் ரைட்டிங் கிளாஸ்க்கு போயிட்டேன்.
                  </p>

                  <p>
                    திரும்பி வரும்போது அப்ப அவரு பைக் அ வச்சு ஏத்துன நாய் என்ன மொறச்சி பாத்துகிட்டே இருந்துச்சு அது பக்கத்துல புதுசா இன்னொரு நாய் வேற இருந்துச்சு. ஆஹா ஒரு நாய் இருந்தாலே நமக்கு பயம் இதுல ரெண்டு நாய் வேறயா அப்டின்னு நெனெச்சிகிட்டு சரி எப்புடியாவது தாண்டி போய்ருவோம்னு அப்டியே பயத்தோட கடந்து போய்ட்டேன். அதுக்கப்புறமும் அந்த ரெண்டு நாய்களும் என் பின்னாடியே வருது ஆஹா இன்னைக்கு ஒரு சம்பவம் காத்துகிட்டு இருக்கு போலனு நடந்துக்கிட்டே இருந்தேன்.நடக்கும் போது அங்க ஒரு வாருகால் இருந்தது. இதுக்கு முன்னாடி இது இங்க இருக்காதேனு யோசிச்சேன்.
                  </p>

                  <p>
                    அப்போ நேரா பாத்தா தூரமா ஒரு நாய் தனியா நின்னு கிட்டு  இருந்துச்சு சரி போவோம்னு  அந்த வாருகால தாண்டி போயி நடத்துகிட்டே திரும்பி பாத்தேன் என் பின்னாடியே வந்த அந்த ரெண்டு நாய்களும் அதோட இடத்துக்கே திரும்பி நடந்து போயிகிட்டு இருந்துச்சு. வாருகால தாண்ட தெரில போலனு நெனெச்சி சிரிச்சிகிட்டே திரும்புறேன் தூரமா இருந்த நாய் என்ன பாத்து குலைத்து கொண்டே ஓடி வருது நான் பயத்துல திரும்பி பாத்துகிட்டே ஓடுறேன். அந்த வாருகாலுல தடுக்கி கீழ விழுறேன். திரும்ப எந்திச்சு ஓடுறேன் ஆனா அந்த நாய் அந்த வாருகால தாண்டி வரல. அதனால அங்கவே நின்னுட்டு கொஞ்ச நேரம் மூச்சு வாங்கிட்டு இருந்தேன். அந்த பழைய ரெண்டு நாய்களும் என் பக்கத்துல வந்து நிக்குது.
                  </p>

                  <p>
                    என்ன இது இங்க ரெண்டு நாய் இருந்தும் குலைக்க மாட்டிக்கு அங்க அது இப்படி தொரத்துது. சரி வேற வழிய போவோம்னு வலதுபக்கம் அதே மாரி ஒரு வாருகால் இருந்துச்சு அது ரொம்ப பெரிசா இருந்துச்சு அத தாண்ட பலகை போட்டு வச்சுயிருந்தாங்க அது மேல ஏறி நான் நடந்து போய்ட்டேன். என்ன பாத்து பின்னாடியே அந்த ரெண்டு நாய்களும் மெதுவா பலகை மேல நடந்து வந்துச்சு அதுல நடுவுல பலகை ஒடஞ்சிருச்சி போல ஒரு நாய் மட்டும் பாதிலேயே நின்றுச்சு. இன்னொரு நாய் அந்த வாருகால தாண்டுனவுடனே என்ன தொரத்த ஆரம்பிச்சுருச்சு. என்ன இது, புதுசா இது தொரத்துனு அப்போ அந்த வாருகால தாண்ட கூடாது போலனு ஒரு வீட சுத்தி ஓடி வந்து அந்த வாருகால தாண்ட இருந்த இன்னொரு பலகை மேல ஏறி பழைய இடத்துக்கே வந்துட்டேன். அப்போ அந்த பாதி பலகைல நின்னுகிட்டு இருந்த  நாயும் என்ன பாத்து தொரத்த ஆரம்பிச்சுருச்சு. என்னனு புரியாம ஓடிக்கிட்டு இருந்தேன். திடீருனு அதோட சத்தம் நின்றுச்சு. அது தொரத்தல ஏனா, நான் உள்ள ஏறி வந்த பலகைல ஏறியே அந்த இன்னொரு நாயும் பழைய இடத்துக்கே வந்துருச்சி. அப்போ ஒரு நாயா இருந்தாதான் தொரத்துது போல, இப்போ பழைய மாரியே ரெண்டு நாய் அந்த இடத்துல இருந்ததுனால தொரத்தல.
                  </p>

                  <p>
                    அப்போ, அந்த பக்கம் உள்ள ஒரு நாய் கூட இங்க இருந்து ஒரு நாய கூட்டு போய் அந்த பக்கம் ரெண்டு நாய் இருக்குற மாரி மாத்தனும் போல, அப்போதான் வீட்டுக்கு போகமுடியும் , எப்படி மாத்தலாம்னு யோசிச்சுகிட்டு இருந்தேன். பின்னாடி ஒரு சத்தம் என்னனு திரும்பி பாத்தா அந்த நைட் கண்ணு தெரியாதவரு மறுபடியும் வண்டிய அதே நாய் மேல விட்டாரு கிட்ட போய் பாத்தா அந்த நாய் செத்துக்கிட்டு இருந்துச்சு. அப்போதான் எனக்கு ஞாபகம் வந்துச்சு அப்போ இது செத்துருச்சுனா இங்க ஒரு நாய் தான இருக்கும். அந்த இன்னொரு நாய பாத்தேன் அது ஒரு மாதிரி மெது மெதுவா கொலைக்க ஆரம்பிச்சிகிட்டு இருந்துச்சு. அப்டியே அங்க இருந்து விலகி ரோடு பக்கம் நடந்தேன். கொஞ்ச தூரம் போனோனே அந்த நாய் கண்ணு தெரியாதவர கடிச்சிட்டு என்ன பாத்து ஓடி வந்துச்சு நான் ஓட ஆரம்பிச்சுட்டேன். மெயின் ரோட்டுல நான் மட்டும் ஓடிக்கிட்டு இருக்கேன் ஒரு வண்டி கூட வல்ல.
                  </p>

                  <p>
                    ஓடிக்கிட்டு இருக்கும்போது தான் என் கைய பாக்குறேன் என்னோட கைல அதே "dsm"னு போட்ட காப்ப போட்டு இருக்கேன். அப்போ  இதுவும் கனவா தான் இருக்குமோனு திரும்பி நின்னு அந்த நாய் டைனோசர்ரா மாறணும்னு நெனெச்சி ஒரு சொடக்கு போட்டேன், அந்த சின்ன நாய் அவ்வளவு பெரிய டைனோசர்ரா மாறிருச்சு அது என் பக்கத்துல வந்து என்ன கடிக்க பாக்குது அது வாயில இருந்து எச்சில் வடியுது அது பால்ஸ்ஸா மாறணும்னு நெனெச்சேன் அது வாட்டர் பால்ஸ்ஸா மாறிருச்சு அதுல இருந்து தண்ணி வந்து என் மேல விழும் போது, ம்..ம்...! ரொம்ப நாள் கழிச்சு குளிக்குரோம்னு நெனெச்சி கண்ண மூடுறேன் தண்ணி என் மேல விழுது நான் கனவுல இருந்து முழிச்சுகிட்டேன். என்னோட கைய பாக்குறேன் அந்த "dsm" காப்பு இல்ல. ஆஹா! இது நல்லா இருக்கே நெனைச்சதெல்லாம் நடக்குது. அது மட்டும் இல்லாம அடுத்த நாள் கனவுக்காக வெயிட் பண்ணிக்கிட்டு இருந்தேன்.
                  </p>

                  <h3 className="pt-5">
                    Dream Secured Me
                  </h3>

                </div>
                <SharePost />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SingleBlogPage;
