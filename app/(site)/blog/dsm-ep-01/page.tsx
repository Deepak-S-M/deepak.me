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
                  EP-01
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
                      Category: 
                    </span>{" "}
                    Fiction
                  </li>
                </ul>

                <div className="blog-details">
                  <p>
                    என்னோட அண்ணன்களும், நண்பர்களும் வீட்டுக்குள்ள பேசி கொண்டு இருந்தாங்க நான் மட்டும் வெளிய வந்து எங்களோட கார் செட்டுக்கு சார்ஜ் ஏத்தி வச்சியிருந்த அவங்களோட மொபைல்ஸ் அப்புறம் என்னோட மொபைல் மற்றும் லேப்டப் ஆ எடுக்க போனேன்.
                  </p>

                  <p>
                    போய் சட்ற தொறந்தேன் ரொம்ப இருட்டா இருந்துச்சு அதுனால லைட் சுவிட்ச்ச  போட்டேன். அப்ப ஏதோ ஒன்னு என்னோட தலையில பட்டு கீழ விழுந்துச்சு என்னதா இருக்கும்னு கீழ பாத்தா அங்க கீழ விழுந்தது எலி. அத பாத்து நன் பயப்பட என்ன பாத்து அது பயப்புட்டு பதரி போய் என்னோட கால் மேல ஏறிருச்சி உடனே நான் குதிச்சி தெரியாம சார்ஜ் ஏறிக்கொண்டிருந்த என் மொபைல் மேல என்னோட கையில உள்ள சில்வர் காப்பு பட்டு கீழ தள்ளி விட்டேன்.
                  </p>

                  <p>
                    கீழ விழுந்த என் மொபைல எடுத்து பாத்தேன் எப்பவும் போல கொஞ்ச விரிசல் கூட இல்லாம இருந்துச்சு. மொபைல ஆன் பண்ணி பாத்தேன் ஆன் ஆகுச்சு. அப்புறம் என் லேப்டப், மிச்ச எல்லோரோட மொபைலையும் எடுத்துட்டு கார் செட்டுல உள்ள சட்ற  கீழ இறக்கி விட்டு வீட்டுக்குள்ள போலாம்னு கிளம்புறேன். அப்ப என்னோட நன்பன் ஆஷிப் வாரான்.
                  </p>

                  <p>
                  (ஆஷிப்பும் நானும் எங்க கார் செட்டுக்கு வெளியே நின்று பேசிக்கொள்வது).
                  </p>

                  <p>
                  ஆஷிப் : டேய் தீபக் என்னடா எல்லாரும் வந்துட்டாங்களா.<br></br>
                  தீபக்       :  டேய் என்னடா இப்ப தான் வர்ற அங்க எல்லாரும் அப்பவே வந்துடாங்க.<br></br>                        
                  ஆஷிப் :   இல்லடா மதியம் அருவிக்கு குளிக்க போனேம்லடா அங்க அலை வரும்போது தண்ணிக்குள்ள முன்கிட்டேன்டா அடுத்து  படில மேல ஏறி          வரும்போது கல்லுல இடிச்சிகிட்டேன் அதான் வந்து வலில  தூங்கிட்டேன்.<br></br>
                  தீபக்      :   என்னடா அருவிக்கு குளிக்க போனனு சொன்ன பின்ன அலை வந்துச்சி உள்ள இழுதிச்சினு கூட சொல்ல மாட்டுக்க  முன்கிட்டேன்னு சொல்லுற பின்ன படியேறி மேல வந்துட்டேன்னு சொல்லுற.
                  </p>

                  <p>
                    இப்படி நாங்க பேசிகிட்டு இருக்கும்போது எங்க வீட்டுக்கு எதுரே கொஞ்சம் இடது பக்கம் தள்ளி ஒரு தெரு இருக்கு அந்த பக்கம் ஒரே பயங்கரமான சத்தம். அத கேக்கவே முடில அருவருப்பா இருக்கு ரொம்ப சத்தமா வேற இருக்கு. ச்ச்சீ என்னடா இந்த சத்தம் இப்படி கேவலமா இருக்குனு சொல்றேன் ஆஷிப் காதுல கைய வச்சிக்கிட்டு கீழ உக்காந்துட்டான். ஆனா ஆதே சமயம் ரொம்ப பயமா வேற இருக்கு அந்த சத்தம் பயத்த  வேற கெளப்புது. மனசு திக்கு  திக்குனு வேற அடிக்கு. நான் ஆஷிப் தள்ளிட்டே வீட்டுக்குள்ள போறேன். உள்ள போனோனே  லேப்டப்பயும் மொபைலையும் கட்டுல போட்டுட்டு கதவை அடைக்காலம்னு பாக்குறேன்.
                  </p>

                  <p>
                    அப்போ கும்பல் கும்பலா  நெறய பேர் வாரங்க எல்லாரும் ஆதி வாஷிங்க மாரி ஆடை அணிந்து இருகாங்க. கொஞ்ச பேர் எல்லா வீட்டு மேலையும் தாவி கிட்டு இருகாங்க, இன்னும் கொஞ்ச பேர் அங்க இருக்குற குப்பை தொட்டில உள்ள குப்பையை, கீழ கிடக்குற கல்ல எல்லாம் எடுத்து, வீட்டு மேல எறிஞ்சுகிட்டே வாராங்க. அந்த கூடத்துக்கு நடுவுல அவங்க தலைவி மாரி ஒருத்தி கைல தீப்பந்தம் எடுத்துக்கிட்டு வார எல்லாரோட வீட்டுக்கு முன்னாடி இருந்து ஏதோ சபிக்குறா. அத இங்க இருந்து நான் பயத்தோட  பாத்துகிட்டு இருக்கேன்  அத அவா பாத்துட்டாள். 
                  </p>

                  <p>
                    நான் வேகம கதவ அடைச்சிட்டேன். அப்புறம் அந்த கும்பல் எங்க வீட்டுக்கு பக்கத்துலையும் வருது அந்த தலைவி ஆக்ரோஷமா! சபிக்குற  சத்தம் கேக்குது அவ கூட இருக்குறவங்க கத்துற சத்தமும் கேக்குது. அப்புறம் அவ கூட உள்ளவங்க கல்ல தூக்கி எங்க வீட்டு ஜன்னலுல எரியுறாங்க அப்போ ஜன்னல் கண்ணாடி ஒடஞ்சி அந்த ஓட்டை வழிய அவங்க தலைவி முகம் தெறியுது அவ அவளோட முடிய பிச்சி அந்த தீப்பந்தத்துல போட்டு எடுக்குற அது ஏறியுர  பாம்பு மாரி பெருசா மாறுது அத அந்த ஓட்டை வழியா தூக்கி போடுறா அது என் மேல வந்து விழுந்து என் கைய அப்டியே விழுங்குது நன் பயத்துல எந்திக்குறேன் அங்க இருந்த எதையும் காணும் அப்போ தான் தெரிய வருது  ஓஓ இதெல்லாம் கனவுனு!.
                  </p>

                  <h3 className="pt-5">
                    Dream Scared Me
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
