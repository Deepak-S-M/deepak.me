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
                  EP-04
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
                    அவசர அவசரமா சாப்புடாம கூட கிளம்பி ஆபீஸ் வேன்க்கு வெயிட் பன்னிட்டு இருந்தேன். வேன் வந்துச்சு வேன்ல ஏறி உட்காந்துகிட்டு யோசிச்சு பாத்தேன் ஒரு வேல இப்ப தூங்குனாலும் நமக்கு கனவு வருமானு நெனெச்சேன். ஊருக்குள்ள வேற  ஒரே ஸ்நொவ் எங்க வேன் டிரைவர் செம்ம வேகமா வண்டிய ஓட்டிகிட்டு இருக்காரு, வெளிய ஸ்நொவ் இருந்ததுனால கண்ணாடி வழியா வெளிய வேடிக்கை பாத்துகிட்டு இருந்தேன். அப்போ தான் சந்தேகம் வந்துச்சி, என்னது இது நம்ம ஊருல ஸ்நொவ் ஆ! இது எப்டினு யோசிச்சு என் கூட வேல பாக்குறவங்க கிட்ட கேட்கலாம்னு திரும்பி பாத்தேன் பின்னாடி உட்காந்து இருக்குறவங்க எல்லாம் என் கூட காலேஜ் படிச்சவங்க. கைய பாத்தா "dsm" காப்பு போட்டு இருக்கேன். அப்போ வேலைக்கு போற வேன்ல கனவு வருமானு நெனெச்சி தூங்கிட்டேன் போல.
                  </p>

                  <p>
                    ஆ..ஆஹா னு சிரிச்சுகிட்டே இப்ப என்ன நினைக்கலாம் "skyhigh" படத்துல வர்ற மாதிரி  பறப்போமானு நெனெச்சேன், அந்த படத்துல வர்ற மாதிரியே வேன்னோட பறக்குறோம். செம்ம ஜாலியா இருந்திச்சு. அடுத்து என்ன பண்ணலாம்னு யோசிச்சேன். பின்னாடி திரும்பி பாத்த ரெண்டு மூணு பேரு தான் இருந்தாங்க அவங்கலாம் வீட்டுல தூங்கி கிட்டு இருக்குறவங்க போல அதனால தான் என் கூட இங்க என்னோட "dsm" கனவுல இருகாங்க. அப்போ இது மாதிரி வேற யாரெல்லாம் தூங்கி கிட்டு இருகாங்க அவங்களோட "dsm" எப்புடி இருக்கும்னு நெனெச்சேன்.
                  </p>

                  <p>
                    நான் அப்படி யோசிச்ச உடனே எங்க வேன் சுத்தி உருண்டை உருண்டையா நீல கலர்ல பந்து மாரி நெறையா வந்து இருந்துச்சு. எங்க வேன் கீழ இறங்கிருச்சி நான் வேன்ல இருந்து இறங்கி அந்த பந்து மாரி உள்ள எல்லாத்தையும் பாத்தேன். அப்போ இதெல்லாம் இப்ப தூங்கிட்டு இருக்குறவங்களோட "dsm" போல னு பாத்துகிட்டு இருந்தேன். வெளிய இருந்து பாத்த அந்த "dsm" யாரோடதுனு தெரிது. அப்போ அதுல ஒன்னுல ஆஷிப் இருந்தான், அட சோம்பேறி பயலே இன்னும் நீ தூங்கி கிட்டா இருக்க இரு பெரிய கல்ல தூக்கி மண்டையிலே போடுறேன். அவனுக்கு அடுத்த "dsm" ல  ரிவஷ்லிஹா இருந்தாள். அத பாத்துட்டு அந்த "dsm" தொட்டு பாத்தேன் அது என்ன மெதுவா உள்ள இழுத்துச்சி நான் உள்ள போய் பாத்தேன்.
                  </p>

                  <p>
                    அவளோட கனவே அழகா இருந்துச்சு சாயங்கால நேரம் வானம் ஆரஞ்சு கலர்ல இருக்கு, வானத்துல ரெண்டு சூரியன் ஒன்னு மஞ்ச கலர் இன்னொன்னு நீல கலர், ரெண்டும் ஒன்னா சேர்ந்து இருந்த்துச்சு, தரைல சுத்தி எல்லா பக்கமும் ஒரே புற்கல், நீல நீலமா வளந்து இருக்கு அந்த புல்லுக்கு நடுவுல ஒரே ஒரு டென்ட், அதுக்கு வெளிய தீ எரிஞ்சுகிட்டு இருக்கு பக்கத்துல ஒரு கட்டைல அந்த சூரியனை பாத்துகிட்டு தலைவி உட்காந்து இருக்காள். அவளை அங்க பாத்தத யாருட்டையாவது சொல்லனும்னு தோனுச்சு, சரி போய் ஆஷிப்ப இங்க கூட்டு வருவோம்னு நெனச்சி அவளோட "dsm" ல இருந்து வெளிய வந்து ஆஷிப் "dsm" அ தொட்டு பாத்தேன் அது என்ன உள்ள இழுக்க மாடிக்கு சரி உடைச்சி உள்ள போவோம்னு அத ஓங்கி அடிக்குறேன் அது உடைய மாட்டிக்கு ஏன் இவனோட "dsm" அ  உடைக்க முடில அப்டினு யோசிச்சேன். அப்போ எங்க வேன் டிரைவர் சத்தம் கேக்குது. கனவுல இருந்து முழிச்சிகிட்டேன்.
                  </p>

                  <p>
                    <span className="text-black dark:text-white">டிரைவர் :</span> சார், என்ன ஆச்சு உங்களுக்கு<br></br>
                    <span className="text-black dark:text-white">தீபக்       :</span>  ஏன் அண்ணன், எனக்கு ஒன்னும் அகல<br></br>                        
                    <span className="text-black dark:text-white">டிரைவர் : </span> சார், நான் உங்கள ரொம்ப நேரமா எழுப்ப முயற்சி பண்ணிட்டு இருக்கேன். நீங்க மூச்சு பேச்சு இல்லாம இருந்திங்க நான் பயந்து போயிட்டேன்.<br></br>
                    <span className="text-black dark:text-white">தீபக்       :</span>  அப்டிலாம் இல்ல அண்ணன்,  காலைல சாப்புடாம வந்துட்டேன் அதான் கொஞ்சம் அசந்து தூங்கிட்டேன் போல<br></br>   
                    <span className="text-black dark:text-white">டிரைவர் :</span> உட்மப பாத்துக்கோங்க சார், எவ்ளோ சம்பாதிச்சாலும் அத செலவு பண்ண கூட உடம்புல தெம்பு வேணும்.<br></br>
                 </p>

                 <p>
                  அன்னைக்கு ஆபீஸ்ல வேலைய முடிச்சிட்டு வீட்டுக்கு போய் படுத்தேன் திரும்பி கனவு குள்ள போய்ட்டேன் கைய  பாத்தேன் "dsm" காப்பு இருந்துச்சு ரிவஷ்லிஹாவோட "dsm" நெனெச்சேன் ஆனா அங்க வெறும் அந்த நீல கலர்ல "dsm" உலகம் மட்டும் தான் இருக்கு, அதுக்குள்ள போனேன் அங்க ரீ இல்ல  அப்ப அவ இன்னும் தூங்கலனு நெனெச்சி அங்கயே வெயிட் பன்னிக்கிட்டு இருந்தேன்.
                 </p>

                  <h3 className="pt-5">
                    Dream Surprised Me
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
