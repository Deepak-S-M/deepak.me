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
                  EP-05
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
                    ரொம்ப நேரம் அங்கவே வெயிட் பன்னதுக்கு அப்புறம் கழிச்சு அங்க புல் திரும்ப வளருது வானத்துல அந்த ரெட்டை சூரியன் உதிக்குது வேகமா அந்த டென்ட் ஆ பாத்து ஓடுனேன். அதே கட்டைல சூரியனை பாத்த மாரியே உட்காந்து இருந்தாள் போய் பக்கத்துல உட்காந்தேன். அவளும் என்ன பாத்தா. ரெண்டு பேருக்கும் ரொம்ப சந்தோஷம்.                  
                  </p>
                 
                  <p>
                    <span className="text-black dark:text-white">தீபக்:</span> நீ என் இங்க உக்காந்து இருக்க <br></br>                        
                    <span className="text-black dark:text-white">ரீ : </span> ஏன் அப்டி கேக்க <br></br>
                    <span className="text-black dark:text-white">தீபக்:</span> இல்ல நேத்தே உன்ன பாத்தேன் இங்க தான் இருந்த அந்த சூரியனை பாத்துகிட்டே...<br></br>                        
                    <span className="text-black dark:text-white">ரீ : </span> இல்ல நம்ம உலகம் அழியப்போகுதுல அதான் <br></br>
                    <span className="text-black dark:text-white">தீபக்:</span> ஏன் தா அப்டி சொல்லுற<br></br>                        
                    <span className="text-black dark:text-white">ரீ : </span> அங்க பாரு சூரியன் வித்யாசமா இருகுல அதான் எப்ப அழிய போகுதுனு பாத்துட்டே இருக்கேன்<br></br>
                    <span className="text-black dark:text-white">தீபக்:</span> நம்ம உலகம் அழிய போகுதோ.இது உன்னோட கனிவு டி, <br></br>                        
                    <span className="text-black dark:text-white">ரீ : </span> கனவா...<br></br>
                    <span className="text-black dark:text-white">தீபக்:</span> அதிர்ச்சி ஆகாத பின்ன முழிச்சிருவ.<br></br> 
                  </p>

                  <p>
                    சொல்லி வாய மூடல உடனே அந்த சூரியன் மறைஞ்சு போகுது அப்புறம் அவளும் மறைஞ்சு போறாள். கனவுல இருந்து முழிச்சிட்டாள் போல அப்டினு நெனெச்சி அங்கவே வெயிட் பன்னிகிட்டு இருந்தேன். திரும்ப சூரியன் உதிக்குது அவளும் வாரா.
                  </p>

                  <p>                       
                    <span className="text-black dark:text-white">ரீ : </span> டேய் என்ன இந்த பக்கம் <br></br>
                    <span className="text-black dark:text-white">தீபக்:</span> என்ன இந்த பக்கம்மா நான் எவ்ளோ நேரம் வெயிட் பன்றேன் தெரியுமா <br></br>                        
                    <span className="text-black dark:text-white">ரீ : </span> ஏன் வெயிட் பன்ற, <br></br>
                    <span className="text-black dark:text-white">தீபக்:</span> நான் உன்ன பதட்ட படாதனு சொன்னேன்ல அதுனால தான் முழிச்சிகிட்ட <br></br>                        
                    <span className="text-black dark:text-white">ரீ : </span> என்னடா சொல்ற எனக்கு ஒன்னும் புரியல <br></br>
                    <span className="text-black dark:text-white">தீபக்:</span> அதான் சொன்னேன்ல இதெல்லாம் கனவுனு <br></br>                        
                    <span className="text-black dark:text-white">ரீ : </span> ஆமா.. எனக்கு இப்ப தான் ஞாபகம் வருது. நீ சொன்னல அப்ப இதுவும் கனவா <br></br>
                    <span className="text-black dark:text-white">தீபக்:</span> ஆமா தா நீ நம்பலையா இரு, நீ அந்த சூரியன் அப்டி இருக்குறதுனால உலகம் அழிய போகுதுனு நினைகுறல, இப்ப அந்த சூரியனை எப்பவும் போல மாத்தட்டா <br></br>                        
                 </p>

                 <p>
                  உடனே நான் அந்த ரெண்டு சூரியனும் ஒரே சூரியனா நிஜ உலகத்துல இருக்குற மாறியே மாறணும்னு நினைக்கேன் அதுவும் மாறுது. அது மாறுனத பாத்துட்டு அப்டியே திரும்பி அவளை பாக்குறேன் ஆனா ரீ ஆச்சர்யத்துல இருக்காள் அவளுக்கு பக்கதுல உள்ள புல்லுலாம் மறுபடியும் மறையுது அத பாத்துட்டு 
                 </p>

                  <p>
                    <span className="text-black dark:text-white">தீபக்:</span> ஏ.. இவ்வளவு ஷாக் ஆகாத <br></br>          
                  </p>

                  <p>
                   அதுக்குள்ள ரீ மறுபடியும் மறைஞ்சு போய்ட்டாள். திரும்ப வந்தாள்.
                  </p>

                  <p>              
                    <span className="text-black dark:text-white">தீபக்:</span> ஏன் அதுக்குள்ள மறைஞ்சு மறைஞ்சு போகுற, நீ ரொம்ப ஷாக் ஆகாத அப்டி ஆனனா இப்படித்தான் முழிச்சிருவ.<br></br>  
                    <span className="text-black dark:text-white">ரீ : </span> ஓ அப்புடியா சரி, அப்ப இது கனவு தான இதுல நாம நெனைச்சதெல்லாம் நடக்குமா.<br></br>
                    <span className="text-black dark:text-white">தீபக்:</span> ம்ம்.. உனக்கு என்ன ஆசை இருக்குனு சொல்லு <br></br>                        
                    <span className="text-black dark:text-white">ரீ : </span> ம்ம்….. கப்பலுல போனும்,<br></br>
                    <span className="text-black dark:text-white">தீபக்:</span> அவோலோதான இப்பவே போயிறலாம்<br></br>                        
                    <span className="text-black dark:text-white">ரீ : </span> இப்பவேனா, இங்க இருந்து எப்படி போக <br></br>
                    <span className="text-black dark:text-white">தீபக்:</span> பறந்து போவோமா <br></br>                        
                    <span className="text-black dark:text-white">ரீ : </span> எப்புடி. ஹெலிகாப்டர் வர வைக்க போறியா<br></br>
                    <span className="text-black dark:text-white">தீபக்:</span> அதுவும் நல்லா தான் இருக்கும். ஆனா அதுல ரொமான்ஸ் இருக்காதே. அதனால உன் கைய குடு <br></br>                        
                  </p>

                  <p>
                    அப்டினு சொல்லிட்டு ரெண்டு பேரும் அப்டியே பறக்குறோம். ரெண்டுபேருக்கும் அவளோ சந்தோஷம், அப்டியே பறந்து போய்கிட்டு இருக்கோம். 
                  </p>

                  <p>
                    <span className="text-black dark:text-white">தீபக்:</span> நீ தனியா பறக்குறியா<br></br>   
                    <span className="text-black dark:text-white">ரீ : </span> என்னால முடியுமா <br></br>
                    <span className="text-black dark:text-white">தீபக்:</span> ஆஹான்  உன்னால முடியாதது எதுவுமே  இல்ல, நீ பறக்குற மாரி நெனெச்சிக்கோ அவோலோதான்  நீயும் பரப்ப <br></br>                        
                  </p>

                  <p>
                    அப்டியே மெது மெதுவா அவளோட கைய விட்டேன் அவளும் அப்டியே பறக்க ஆரம்பிச்சாள். 
                  </p>

                  <p>
                    <span className="text-black dark:text-white">தீபக்:</span> சரி போதும் வேம வா கப்பலுக்கு போக வேண்டாமா.<br></br> 
                    <span className="text-black dark:text-white">ரீ : </span> அத அப்புறம் பாத்துக்குவோம். இதுவே நல்லா ஜாலியா தான் இருக்கு.<br></br>
                    <span className="text-black dark:text-white">தீபக்:</span> வரவா மாட்டுக்க உனக்கு தான் பேய்னா பயம்தான இரு ஒரு நல்ல பேயா ரெடி பன்றேன்.<br></br>                        
                  </p>

                  <p>
                    திடீருனு அவளுக்கு முன்னாடி ஓரு பேய் வருது அத பாத்து பயந்து போய் இருக்குறாள் திடீருனு மறைஞ்சு போறாள். அவசரப்பட்டோமோ அய்யயோ திரும்பி வந்தோனே சாரி கேட்ருவோம். திரும்ப அங்க புல்லுலாம் வளருது ஒரு சூரியன் உதிக்குது திரும்ப வந்துட்டாள்.
                  </p>

                  <p>
                    <span className="text-black dark:text-white">தீபக்:</span> சாரி தா. தெரியாம பன்னிட்டேன், நான் தான் அந்த பேய வரவச்சேன். இன்னும் ஏன் சோகமா இருக்க என்ன மன்னிச்சிரு சாரி.<br></br> 
                    <span className="text-black dark:text-white">ரீ : </span> டேய் எனக்கு அது ஒரு பிரச்சனையும் இல்ல நீ உண்மைதான இல்ல என் கற்பனையா.<br></br>
                    <span className="text-black dark:text-white">தீபக்:</span> ஏன் அப்படி கேக்குற நான் உண்மை தான். ஏதும் பிரச்சனையா.<br></br>                        
                    <span className="text-black dark:text-white">ரீ : </span> இல்லடா.. நீ..<br></br>
                    <span className="text-black dark:text-white">தீபக்:</span> என்ன இழுக்குற சொல்லு <br></br>                        
                    <span className="text-black dark:text-white">ரீ : </span> இல்ல நான் திடீருனு திடீருனு மறைஞ்சு போறேன்னு சொல்லுறல ஏன் <br></br>
                    <span className="text-black dark:text-white">தீபக்:</span> ஏன்னா இப்பதான் உனக்கு கனவுனு தெறிதுல, அதான் ஷாக்ல தூக்கத்துல இருந்து முழிச்சுகிடுற <br></br>                        
                    <span className="text-black dark:text-white">ரீ : </span> சரி அந்த நேரத்துல நீ என்ன பன்னுவ <br></br>
                    <span className="text-black dark:text-white">தீபக்:</span> நான் இங்க திரும்ப நீ வர்ற வர வெயிட் பன்னுவேன். ஏன் இப்ப இதெல்லாம் கேக்குற <br></br>                        
                    <span className="text-black dark:text-white">ரீ : </span> நான் முழிச்சிக்கிடுறேன் சொல்லுறல நான் பதட்ட பட்டுலாம் முழிச்சிக்கிடல, நிஜ உலகத்துல பகல் ஆகிருது அதான் நான் முழிச்சிக்கிடுறேன் மறுநாள் தூங்குறேன் கனவு வருது நீ திரும்ப வர்ற நான் உன்கிட்ட பேசிகிட்டு இருக்கேன். நீ ரொம்ப நாளா நிஜ உலகத்துக்கு போகவே இல்ல<br></br>
                    <span className="text-black dark:text-white">தீபக்:</span> அப்போ நான் எவ்ளோ நாளா தூங்கிட்டு இருக்கேன்.<br></br>                        
                    <span className="text-black dark:text-white">ரீ : </span> நாலு நாளா<br></br>
                    <span className="text-black dark:text-white">தீபக்:</span> நாலு நாள் ஆச்சா <br></br>                        
                    <span className="text-black dark:text-white">ரீ : </span> அது மட்டும் இல்ல, நீ தூங்கிட்டுலாம் இல்ல நீ செத்துட்ட.<br></br>
                  </p>

                  <h3 className="pt-5">
                    Dream Slaved Me
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
