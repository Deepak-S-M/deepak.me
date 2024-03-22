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
                  EP-06
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
                    <span className="text-black dark:text-white">தீபக்:</span> என்ன தா சொல்ற உண்மையிலே செத்துட்டேனா.<br></br>                        
                    <span className="text-black dark:text-white">ரீ : </span> ஆமாடா உன்ன உங்க வீட்டுலயே பொதச்சி வச்சிட்டாங்கலாம்.<br></br>
                    <span className="text-black dark:text-white">தீபக்:</span> எங்க வீட்டுல வேற யார் இருகாங்க<br></br>                        
                    <span className="text-black dark:text-white">ரீ : </span> உங்க வீட்டுல இப்ப யாருமே இல்ல, உன்ன பொதச்சிவச்சிட்டு போய்ட்டாங்களாம்.<br></br>
                    <span className="text-black dark:text-white">தீபக்:</span> சரி நான் போயிட்டு வாரேன்.<br></br>                        
                    <span className="text-black dark:text-white">ரீ : </span> எங்க போர<br></br>
                    <span className="text-black dark:text-white">தீபக்:</span> நிஜ உலகத்துக்கு <br></br>                        
                    <span className="text-black dark:text-white">ரீ : </span> நீ என்ன லூசா அங்க போனனா திரும்ப வரமாட்ட, அதனால நீ இங்கவே இரு <br></br>
                    <span className="text-black dark:text-white">தீபக்:</span> அதெல்லாம் வந்துருவேன் என்ன நம்பு <br></br>                        
                    <span className="text-black dark:text-white">ரீ : </span> எப்படிடா வருவ <br></br>
                    <span className="text-black dark:text-white">தீபக்:</span> நான் வந்து சொல்றேன் <br></br>                        
                    <span className="text-black dark:text-white">ரீ : </span> சரி அப்ப நானும் வரேன் <br></br>
                    <span className="text-black dark:text-white">தீபக்:</span> நீ எங்க வர்ற, நீ இங்கவே இரு நான் போயிட்டு இங்க தான் வருவேன். என்னால உன்ட மட்டும் தான் கனவுக்குள்ள பேச முடியும் வேற யார் கூடையும் இப்டி பேச முடியாது.  <br></br>                        
                    <span className="text-black dark:text-white">ரீ : </span> ஏன்?<br></br>
                    <span className="text-black dark:text-white">தீபக்:</span> தெரில நான் ஆஷிப் ஓட "dsm" குள்ள போய் பாத்தேன் என்னால முடில <br></br>                        
                    <span className="text-black dark:text-white">ரீ : </span> சரி வந்துருவல <br></br>
                    <span className="text-black dark:text-white">தீபக்:</span> கண்டிப்பா வருவேன், உன்ன விட்டு எங்கையும் போக மாட்டேன்.<br></br>    
                  </p>

                  <p>
                    உடனே கனவுல இருந்து முழிக்க பாத்தேன் என்னால முடில.
                  </p>

                  <p>                    
                    <span className="text-black dark:text-white">ரீ : </span> என்ன ஆச்சு ஏன் இன்னும் போக மாட்டுக்க<br></br>
                    <span className="text-black dark:text-white">தீபக்:</span> உன் கனவுக்குள்ள இருக்குறது நாள முழிக்க முடில போல, உன் "dsm" விட்டு வெளிய போனும் <br></br>                        
                    <span className="text-black dark:text-white">ரீ : </span> சரி போனாலும் இவ்வளவு நாள் நீ தூங்கிட்டு தான இருந்த எப்படி நீ திரும்ப தூங்குவ <br></br>
                    <span className="text-black dark:text-white">தீபக்:</span> நீ வேற, உனக்கும் எனக்கும் செட் ஆகாதுன்னு சொல்லிட்டு break up பன்னிட்டு போய்ட்ட கொரோனா ஊரடங்குல வீட்டுல என்ன பன்னேனு நினைக்குற கும்பகர்ணன் தான்.<br></br>                        
                    <span className="text-black dark:text-white">ரீ : </span> சரி வேகமா போயிட்டு வா<br></br>
                  </p>

                  <p>
                    அவளோட "dsm" அ விட்டு வெளிய வந்தோனே முழிச்சிட்டேன். முழிச்சு கைய தொட்டு பாத்தேன் "dsm" சில்வர் காப்பு இல்ல அங்க ஒரே இருட்டு கைய வச்சி மேல தட்டி பாத்தேன். அவா சொன்ன மாரி என்ன ஏதோ சவப்பெட்டில வச்சு அடச்சி வச்சியிருந்தாங்க. அப்பாடா நான் உயிரோட தான் இருக்கேன்னு நெனெச்சேன். அப்டியே அங்க இருந்து திரும்ப தூங்குறேன். கனவுக்குள்ள வந்துட்டேன். அப்புறம் ரீ ஓட "dsm" குள்ளவும் வந்துடேன். ஆனா அவளை காணும். சரி இன்னும் துங்கல போலனு நெனெச்சி. அங்கவே இருந்து அங்க ஒரு கட்டைய வரவச்சி அதுல உக்காந்தேன். என் கைய பாத்தேன் "dsm" காப்பு இருந்துச்சு அத பாத்துகிட்டே உக்காந்து இருந்தேன். கொஞ்ச நேரம் கழிச்சு ரீ வந்துட்டா.
                  </p>

                  <p>                      
                    <span className="text-black dark:text-white">ரீ : </span> என்னடா என்ன ஆச்சு<br></br>
                    <span className="text-black dark:text-white">தீபக்:</span> ஒன்னும் ஆகல என்ன பொதச்சி வச்சிருக்காங்க ஆனா நான் உயிரோடதான் இருக்கேன்.<br></br>                        
                    <span className="text-black dark:text-white">ரீ : </span> இப்ப என்ன பண்ணனும் <br></br>
                    <span className="text-black dark:text-white">தீபக்:</span> நீ தான் என்ன காப்பாத்தணும் <br></br>                        
                    <span className="text-black dark:text-white">ரீ : </span> நான் என்ன பண்ண<br></br>
                    <span className="text-black dark:text-white">தீபக்:</span> நேரா எங்க வீட்டுக்கு போ அங்க என்ன பொதச்சி வச்ச எடத்துல இருந்து என்ன தோண்டி எடு அவோலோதான்.<br></br>                        
                    <span className="text-black dark:text-white">ரீ : </span> இருந்தாலும்,<br></br>
                    <span className="text-black dark:text-white">தீபக்:</span> சரி இப்ப நீ முதல முழிக்கனும். என் கூட வா<br></br>                        
                    <span className="text-black dark:text-white">ரீ : </span> இல்லடா .. ஆனா நீ என்னோட கற்பனையோனு தோணுது <br></br>
                    <span className="text-black dark:text-white">தீபக்:</span> இங்க பாரு நம்ம ரெண்டுபேரும் கனவுல முதல் தடவ பாக்குறதுக்கு முன்னாடியே இன்னொரு நாள் உன்ன பாத்தேன்னு சொன்னேன்ல. அன்னைக்கே எங்க வேன் டிரைவர் சொன்னாரு நான் மூச்சு பேச்சு இல்லாம இருந்தேன்னு. அன்னைக்கு உன்னோட "dsm" விட்டு வெளிய போனதுனால தான் முழிச்சேன். இந்த தடவ நான் போகவே இல்லல அதான் நான் செத்துட்டேன்னு நெனெச்சிட்டாங்க.<br></br>                        
                    <span className="text-black dark:text-white">ரீ : </span> ஓ..<br></br>
                    <span className="text-black dark:text-white">தீபக்:</span> அதுக்கும் மேல சந்தேகம் இருந்துச்சுன்னா, உனக்கு எங்க வீடு தான தெரியும் ஆனா எங்க வீட்டு நம்பர் தெரியாதுல. எங்க வீடு நம்பர் 710 அப்டினு இருந்துச்சுன்னா என்ன காப்பத்து இல்லனா விட்டுரு.<br></br>                        
                  </p>

                  <p>
                    அப்டியே பேசிக்கிட்டே பெரிய தண்ணி டேங்க் மேல ஏறி வந்துட்டோம். 
                  </p>

                  <p>
                    <span className="text-black dark:text-white">தீபக்:</span> சரியா இனி என் உயிர் உன் கைல தான் தா இருக்கு<br></br> 
                    <span className="text-black dark:text-white">ரீ : </span> சரி டா நான் எப்படி கனவுல இருந்து முழிக்குறது<br></br>
                    <span className="text-black dark:text-white">தீபக்:</span> அதுக்குதான இங்க கூட்டு வந்தேன், எதாச்சும் பயம் குடுத்துனா தான் முழிப்ப. கீழ பாரு <br></br>                        
                    <span className="text-black dark:text-white">ரீ : </span> தண்ணி டேங்க் எவ்ளோ உயரம் எப்படா ஏறி வந்தோம் <br></br>
                  </p>

                  <p>
                    அப்டினு ரீ கீழ பாத்துகிட்டு இருந்த நான் அவளை மேல இருந்து கீழ தள்ளிவிட்டேன். ரீ கீழ விழும்போதே மறஞ்சுபோய்ட்டாள்.
                  </p>

                  <p>
                    <span className="text-black dark:text-white">தீபக்:</span> பறக்குறதுக்குலாம் சொல்லி குடுத்தேனே உனக்கு. நல்ல வேல பறந்துருவியோன்னு நெனெச்சேன்.<br></br>                        
                  </p>

                  <p>
                    அப்படியே நானும் தூக்கத்துல இருந்து முழிச்சிகிட்டேன். ரீ எங்க வீட்டுக்குள்ள வந்துட் டாள் என்ன பொதச்சி வச்ச இடத்துல இருந்து என்ன தோண்டி வெளிய எடுத்துட்டாள். நானும் அப்டியே அந்த சவப்பெட்டியில் இருந்து எந்திச்சேன் ரொம்ப நேரம் படுத்தே இருந்ததுனால என்னால எந்திக்க முடில அப்டியே சவப்பெட்டி மேலையே உட்காந்துட்டேன். 
                  </p>
                    
                  <p>
                    <span className="text-black dark:text-white">ரீ : </span> நல்லா ரெஸ்ட் எடுத்துக்கோ போய் எங்க மாமா அத்தைக்கு ஷாக் கொடுப்போம்.<br></br>
                    <span className="text-black dark:text-white">தீபக்:</span> ம்.. எங்க வீட்டுக்கு முதல் தடவ வந்துருக்க நான் வேணா டீ போட்டு தரவா.<br></br>                        
                    <span className="text-black dark:text-white">ரீ : </span> முதல என்ன டீ போட்டு கூப்புடு அதுக்கே சார் க்கு வாய் வராது.  <br></br>
                  </p>

                  <h3 className="pt-5">
                    Dream Saved Me
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
