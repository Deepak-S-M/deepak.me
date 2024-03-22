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
                  EP-02
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
                    (எப்படியோ கெளம்பி ஆஃபீஸ் வந்தாச்சு.).
                  </p>

                  <p>
                    <span className="text-black dark:text-white">ஆஷிப் :</span> என்னடா எதையோ தீவரமா யோசிச்சுகிட்டு இருக்க போல.<br></br>
                    <span className="text-black dark:text-white">தீபக்       :</span>  இல்லடா நேத்து ஒரு கனவு வந்துச்சி அந்த கனவை பத்தி தான்டா யோசிச்சுகிட்டு இருக்கேன். அந்த கனவுல நீயும் இருந்தடா.<br></br>                        
                    <span className="text-black dark:text-white">ஆஷிப் : </span> டேய் ஆமா டா எனக்கும் ஏதோ கனவு வந்துச்சி அதுல நான் ஏதோ உன்கிட்ட அருவி,கடல்,கிணறுல குளிச்சேன்  அப்டி ஏதோ சொன்ன மாரி ஞாபகம் இருக்கு அந்த கனவே வித்யாசமா இருந்துச்சு.<br></br>
                 </p>

                  <p>
                    எனக்கும் அப்ப தான் புரிஞ்சுச்சு, அப்ப ஆஷிப் என்கூட கனவுல தான் இருந்துருக்கான். அப்படியே அந்த நாளும் முடியுது.
                  </p>

                  <p>
                    அப்புறம் ஒரு நாள் நான், ஆஷிப் பைக் ல வேலைக்கு போய்கிட்டு இருந்தோம் அப்போது என் கைல உள்ள சிலவர் காப்பு மேல சூரிய ஒளி பட்டு கண்ணுல கிளாற் அடிச்சதுனால கண்ணாடி போடலாம்னு வண்டிய நிப்பாட்டுனேன். அப்போது எனக்கு முன்னாடி சில புறா கூட்டங்கள் இருந்தது அதில் ஒரு புறா நான் வளர்த்த புறாவை போலவே இருந்தது. பைக்ல இருந்து இறங்கி அருகில் சென்று பார்த்தேன். நான் நினைத்தது சரிதான் அது நான் வளர்த்த புறா போல் தான் இருந்தது. அந்த புறாவும் என்னை பார்த்தது வந்தது, புறாக்களுக்கு ஒரு வரம்  இருக்கிறது. பிறக்கும் புறா அதோட மூன்றாவது தலைமுறையில் வாழ்ந்த புறாவின் தோற்றம் மற்றும் அதே நினைவோடு இருக்கும்.
                  </p>

                  <p>
                    அந்த புறா வேகமா வந்து என் கைல ஏறி நின்னுச்சு நான் மெதுவா அதோட தலையை தட்டி குடுத்துக்கிட்டே அந்த புறாவை பார்த்து என்ன உன் எஜமானி இன்னைக்கு ரொம்ப சந்தோசமா இருக்காள் போல என்ன விஷேசம்னு கேட்டேன்.
                  </p>

                  <p>
                    <span className="text-black dark:text-white">ஆஷிப் :</span> நீ ஏன் டா அந்த பொண்ண பத்தி கேக்குற.<br></br>
                    <span className="text-black dark:text-white">தீபக்       :</span>  இல்லடா ஆஷிப், நானும் ரிவஷ்லிஹாவும்  லவ் பன்றோம் ஆனா இப்ப சூழ்நிலை கொஞ்சம் சரி இல்ல அதனால பாத்தே ரொம்ப நாள் ஆச்சுனு தான் உன்ன கூட்டு இந்த பக்கம் வந்தேன்.<br></br>                        
                  </p>

                  <p>
                    அதுக்கப்புறம் நாங்க வர்ற வேண்டிய இடத்துக்கு வந்துட்டோம். அங்க போய் பாத்தா அந்த இடமே வேற லெவெல்ல இருக்கு. அங்க ஒரு தெப்பம் இருக்கு அதுல நாலூ பக்கத்துல இருக்குற படிலையும் தண்ணி தெப்பத்துக்கு நடுவுல போய் கிட்டே இருக்கு. தெப்பம் நடுவுல தண்ணி ஆழமா இருக்கு, நெறய குகை மாரி இருக்கு அதுல ஒரு பக்கம் கூடி தண்ணிக்குள்ளவே போய் மறுபக்கம் வர்ர மாரிலாம் இருக்கு. அதுல சின்ன சின்ன மீனுங்க வேற அங்க அங்க போய்கிட்டு இருக்கு மக்கள் எல்லாரும் சந்தோசமா விளையாடிகிட்டு இருந்தாங்க.
                  </p>

                  <p>
                    இதுல எங்க நம்ம குளிக்கனு நான், ஆஷிப் அந்த இடத்த  தாண்டி நடந்து போய் கிட்டு இருந்தோம். அப்போ அங்க ஒரு கிணறு இருந்துச்சு யாருமே அங்க குளிக்கல அங்க தண்ணி  நீல வானம் கலர்ல இருந்துச்சு. சரி இங்க குளிச்சிட்டு வேகமா வீட்டுக்கு போனும்னு நெனெச்சேன். ஆஷிப் வேற எப்படியும் உள்ள இறங்க மாட்டான் அவனுக்கு நீச்சல் தெரியாது. சரி நாம குளிப்போம்னு உள்ள குதிச்சிட்டேன். தண்ணிக்குள்ள கொஞ்சம் ஆழமா வேற போய்ட்டேன் அடுத்த நொடியே அந்த தண்ணி பனிக்கட்டியா ஆகிட்டு வந்துச்சு என்ன இந்த தண்ணி இப்படி ஆகுதுனு தண்ணிக்கு மேல வர்ற முயற்சி பன்னிக்கிட்டு இருந்தேன் தண்ணிக்கு மேல வர்றதுக்கு கொஞ்ச தூரம் தான் இருக்கு ஆனா அதுக்குள்ள பனிக்கட்டி என்ன உள்ள புடிச்சிக்கிச்சு கடைசியா என் கை மட்டும் மேல கொண்டுபோறேன். நான் உள்ளவே மாட்டிக்குறேன்.
                  </p>

                  <p>
                    என் கைல உள்ள அந்த dsm சில்வர் காப்ப பாத்து ஆஷிப் தீபக் தீபக்னு கத்துறான் அதுமட்டும் என் காதுக்கு கேக்குது. அப்படியே அவனோட சத்தம் மெல்ல மெல்ல மறைஞ்சு எங்க அம்மா சத்தம் தீபக் தீபக்னு கேக்குது வேகமா எந்திச்சு ஆபீஸ்க்கு கெளம்புடானு சொல்ராங்க. முழிச்சு பாத்த இன்னைக்கு வந்ததும் கனவு தான். ஆனா அப்புறம் என் கைய பாக்குறேன் அந்த மாரி ஒரு காப்பு நான் போடவே இல்ல அப்போ அந்த dsm காப்பு என்ன அது தான் நம்மளோட எல்லா கனவுளையும் இருக்கு ஏன் அது என்ன ஏமாத்துது dsm னா என்னவா இருக்கும்னு யோசிச்சிகிட்டு இருந்தேன்.
                  </p>

                  <h3 className="pt-5">
                    Dream Spoofed Me
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
