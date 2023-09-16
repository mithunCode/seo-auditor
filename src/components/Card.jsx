import correct from "../assets/correct.png";
import wrong from "../assets/wrong.png";
const Card = (res) => {
  let finalRes = res.result[0];

  const displayData = [
    //meta-stats
    { desc: "URL LENGTH", val: finalRes?.url_length },

    { desc: "INTERNAL LINKS", val: finalRes?.meta.internal_links_count },
    { desc: "EXTERNAL LINKS", val: finalRes?.meta.external_links_count },
    { desc: "SCRIPTS", val: finalRes?.meta.scripts_count },
    { desc: "PLAIN TEXT SIZE", val: finalRes?.meta.content.plain_text_size },
    { desc: "PLAIN TEXT RATE", val: finalRes?.meta.content.plain_text_rate },
    {
      desc: "PLAIN TEXT WORD COUNT",
      val: finalRes?.meta.content.plain_text_word_count,
    },
    {
      desc: "Automated Readability Index",
      val: finalRes?.meta.content.automated_readability_index,
    },
    {
      desc: "Coleman Liau Readability Index",
      val: finalRes?.meta.content.coleman_liau_readability_index,
    },
    {
      desc: "Flesch Kincaid Readability Index",
      val: finalRes?.meta.content.flesch_kincaid_readability_index,
    },
    {
      desc: "Smog Readability Index",
      val: finalRes?.meta.content.smog_readability_index,
    },
  ];
  const speedInsights = [
    {
      desc: "Time to interactive",
      val: finalRes?.page_timing.time_to_interactive,
    },
    {
      desc: "DOM COMPLETE",
      val: finalRes?.page_timing.dom_complete,
    },
    {
      desc: "Time to Secure Connection",
      val: finalRes?.page_timing.time_to_secure_connection,
    },
    {
      desc: "Waiting Time",
      val: finalRes?.page_timing.waiting_time,
    },
  ];
  const pageResults = [
    {
      desc: "BROKEN RESOURCES",
      val: finalRes?.broken_resources,
    },
    {
      desc: "BROKEN Links",
      val: finalRes?.broken_links,
    },
    {
      desc: "Duplicate Title",
      val: finalRes?.duplicate_title,
    },
    {
      desc: "Duplicate Description",
      val: finalRes?.duplicate_description,
    },
    {
      desc: "Duplicate Content",
      val: finalRes?.duplicate_content,
    },
    {
      desc: "Size",
      val: finalRes?.size,
    },
    {
      desc: "High Loading Time ",
      val: finalRes?.checks.high_loading_time,
    },
    {
      desc: "Redirects",
      val: finalRes?.checks.is_redirect,
    },
    {
      desc: "Favicon",
      val: finalRes?.checks.no_favicon,
    },
    {
      desc: "low content rate",
      val: finalRes?.checks.low_content_rate,
    },
    {
      desc: "Has render blocking resources",
      val: finalRes?.checks.has_render_blocking_resources,
    },
  ];

  if (finalRes) {
    return (
      <>
        <div className="text-orange-600 text-bold text-3xl font-palanquin flex-col  flex justify-center mt-10 gap-1 items-center   p-3 px-6">
          <label htmlFor="">ON PAGE SCORE </label>
          <div className="text-green-600 text-bold text-5xl font-palanquin  flex justify-center  gap-10 items-center  ">
            {finalRes?.onpage_score}
          </div>
        </div>
        <h2 className="font-bold font-palanquin mt-24 text-3xl text-white text-center">
          RESULTS
        </h2>
        {/* DISPLAY STATS */}
        <div className="flex flex-rows flex-wrap justify-center items-center gap-10 p-2 mt-6">
          {displayData &&
            displayData?.map((data, i) => {
              return (
                <div
                  className="flex flex-col justify-center gap-2 items-center text-black bg-white font-palanquin rounded shadow-white p-3 px-5 m-3 h-24 w-64"
                  key={i}
                >
                  <p className="text-sm text-slate-600">
                    {data.desc.toUpperCase()}
                  </p>
                  <p className="text-3xl text-bold text-black">
                    {Math.trunc(data.val)}
                  </p>
                </div>
              );
            })}
        </div>

        {/* DISPLAY SPEED */}
        <h2 className="font-bold font-palanquin mt-24 text-3xl text-white text-center">
          SPEED INSIGHTS
        </h2>
        <div className="flex flex-rows flex-wrap justify-center items-center gap-10 p-2 mt-6">
          {speedInsights &&
            speedInsights.map((data, i) => {
              return (
                <div
                  className="flex flex-col justify-center gap-2 items-center text-black bg-white font-palanquin rounded shadow-white p-3 px-5 m-3 h-24 w-64"
                  key={i}
                >
                  <p className="text-sm text-slate-600">
                    {data.desc.toUpperCase()}
                  </p>
                  <p className="text-3xl text-bold text-black">
                    {Math.trunc(data.val)}
                  </p>
                </div>
              );
            })}
        </div>
        {/* DisplayTags */}
        <h2 className="font-bold font-palanquin mt-24 text-3xl text-white text-center">
          H1 Tags
        </h2>
        <div className="flex flex-rows flex-wrap text-center justify-center items-center gap-10 p-2 mt-6 ">
          <div className="flex flex-col justify-center r gap-2 items-center text-black bg-white font-palanquin rounded shadow-white p-3 px-5 m-3 h-24 w-64">
            <p className="text-xl text-bold text-black flex items-center justify-center">
              {finalRes?.meta.htags?.h1
                ? finalRes?.meta.htags?.h1[0]
                : "No H1 Tags Found"}
            </p>
          </div>
        </div>

        <h2 className="font-bold font-palanquin mt-24 text-3xl text-white text-center">
          ON PAGE RESULTS
        </h2>
        {/*On Page */}
        <div className="flex flex-rows flex-wrap justify-center items-center gap-10 p-2 mt-6">
          {pageResults &&
            pageResults?.map((data, i) => {
              return (
                <div
                  className="flex flex-col justify-center gap-2 items-center text-black bg-white font-palanquin rounded shadow-white p-3 px-5 m-3 h-24 w-64"
                  key={i}
                >
                  <p className="text-sm text-slate-600">
                    {data.desc.toUpperCase()}
                  </p>
                  <p className="text-3xl text-bold text-black">
                    {data.val === undefined || data.val === false ? (
                      <img src={correct} alt="" width={20} />
                    ) : (
                      <img src={wrong} alt="" width={20} />
                    )}
                  </p>
                </div>
              );
            })}
        </div>
      </>
    );
  }
};

export default Card;
